import React from 'react';
import backgroundImage from '../assets/img/banner_provider.jpg';

export const Customer = () => {
    return (
        <section>
            <div className="relative h-[150px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center">
                        <div className="text-white max-w-md px-8">
                            <h1 className="text-3xl font-bold mb-4">Clientes</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}