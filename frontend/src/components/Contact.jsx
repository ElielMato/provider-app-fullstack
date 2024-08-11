import React, { useState, useEffect } from 'react';
import axios from 'axios'
//import backgroundImage from '../assets/img/banner_provider.jpg';

export const Contact = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => {
                const allPokemon = response.data.results;
                const randomPokemon = [];
                while (randomPokemon.length < 12) {
                    const randomIndex = Math.floor(Math.random() * allPokemon.length);
                    if (!randomPokemon.includes(allPokemon[randomIndex])) {
                        randomPokemon.push(allPokemon[randomIndex]);
                    }
                }
                const requests = randomPokemon.map(pokemon =>
                    axios.get(pokemon.url).then(res => ({
                        name: res.data.name,
                        image: res.data.sprites.front_default,
                        number: res.data.id,
                    }))
                );
                return Promise.all(requests);
            })
            .then(data => {
                setPokemons(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Lista de Pokémons</h1>
            <div className="grid grid-cols-3 gap-4">
                {pokemons.map(pokemon => (
                    <div key={pokemon.number} className="bg-white p-4 rounded shadow-md flex flex-col items-center hover:bg-gray-200 transition duration-300">
                        <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 object-contain mb-2" />
                        <span className="text-lg font-medium">{pokemon.name}</span>
                        <span className="text-sm text-gray-600">#{pokemon.number}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}