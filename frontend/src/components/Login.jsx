import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import Swal from 'sweetalert2'

export const Login = () => {

  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: ''
  }

  const handleLogin = async (values) => {
    console.log("Valores desde el front", values)
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values)
      console.log(response.data)
      Swal.fire({
        icon: 'success',
        title: 'Logueado Correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="news_section py-10">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <h1 className="text-indigo-500 font-semibold">Inicio de sesión</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="relative mb-4">
                <Field
                  type="email"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="floatingInput"
                  placeholder="Correo Electronico"
                  name="email"
                />
                <label htmlFor="floatingInput" className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200">
                  Correo
                </label>
              </div>
              <div className="relative mb-4">
                <Field
                  type="password"
                  className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  name="password"
                />
                <label htmlFor="floatingPassword" className="absolute left-3 top-1 text-gray-600 pointer-events-none transform -translate-y-1/2 scale-75 origin-top-left transition-all duration-200">
                  Contraseña
                </label>
              </div>
              <button className="bg-indigo-500 text-white w-full py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75" type='submit' onClick={handleLogin}>
                Iniciar sesión
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>

  )
}
