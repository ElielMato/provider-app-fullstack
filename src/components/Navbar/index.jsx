import React from 'react';
import localImage from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-indigo-500 order-1">
                    <img src={localImage} alt="Logo" width={50} className='rounded-full'/>
                </div>
                <div className="text-gray-500 order-2">
                    <ul className="flex font-semibold justify-between mt-2">
                        <li className="md:px-4 md:py-2 text-indigo-500"><a href="#" className='no-underline'>Inicio</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#" className='no-underline'>Proveedores</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#" className='no-underline'>Clientes</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#" className='no-underline'>Informacion</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#" className='no-underline'>Contacto</a></li>
                    </ul>
                </div>
                <div className="order-3">
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
