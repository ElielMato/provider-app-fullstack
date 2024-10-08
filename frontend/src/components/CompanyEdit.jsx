import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Formik, Form, Field } from 'formik';
import axios from 'axios'

export const CompanyEdit = () => {

  const { user } = useContext(UserContext);

  const handleSubmit = async (values) => {
    try {
      const filteredValues = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== '')
      );

      const response = await axios.post('http://localhost:5000/company', filteredValues);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"'>
      <h1 className='text-2xl font-bold text-gray-900 mb-4'>Configuracion de la Empresa</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <Formik
            initialValues={{
              id: user.id,
              businessName: '',
              address: '',
              country: '',
              province: '',
              postalCode: ''
            }}
            onSubmit={handleSubmit}>
            <Form>
              <section className='flex flex-wrap'>
                <div className="relative flex-1 min-w-[300px] m-2">
                  <Field
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-1 py-1"
                    id="businessName"
                    placeholder="Nombre del Negocio"
                    name="businessName"
                  />
                </div>
              </section>
              <section className='flex flex-wrap'>
                <div className="relative flex-1 min-w-[300px] m-2">
                  <Field
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-1 py-1"
                    id="address"
                    placeholder="Dirección"
                    name="address"
                  />
                </div>
                <div className="relative flex-1 min-w-[300px] m-2">
                  <Field
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-1 py-1"
                    id="country"
                    placeholder="País"
                    name="country"
                  />
                </div>
              </section>
              <section className='flex flex-wrap'>
                <div className="relative flex-1 min-w-[300px] m-2">
                  <Field
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-1 py-1"
                    id="province"
                    placeholder="Provincia"
                    name="province"
                  />
                </div>
                <div className="relative flex-1 min-w-[300px] m-2">
                  <Field
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-1 py-1"
                    id="postalCode"
                    placeholder="Código Postal"
                    name="postalCode"
                  />
                </div>
              </section>
              <section className='w-full flex items-center justify-center'>
                <button
                  className="w-full p-4 bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
                  type="submit"
                >
                  Guardar Cambios
                </button>
              </section>
            </Form>
          </Formik>
        </div>
      </div>
    </section>

  )
}