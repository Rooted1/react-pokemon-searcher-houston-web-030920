import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showFront: true
  }

  handleShow = () => {
    this.setState({showFront: !this.state.showFront})
  }

  render() {
    const imgUrl = this.state.showFront === true ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
    const hp = this.props.pokemon.stats.filter(stat => stat.name === 'hp')

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={imgUrl} onClick={this.handleShow}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
