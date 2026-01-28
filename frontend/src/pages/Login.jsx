import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/login', formData);
            console.log("Response Login:", response.data);
            const token = response.data.access_token; 

        if (token) {
            localStorage.setItem('token', token);
            alert("Login Berhasil!");
            navigate('/');
        } else {
            alert("Login gagal: Token tidak ditemukan dalam respon server");
        }
    } catch (err) {
        alert("Login Gagal: " + (err.response?.data?.message || "Cek email/password"));
    }
    };

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form onSubmit={handleLogin}
        className='bg-white p-8 rounded-xl shadow-md w-96 border'>
            <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Masuk</h2>
            <input type='email' placeholder='Email'
                className='w-full p-2 mb-4 border rounded'
            onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <input type='password' placeholder='Password'
                className='w-full p-2 mb-4 border rounded'
            onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
                Login
            </button>
      </form>
    </div>
  );
};
 
export default Login
