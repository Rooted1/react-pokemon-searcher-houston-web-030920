import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  // create a state variable showFront (bool)



  // create handleShow to handle image onclick
  // update showFront to !bool

  render() {
    // if showFront === true, render front image
    // {const imgUrl = showFront === true ? 'frontUrl' : 'backUrl'}
    // <img alt="oh no!" src={imgUrl}/>
    return (
      <Card>
        <div>
          <div className="image">
          // pass handleShow to handle click to image

            <img alt="oh no!" src='{imgUrl}'/>
          </div>
          <div className="content">
            <div className="header">POKEMON NAME HERE</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
