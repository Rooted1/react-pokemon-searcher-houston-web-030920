import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import Sort from './Sort'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    query: '',
    sortChoice: ''
  }

  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(obj => this.setState({pokemons: obj}))
  }

  handleSearch = (query) => {
    this.setState({query: query})
  }


  createNewPokemon = (state) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name: state.name,
        stats: [
          {value: state.hp,
          name: 'hp'}
        ],
        sprites: {
          front: state.frontUrl,
          back: state.backUrl
        }
      })
    })
  }

  sortPokemon = (e, data) => {
    this.setState({sortChoice: data.value})
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <Sort sortPokemon={this.sortPokemon}/>
        <br />
        <PokemonCollection
          pokemonCollection={this.state.pokemons}
          searchQuery={this.state.query}
          sortPokemon={this.state.sortChoice}/>
      </Container>
    )
  }
}

export default PokemonPage
