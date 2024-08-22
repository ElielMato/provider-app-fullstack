import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'

export const Dashboard = () => {

  const { user } = useContext(UserContext);

  return (
    <aside className="w-64 h-screen bg-indigo-500 p-4 text-white rounded m-4">
      <h2 className="text-xl font-bold mb-6 text-center">Panel de Control</h2>
      <a href="#company" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
        Compañía
      </a>
      <a href="#catalog" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
        Catálogo
      </a>
      <a href="#clients" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
        Clientes
      </a>
      {
        user.role === 'admin' && (
          <a href="#verified-suppliers" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
            Proveedores Verificados
          </a>
        )
      }
    </aside>
  );
}
