import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  // create a state to hold all pokemons from fetch query
  // create a query property to hold handleSearch(query)

  // create a handleSearch method to handle search
  // this method should be passed an argument, (query) from the Search component

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        // pass handleSearch into here
        <Search />
        <br />
          // pass pokemons array in state into PokemonCollection component
          // pass this.state.query into here
        <PokemonCollection />
      </Container>
    )
  }
}

export default PokemonPage
