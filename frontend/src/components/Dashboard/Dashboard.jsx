import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { FaBuilding, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { FaShop, FaBasketShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import { CompanyEdit } from '../Company/CompanyEdit';
import { ProductManager } from '../Products/ProductManager';
import { OrderCreator } from '../Order/OrderCreator';
import { OrderManager } from '../Order/OrderManager';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [currentView, setCurrentView] = useState('company');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentView(hash);
      } else {
        setCurrentView('company');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const links = {
    client: [
      { href: '#company', icon: <FaBuilding className='inline-block mr-2'/>, label: 'Gestionar Compañía' },
      { href: '#orderUser', icon: <FaShoppingBag className='inline-block mr-2'/>, label: 'Realizar Pedidos' },
      { href: '#stock', icon: <FaShop className='inline-block mr-2'/>, label: 'Stock de Tienda' }
    ],
    provider: [
      { href: '#company', icon: <FaBuilding className='inline-block mr-2'/>, label: 'Gestionar Compañía' },
      { href: '#product', icon: <FaShoppingCart className='inline-block mr-2'/>, label: 'Gestionar Productos' },
      { href: '#orderProider', icon: <FaBasketShopping className='inline-block mr-2'/>, label: 'Gestionar Ordenes' }
    ],
    both: [
      { href: '#company', icon: <FaBuilding className='inline-block mr-2'/>, label: 'Gestionar Compañía' },
      { href: '#product', icon: <FaShoppingCart className='inline-block mr-2'/>, label: 'Gestionar Productos' },
      { href: '#orderUser', icon: <FaShoppingBag className='inline-block mr-2'/>, label: 'Realizar Pedidos' },
      { href: '#orderProider', icon: <FaBasketShopping className='inline-block mr-2'/>, label: 'Gestionar Ordenes' }
    ],
    admin: [
      { href: '#clients', icon: <IoPerson className='inline-block mr-2'/>, label: 'Gestionar Clientes' },
      { href: '#product', icon: <FaShop className='inline-block mr-2'/>, label: 'Gestionar Proveedores' },
      { href: '#orderUser', icon: <FaBasketShopping className='inline-block mr-2'/>, label: 'Gestionar Productos' }
    ]
  };

  const roleLinks = () => {
    if (user.role === 'admin') return links.admin;
    if (user.roleType === 'client') return links.client;
    if (user.roleType === 'provider') return links.provider;
    if (user.roleType === 'both') return links.both;
    return links.client; // Default case
  };

  return (
    <section className="flex">
      <aside className="w-64 h-screen bg-indigo-500 p-4 text-white rounded m-4">
        <h2 className="text-xl font-bold mb-6 text-center">Panel de Control</h2>
        {roleLinks().map(link => (
          <a key={link.href} href={link.href} className="block p-2 text-gray-50 hover:bg-indigo-600 rounded no-underline">
            {link.icon} {link.label}
          </a>
        ))}
      </aside>
      <div className="flex-1 p-6 max-w-4xl mx-auto">
        {currentView === 'company' && <CompanyEdit />}
        {currentView === 'product' && <ProductManager />}
        {currentView === 'orderUser' && <OrderCreator />}
        {currentView === 'orderProider' && <OrderManager />}
      </div>
    </section>
  );
};
