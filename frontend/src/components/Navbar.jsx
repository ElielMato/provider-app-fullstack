import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src={require('../assets/img/logo.png')} alt="Logo" width={50} className="rounded-full" />
                    <span className="text-indigo-500 font-semibold">Provider App</span>
                </div>
                <ul className="flex space-x-8 font-semibold text-gray-500 mt-3">
                    <li className="md:px-4 md:py-2 text-indigo-500">
                        <Link to="/home" className='no-underline hover:'>
                            Inicio
                        </Link>
                    </li>
                    <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/provider" className='no-underline'>Proveedores</Link></li>
                    <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/customers" className='no-underline'>Clientes</Link></li>
                    <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/about" className='no-underline'>Informacion</Link></li>
                    <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/contact" className='no-underline'>Contacto</Link></li>
                </ul>
                <div className="flex space-x-4">
                    <Link className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 no-underline" to="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a 1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Login</span>
                    </Link>
                    <Link className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 no-underline" to="/register">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Register</span>
                    </Link>
                </div>
            </div>
        </nav>

    );
}
