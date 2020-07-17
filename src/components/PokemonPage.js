import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokes: []
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

  addPoke = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        hp: e.target.hp.value,
        sprites: {
          front: e.target.frontUrl,
          back: e.target.backUrl
        }
      })
    }).then(res => this.fetchPokes())
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke}/>
        <br />
        <Search />
        <br />
        <PokemonCollection pokes={this.state.pokes}/>
      </Container>
    )
  }
}

export default PokemonPage
