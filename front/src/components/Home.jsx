import { Card } from "./Card";

export const Home = () => {
  return (
    <>
        <br/>
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-2'>
                    <Card 
                    img='arbol.jpg'
                    title='prueba' 
                    text='descripcion de prueba'     
                    />
                </div>
                <div className='col-md-2'>
                    <Card 
                    img='arbol.jpg'
                    title='prueba' 
                    text='descripcion de prueba'     
                    />
                </div>
                <div className='col-md-2'>
                    <Card 
                    img='ocean.jpg'
                    title='otro ejemplo' 
                    text='descripcion de ejemplo'
                    />
                </div>
                <div className='col-md-2'>
                    <Card 
                    img='playa.jpg'
                    title='otro ejemplo' 
                    text='descripcion de ejemplo'
                /> 
                </div> 
            </div>
        </div>
    </>
  )
}
