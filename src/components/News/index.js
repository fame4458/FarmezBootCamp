import React from 'react'
import {Container} from 'reactstrap'
import Card from '../Core/Card'
export default class News extends React.Component {
  state = {
    photo:[
      '1','2','3',
    ]
  }

  render() {
    return (
      <Container className='d-flex'>
        {this.state.photo.map((data,index) => (
          <Card key={index} src={data} />
        ))}
      </Container>
    )
  }
}
