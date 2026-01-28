import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';


const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/events/${id}`)
            .then(res => {
                setEvent(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                alert('Event tidak ditemukan');
                navigate('/')
            });
    }, [id]);

    const handleJoin = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Silahkan login terlebih dahulu untuk bergabung!');
            navigate('/login');
            return;
        }

        try {
            const res = await api.post(`/events/${id}/join`);;
            alert(res.data.message);
        } catch (err) {
            alert(err.response?.data?.message || 'Gagal bergabung');
        }
    };

    if (loading) return <p className='text-center mt-10'>Loading...</p>



  return (
    <div className='container mx-auto p-6 max-w-2xl'>
        <div className='bg-white rounded-2xl shadow-xl overflow-hidden border'>
            <div className='bg-blue-600 p-8 text-white'>
                <h1 className='text-3xl font-bold'>{event.title}</h1>
                <p className='mt-2 text-blue-100'>{new Date(event.event_date).toLocaleDateString('id-ID', { dateStyle: 'full' })}</p>
            </div>
            <div className='p-8'>
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>Tentang Kegiatan Ini</h3>
                <p className='text-gray-600 leading-relaxed mb-8'>{event.description}</p>
                <button onClick={handleJoin}
                    className='w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg'>
                        Gabung Menjadi Relawan Sekarang!
                    </button>
            </div>
        </div>
    </div>
  )
}

export default EventDetail
