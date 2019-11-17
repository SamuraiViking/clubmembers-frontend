import React from 'react'
import Card from 'react-bootstrap/Card'

const Member = (props) => {
    return (
        <Card style={{ width: '13rem', margin: '20px' }}>
            <Card.Img variant="top" src={props.photo} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.email}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Member