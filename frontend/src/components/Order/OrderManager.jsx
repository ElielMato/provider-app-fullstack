import React, { useState, useEffect } from "react";
import axios from "axios";

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const notyf = new Notyf();

export const OrderManager = () => {
  const [orders, setOrders] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error al obtener órdenes:", error);
    }
  };

  const stateOrders = async (orderId, newStatus) => {
    try {
      console.log(newStatus);
      await axios.put(`http://localhost:5000/orders/${orderId}`, {
        is_accepted: newStatus,
      });
      fetchOrders();

      setDisabledButtons((prev) => ({
        ...prev,
        [orderId]: true,
      }));
      notyf.success("¡Se acepto la orden de compra!")
    } catch (error) {
      console.error("Error al cambiar el estado:", error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Gestionar Ordenes
      </h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          {orders.length === 0 ? (
            <p>No tienes órdenes.</p>
          ) : (
            <ul className="space-y-4">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="p-4 border border-gray-200 rounded-md"
                >
                  <h2 className="text-xl font-semibold">
                    Orden N°: {order.id}
                  </h2>
                  <p>
                    Estado: {order.is_accepted ? "Aceptada" : "No Aceptada"}
                  </p>
                  <p>Total: ${order.total}</p>
                  <p>Fecha: {new Date(order.order_date).toLocaleString()}</p>
                  <h4 className="mt-2 font-medium text-xl">Productos:</h4>
                  <ul className="list-disc pl-5">
                    {order.products.map((product) => (
                      <li key={product.id}>
                        {product.name} - Cantidad: {product.quantity}
                      </li>
                    ))}
                  </ul>

                  {!order.is_accepted && (
                    <div className="flex space-x-2 mt-4">
                      <button
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                        onClick={() => stateOrders(order.id, true)}
                        disabled={disabledButtons[order.id]}
                      >
                        Aceptar
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
