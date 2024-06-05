import { Field, Form, Formik } from 'formik'

export const Login = () => {

  const initialValues = {
    email:'',
    password:''
  }

  return (
    <div>
    <div className="news_section layout_padding">
      <div className="container">
        <div className="d-flex  justify-content-center">
          <h1 className="services_text custom_main">Inicio de sesión</h1>
        </div>
      </div>
    </div>
    <div className='row justify-content-center'> 
      <div className='col-md-6'>
        <Formik 
          initialValues={initialValues}
        >
          <Form>
            <div className="form-floating">
              <Field 
                  type="email" 
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="name@example.com"
                  name='email'
              />
              <label htmlFor="floatingInput">Correo</label>
            </div>
            <div className="form-floating">
              <Field 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
                name='password'
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Iniciar sesión</button>
          </Form>
        </Formik>
      </div>
    </div> 
    </div>
  )
}
