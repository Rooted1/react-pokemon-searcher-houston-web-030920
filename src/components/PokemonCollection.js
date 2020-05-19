import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
// import sort component into HERE.
// That should hold a choice of what the user seletcs

class PokemonCollection extends React.Component {
  // create a state to hold the sortChoice

  // create handleSort to handle user sortChoice
  // update sortChoice in the state



  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        // implement search
        // use the searchQuery to filter the pokemons array

        // implement sort
        // grab the sortChoice
        // sort the pokemons by the sortChoice

        // implement rendering pokemon
        // inside of PokemonCollection, map the pokemons array
        // send each pokemon to PokemonCard component

        // pass handleSort into the sort component
        // <Sort />
      </Card.Group>
    )
  }
}

export default PokemonCollection
