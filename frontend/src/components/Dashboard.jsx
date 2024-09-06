import React, { useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { FaBuilding, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { FaShop, FaBasketShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import { CompanyEdit } from './CompanyEdit'

export const Dashboard = () => {
  const { user } = React.useContext(UserContext);
  const [showCompanyForm, setShowCompanyForm] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#company' || window.location.hash === '') {
        setShowCompanyForm(true);
      } else {
        setShowCompanyForm(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className="flex">
      <aside className="w-64 h-screen bg-indigo-500 p-4 text-white rounded m-4">
        <h2 className="text-xl font-bold mb-6 text-center">Panel de Control</h2>
        {
          user.roleType === 'client' && user.role === 'user' ? (
            <div>
              <a href="#company" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaBuilding className="inline-block mr-2" /> Compañía
              </a>
              <a href="#orderUser" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShoppingBag  className="inline-block mr-2" /> Pedidos
              </a>
              <a href="#stock" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShop  className="inline-block mr-2" /> Stock de Tienda
              </a>
            </div>
          ) : user.roleType === 'provider' && user.role === 'user' ?  (
            <div>
              <a href="#company" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaBuilding className="inline-block mr-2" /> Compañía
              </a>
              <a href="#product" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShoppingCart  className="inline-block mr-2" /> Productos
              </a>
              <a href="#orderProider" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaBasketShopping  className="inline-block mr-2" /> Ordenes
              </a>
              <a href="#stock" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShop  className="inline-block mr-2" /> Stock de Proveedor
              </a>
            </div>
          ) : user.roleType === 'both' && user.role === 'user' ?  (
            <div>
              <a href="#company" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaBuilding className="inline-block mr-2" /> Compañía
              </a>
              <a href="#product" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShoppingCart  className="inline-block mr-2" /> Productos
              </a>
              <a href="#orderUser" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShoppingBag  className="inline-block mr-2" /> Pedidos
              </a>
              <a href="#orderProider" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaBasketShopping  className="inline-block mr-2" /> Ordenes
              </a>
              <a href="#stock" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShop  className="inline-block mr-2" /> Stock de Proveedor
              </a>
            </div>
          ) : user.role === 'admin' ? (
            <div>
              <a href="#clients" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <IoPerson className="inline-block mr-2" /> Gestionar Clientes
              </a>
              <a href="#product" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShop   className="inline-block mr-2" /> Gestionar Proveedores
              </a>
              <a href="#orderUser" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaBasketShopping  className="inline-block mr-2" /> Gestionar Productos
              </a>
            </div>
          ) : (
            <div>
              <a href="#company" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaBuilding className="inline-block mr-2" /> Compañía
              </a>
              <a href="#orderUser" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShoppingBag  className="inline-block mr-2" /> Pedidos
              </a>
              <a href="#stock" className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline text-center">
                <FaShop  className="inline-block mr-2" /> Stock de Tienda
              </a>
            </div>
          )
        }
      </aside>
      <div className="flex-1 p-6 max-w-4xl mx-auto">
        {showCompanyForm && (
          <CompanyEdit />
        )}
      </div>
    </section>
  );
}
