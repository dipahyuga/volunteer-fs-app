import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../services/api';


const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await api.post('/register', formData);
        alert("Registrasi Berhasil! Silakan Login.");
        navigate('/login');
    } catch (err) {

        const errorMessages = err.response?.data?.errors;
        if (errorMessages) {

            const firstError = Object.values(errorMessages)[0][0];
            alert("Registrasi Gagal: " + firstError);
        } else {
            alert("Registrasi Gagal: Terjadi kesalahan pada server.");
        }
    }
};

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form onSubmit={handleSubmit}
        className='bg-white p-8 rounded-xl shadow-md w-96 border'>
            <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Daftar Akun</h2>
            <input type='text' placeholder='Nama'
                className='w-full p-2 mb-4 border rounded'
                onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <input type='email' placeholder='Email'
                className='w-full p-2 mb-4 border rounded'
                onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <input type='password' placeholder='Password'
                className='w-full p-2 mb-4 border rounded'
                onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
                Daftar
            </button>
      </form>
    </div>
  );
};

export default Register
