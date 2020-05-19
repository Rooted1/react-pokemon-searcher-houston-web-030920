import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    let sortCriterion = this.props.sortPokemon
    let pokemons = this.props.pokemonCollection
    let sortPokemon = sortCriterion === "name" ? pokemons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1) : ''

    let pokemonCollection = pokemons.filter(pokemon => pokemon.name.startsWith(this.props.searchQuery))
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonCollection.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
      </Card.Group>
    )
  }
}

export default PokemonCollection
