import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const Image = styled.img`
  border: 5px solid #fff;
`

export default class Project extends React.Component {
  render() {
    return (
      <Container>
        <div className="text-center my-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((data, index) => (
            <Image
              key={index}
              src={`static/img/posts/${data}.jpg`}
              className="m-2"
            />
          ))}
        </div>
      </Container>
    )
  }
}
