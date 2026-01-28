<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Event::create([
            'title' => 'Relawan Bersih Pantai',
            'description' => 'Membantu membersihkan area pesisir dari sampah plastik.',
            'event_date' => '2026-02-10 08:00:00',
        ]);

        \App\Models\Event::create([
            'title' => 'Mengajar Anak Desa',
            'description' => 'Program mengajar baca tulis untuk anak-anak di desa',
            'event_date' => '2026-03-15 09:00:00',
        ]);
    }
}
