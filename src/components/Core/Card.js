import React from 'react'
import {
  Card as DefaultCard,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import styled from 'styled-components'

const Card = styled(DefaultCard)`
  color: #000;
  width: 100%;
`

const CardBox = props => {
  return (
    <div>
      <Card>
        {console.log(props)}
        <CardImg src={`/static/img/posts/${props.src}.jpg`}/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardBox
