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

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokes={this.state.pokes}/>
      </Container>
    )
  }
}

export default PokemonPage
