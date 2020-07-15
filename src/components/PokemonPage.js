import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokes: [],
    flipped: false

  }

  componentDidMount = () => {
    this.fetchPokes()
  }

  fetchPokes = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokes => {
        console.log(pokes)
        this.setState({
          pokes: pokes
        })
      })
  }

  handleClick = () => {
    console.log("Click it or ticket!")
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection
          pokes={this.state.pokes}
          flipped={this.state.flipped}
          handleClick={this.handleClick}
        />
      </Container>
    )
  }
}

export default PokemonPage
