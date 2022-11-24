import React from 'react'
import {Card} from 'react-bootstrap'

export default function Hotelcard(props)
 {
  return (
  <card className="my-3 p-3 rounded">
   <Card.Img src={props.item.photograph} className="p-3"/>
   <Card.Body>
    <Card.Title><h4>{props.item.name}</h4></Card.Title>
    <Card.Text>
        <p>Culsine: {props.item.cuisine_type}</p>
    </Card.Text>
   </Card.Body>
  </card>

/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />{item.photograph}
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */
  )
}
