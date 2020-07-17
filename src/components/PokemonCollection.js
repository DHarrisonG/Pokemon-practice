import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.pokes.map(poke => {
          return <PokemonCard
            key={poke.id}
            name={poke.name}
            hp={poke.hp}
            imageFront={poke.sprites.front}
            imageBack={poke.sprites.back}
            flipped={this.props.flipped}
            handleClick={this.props.handleClick}
          />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
