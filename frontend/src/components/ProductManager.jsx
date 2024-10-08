import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Modal } from './Modal';

export const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };


  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('http://localhost:5000/products', values);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error('Error al crear producto:', error.response?.data || error.message);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (values) => {
    try {
      await axios.put(`http://localhost:5000/products/${values.id}`, values);
      setIsEditModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error('Error al editar producto:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestor de Productos</h2>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <Formik
            initialValues={{
              id_provider: user.id,
              name: '',
              description: '',
              stock: '',
              price: '',
              brand: '',
              type: '',
              image: ''
            }}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" type="text" id="name" placeholder="Nombre" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                <Field name="description" type="text" id="description" placeholder="Descripción" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                <Field name="stock" type="number" id="stock" placeholder="Stock" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                <Field name="price" type="number" step="0.01" id="price" placeholder="Precio" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                <Field name="brand" type="text" id="brand" placeholder="Marca" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                <Field name="type" type="text" id="type" placeholder="Tipo" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>

              <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Añadir Producto
              </button>
            </Form>
          </Formik>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearch}
          className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">Lista de Productos</h3>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {filteredProducts.map((product) => (
            <li key={product.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-indigo-600 truncate">{product.name}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    ${product.price}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    Stock: {product.stock} <br />
                    Marca: {product.brand} <br />
                    Tipo: {product.type} <br />
                    {product.description}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 gap-4">
                  <button onClick={() => handleDelete(product.id)} className="px-2 py-1 border border-transparent text-sm rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Eliminar
                  </button>
                  <button onClick={() => handleEdit(product)} className="px-2 py-1 border border-transparent text-sm rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    Editar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isEditModalOpen && (
        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Editar Producto</h2>
          <Formik
            initialValues={editingProduct}
            onSubmit={handleEditSubmit}
          >
            <Form className="space-y-4">
              <Field name="name" type="text" placeholder="Nombre" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              <Field name="description" type="text" placeholder="Descripción" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              <Field name="stock" type="number" placeholder="Stock" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              <Field name="price" type="number" step="0.01" placeholder="Precio" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              <Field name="brand" type="text" placeholder="Marca" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              <Field name="type" type="text" placeholder="Tipo" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />

              <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                Guardar Cambios
              </button>
            </Form>
          </Formik>
        </Modal>
      )}
    </div>
  );
}