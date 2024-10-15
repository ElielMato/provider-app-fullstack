import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Formik, Form } from 'formik';
import axios from 'axios';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const notyf = new Notyf();

export const OrderCreator = () => {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
      const initialQuantities = response.data.reduce((acc, product) => {
        acc[product.id] = 0;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setError('Error al obtener productos');
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/orders'); // Cambia la ruta según tu API
      setOrders(response.data);
    } catch (error) {
      console.error('Error al obtener órdenes:', error);
      setError('Error al obtener órdenes');
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const handleQuantityChange = (productId, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(0, prevQuantities[productId] + change)
    }));
  };

  const handleSubmit = async (values) => {
    const selectedProducts = products.filter(product => quantities[product.id] > 0);
    const orderData = {
      id_client: user.id,
      products: selectedProducts.map(product => ({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        quantity: quantities[product.id]
      })),
      total: selectedProducts.reduce((sum, product) => sum + (product.price * quantities[product.id]), 0),
      order_date: new Date(),
      is_accepted: values.is_accepted
    };

    console.log('Orden enviada:', orderData);
    try {
      const response = await axios.post('http://localhost:5000/orders', orderData);
      fetchOrders();
      notyf.success("¡Se creo una nueva orden!")
      console.log('Orden enviada correctamente:', response.data);
    } catch (error) {
      console.error('Error al enviar la orden:', error);
      notyf.error("¡Error al crear una orden!")
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/orders/${orderId}`);
      console.log('Orden eliminada correctamente');
      fetchOrders();
      notyf.success("¡Se cancelo la orden!")
    } catch (error) {
      console.error('Error al cancelar la orden:', error);
      notyf.error("¡Error al cancelar la orden!")
    }
  };

  return (
    <section className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"'>
      <h1 className='text-2xl font-bold text-gray-900 mb-4'>Crear Ordenes</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          {loading ? (
            <p>Cargando productos...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Formik
              initialValues={{
                is_accepted: false
              }}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Productos Disponibles</label>
                    {products.map(product => (
                      <div key={product.id} className="flex items-center justify-between mt-2 p-2 border-b border-gray-200">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.brand}</p>
                          <p className="text-sm text-gray-500">Precio: ${product.price}</p>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-l"
                          >
                            -
                          </button>
                          <p className="px-4 mt-3">{quantities[product.id]}</p>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Crear Orden
                </button>
              </Form>
            </Formik>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 my-8">Mis Órdenes</h2>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          {orders.length === 0 ? (
            <p>No tienes órdenes.</p>
          ) : (
            <ul className="space-y-4">
              {orders.map(order => (
                <li key={order.id} className="p-4 border border-gray-200 rounded-md">
                  <h2 className="text-xl font-semibold">Orden N°: {order.id}</h2>
                  <p>Estado: {order.is_accepted ? 'Aceptada' : 'No Aceptada'}</p>
                  <p>Total: ${order.total}</p>
                  <p>Fecha: {new Date(order.order_date).toLocaleString()}</p>
                  <h4 className="mt-2 font-medium text-xl">Productos:</h4>
                  <ul className="list-disc pl-5">
                    {order.products.map(product => (
                      <li key={product.id}>
                        {product.name} - Cantidad: {product.quantity}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                    >
                      Cancelar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};