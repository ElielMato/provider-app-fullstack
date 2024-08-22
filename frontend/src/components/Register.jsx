import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import Swal from 'sweetalert2'

export const Register = () => {

  const navigate = useNavigate()

  const initialValues = {
    name: '',
    email: '',
    password: '',
    // roleType: '',
    businessName: '',
    address: '',
    country: '',
    province: '',
    postalCode: '',

  }

  const { setUser } = useContext(UserContext);

  const handleRegister = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', values)
      console.log(response.data)

      const { role } = response.data
      console.log('role', role)

      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1800
      })
      setUser({
        logged: true,
        role: role,
      })
      navigate('/panel')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Este correo ya esta en uso.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(error)
    }
  }

  return (
    <div>
      <div className="news_section py-10">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <h1 className="text-indigo-500 font-semibold">Registro</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Formik initialValues={initialValues} onSubmit={handleRegister}>
            <Form>
              <div className="relative mb-4">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="name"
                  placeholder="Nombre Completo"
                  name="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Nombre
                </label>
              </div>
              <div className="relative mb-4">
                <Field
                  type="email"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="email"
                  placeholder="Correo Electrónico"
                  name="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Correo
                </label>
              </div>
              <div className="relative mb-4">
                <Field
                  type="password"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="password"
                  placeholder="Contraseña"
                  name="password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Contraseña
                </label>
              </div>
              {/* <div className="relative mb-4">
                <Field
                  as="select"
                  name="roleType"
                  className="form-select block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="Cliente">Cliente</option>
                  <option value="Proveedor">Proveedor</option>
                </Field>
                <label
                  htmlFor="roleType"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Selecciona una opcion
                </label>
              </div> */}
              <div className="relative mb-4">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="businessName"
                  placeholder="Nombre del Negocio"
                  name="businessName"
                />
                <label
                  htmlFor="businessName"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Nombre del Negocio
                </label>
              </div>
              <div className="relative mb-4">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="address"
                  placeholder="Dirección"
                  name="address"
                />
                <label
                  htmlFor="address"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Dirección
                </label>
              </div>
              <div className="relative mb-4">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="country"
                  placeholder="País"
                  name="country"
                />
                <label
                  htmlFor="country"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  País
                </label>
              </div>
              <div className="relative mb-4">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="province"
                  placeholder="Provincia"
                  name="province"
                />
                <label
                  htmlFor="province"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Provincia
                </label>
              </div>
              <div className="relative mb-4">
                <Field
                  type="text"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="postalCode"
                  placeholder="Código Postal"
                  name="postalCode"
                />
                <label
                  htmlFor="postalCode"
                  className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200"
                >
                  Código Postal
                </label>
              </div>
              <button
                className="bg-indigo-500 text-white w-full py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
                type="submit"
              >
                Registrate
              </button>
              <p className="text-center text-gray-400 mt-4">
                Si ya estás registrado, ve a <a href="/login" className="text-indigo-500 hover:underline">iniciar sesion</a>.
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}