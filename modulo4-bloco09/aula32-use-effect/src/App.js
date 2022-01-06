import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

export default function App() {

  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeNome] = useState({});


  const changePokeName = (event) => {
    setPokeNome({ pokeName: event.target.value });
  };

  const characterSearch = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    characterSearch();
  }, [pokeList]);


  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );

}

