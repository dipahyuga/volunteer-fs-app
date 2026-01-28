import React, { useState } from 'react'
import api from '../services/api'

const AdminDashboard = () => {
    const [formData, setFormData] = useState({ title: '', description: '', event_date: '' });
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            //kirim data ke POST
            await api.post('/events', formData);
            alert('Event Berhasil Ditambahkan!');
            setFormData({ title: '', description: '', event_date: '' });
        } catch (err) {
           console.error("Full Error Response:", err.response);

    if (err.response) {
        // Jika backend mengirimkan pesan error spesifik
        const status = err.response.status;
        const message = err.response.data.message || "Terjadi kesalahan";
        
        if (status === 401) {
            alert(`Error 401: Sesi login tidak valid. Silahkan logout lalu login kembali.`);
        } else if (status === 422) {
            alert(`Error 422: Validasi gagal. Pastikan format judul, deskripsi, dan tanggal sudah benar.`);
        } else {
            alert(`Gagal (${status}): ${message}`);
        }
    } else {
        alert('Gagal terhubung ke server. Pastikan Backend berjalan.');
    }
}
    };

  return (
    <div className='container mx-auto p-6 max-w-2xl'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>Panel Admin: Buat Kegiatan</h1>
        <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-lg border space-y-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Judul Kegiatan</label>
                <input type='text' className='w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none'
                    value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Deskripsi</label>
                <textarea className='w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none'
                    value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Tanggal Pelaksanaan</label>
                <input type='date' className='w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none'
                    value={formData.event_date} onChange={e => setFormData({...formData, event_date: e.target.value})} required />
            </div>
            <button type='submit' disabled={loading}
                className={`w-full py-3 rounded-lg font-bold text-white transition ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}>
                    {loading ? 'Memproses...' : 'Tambahkan Kegiatan'}
            </button>
        </form>
    </div>
  );
};

export default AdminDashboard;
