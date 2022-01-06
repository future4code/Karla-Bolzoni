import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PokeCard(props) {
    
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const pegaPokemon = pokeName => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                .then(response => {
                    // guarda as infos do pokemon no estado
                    setPokemon({ pokemon: response.data });
                })
                .catch(err => {
                    console.log(err);
                });
        };
        pegaPokemon()
    }, [props.pokemon])

    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    );
}


