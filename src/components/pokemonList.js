import React from 'react';
import { array, func } from 'prop-types';

import Pokemon from './pokemon';

const PokemonList = props => {
  return (
    <div className="row">
      {
        props.pokemons.map(poke => {
          return (
            <Pokemon
              name={poke.name}
              sprites={poke.sprites}
              selectPokemon={props.selectPokemon}
            // ENTER REQUIRED PROPS HERE
            />
          )
        })
      }
    </div>
  )
}

PokemonList.propTypes = {
  pokemons: array,
  selectPokemon: func
}


export default PokemonList;