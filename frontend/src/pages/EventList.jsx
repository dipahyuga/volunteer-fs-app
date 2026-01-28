import React, { useEffect, useState } from 'react';
import api from '../services/api';

const EventList = () => {
    const [events, setEvents] = useState([]);

    const handleJoin = async (eventId) => {
        try {
            const response = await api.post(`/events/${eventId}/join`);
            alert(response.data.message);
        } catch (err) {
            if (err.response?.status === 401) {
                alert('Silahkan login terlebih dahulu untuk mengikuti kegiatan.');
            } else {
                alert(err.response?.data?.message || 'Gagal mengikuti kegiatan')
            }
        }
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                //ambil data dari backend
                const response = await api.get('/events');
                const eventData = Array.isArray(response.data) ? response.data : response.data.data;
                setEvents(eventData || []);
            } catch (err) {
                console.error("Gagal mengambil kegiatan", err);
                setEvents([]);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Kegiatan Volunteer</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.map(event => (
                    <div key={event.id} className="border p-4 rounded-lg shadow">
                        <h2 className="text-xl font-bold">{event.title}</h2>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="text-sm text-blue-500">Tanggal: {event.event_date}</p>
                        <button onClick={() => handleJoin(event.id)} 
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                                Ikuti Kegiatan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventList;