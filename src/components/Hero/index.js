import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

const Text = styled.span`
  font-size: 100px;
`
const TextHead = styled.p`
  font-size: 100px;
`

const HeroDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

class Hero extends React.Component {
  state = {
    text: ['WEB & APP', 'CARTOONS', 'BRANDING'],
    position: 0
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        position: this.state.position + 1
      })
      if (this.state.position > 2) {
        this.setState({
          position: 0
        })
      }
    },1000)
  }
  render() {
    return (
      <Container className="text-center my-5">
        <TextHead>I LOVE TO MAKE</TextHead>
        <Text>{this.state.text[this.state.position]}</Text>
        <TextHead>LOOK AWESOME</TextHead>
      </Container>
    )
  }
}

export default Hero
