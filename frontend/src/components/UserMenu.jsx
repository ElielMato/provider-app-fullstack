import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { FaUserCircle, FaTabletAlt  } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";

export const UserMenu = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const { user, setUser } = useContext(UserContext);

    const handleClose = () => {
        try {
            setUser({ logged: false });
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 no-underline"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaUserCircle className="text-xl" />
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <Link
                        to={user.role === 'admin' ? "/dashboard-admin" : "/dashboard"}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline"
                    >
                        <FaTabletAlt className="inline-block mr-2" />
                        Panel de Control
                    </Link>
                    <button
                        onClick={handleClose}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        
                        <CiLogout className="inline-block mr-2" />
                        Cerrar Sesión
                    </button>
                </div>
            )}
        </div>
    );
};
