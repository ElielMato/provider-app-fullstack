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

      const response = await axios.post('http://localhost:5000/company/edit', filteredValues);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="w-full mt-6 flex items-center justify-center">
        <h1>Configuracion de la Empresa</h1>
      </div>
      <div className="w-full mt-6 flex items-center justify-center">
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
              <div className="relative m-3 flex-1 min-w-[300px]">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="businessName"
                  placeholder="Nombre del Negocio"
                  name="businessName"
                />
                <label
                  htmlFor="businessName"
                  className="absolute -top-2 text-xl text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Nombre del Negocio
                </label>
              </div>
            </section>
            <section className='flex flex-wrap'>
              <div className="relative m-3 flex-1 min-w-[300px]">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="address"
                  placeholder="Dirección"
                  name="address"
                />
                <label
                  htmlFor="address"
                  className="absolute -top-2 text-xl text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Dirección
                </label>
              </div>
              <div className="relative m-3 flex-1 min-w-[300px]">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="country"
                  placeholder="País"
                  name="country"
                />
                <label
                  htmlFor="country"
                  className="absolute -top-2 text-xl text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  País
                </label>
              </div>
            </section>
            <section className='flex flex-wrap'>
              <div className="relative m-3 flex-1 min-w-[300px]">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="province"
                  placeholder="Provincia"
                  name="province"
                />
                <label
                  htmlFor="province"
                  className="absolute -top-2 text-xl text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Provincia
                </label>
              </div>
              <div className="relative m-3 flex-1 min-w-[300px]">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="postalCode"
                  placeholder="Código Postal"
                  name="postalCode"
                />
                <label
                  htmlFor="postalCode"
                  className="absolute -top-2 text-xl text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Código Postal
                </label>
              </div>
            </section>
            <button
              className="bg-indigo-500 text-white w-full py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              type="submit"
            >
              Guardar Cambios
            </button>
          </Form>
        </Formik>
      </div>
    </section>

  )
}