import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Berhasil Logout');
        navigate('/login');
    }


    return (
        <nav className='bg-blue-600 p-4 text-white shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/' className='text-2xl font-bold'>Volunteer App</Link>
                <div className='space-x-4'>
                    <Link to='/' className='hover:underline'>Home</Link>
                    <Link to='/admin' className='hover:text-blue-200 text-yellow-300 font-bold underline'></Link>
                    {!token ? (
                        <>
                            <Link to='/login' className='hover:underline'>Login</Link>
                            <Link to='/register' className='bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold'>Register</Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} 
                            className='bg-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-600'>
                                Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;