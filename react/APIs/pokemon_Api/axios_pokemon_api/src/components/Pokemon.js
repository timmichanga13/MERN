import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const showPokemon = props => {

        // old method using fetch
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=-1')
        //     .then(response => response.json())
        //     .then(response => setPokemon(response.results))

        // new method using axios
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1')
        // inspect the page, view the console to see what results you are getting; response.results vs. response.data.results
        .then(response=>{setPokemon(response.data.results)})
        .catch(err=>{console.log(err)})
    }

    return (
        <div>
            <button onClick={(e) => { showPokemon() }}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default Pokemon;

