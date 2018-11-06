import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const Image = styled.img`
  background-repeat: no-repeat;
  content: url(${props => props.src}.png);
  &:hover {
    transform: rotate(360deg);
    transition: 1s;
    content: url(${props => props.src}-hover.png);
  }
`

const photo = ['Design', 'coding', 'print', 'photo']

export default class Main extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">OUR MAIN SERVICES 123</h1>
        <h5 className="text-center">LET ME INTRODUCE US</h5>
        <p className="text-center">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero.
          Phasellus dolor. Maecenas vestibulum es mollis diam. Pellentesque ut
          neque. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. In dui magna, posuere eget,
          vestibulum, tempor auctor, justo. In ac felis quis tortor malesuada
          pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,
          porta, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <div className="text-center">
          {photo.map((data, index) => (
            <Image
              key={index}
              src={`static/img/features-icon-${data}`}
              className="m-4"
            />
          ))}
        </div>
      </Container>
    )
  }
}
