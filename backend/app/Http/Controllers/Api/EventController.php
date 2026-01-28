<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::all();
        return response()->json([
            'success' => true,
            'data' => $events
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validasi Gagal', 'errors' => $validator->errors()], 422);
        }

        $event = Event::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $event
        ], 201);
    }

    public function show($id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $event
        ], 200);
    }

    public function join( $id)
    {

    $event = Event::findOrFail($id);
    $user = auth()->user();

    //user sudah login atau belum
    if ($event->users()->where('user_id', $user->id)->exists()) {
        return response()->json([
            'message' => 'Anda sudah mengikuti kegiatan ini.'
        ], 400);
    }

    $event->users()->attach($user->id);

    return response()->json([
        'success' => true,
        'message' => 'Successfully joined the event'
    ], 200);
}
}
