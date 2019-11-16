import React from 'react'
import Card from 'react-bootstrap/Card'

const ClubMember = (props) => {
    return (
        <Card style={{ width: '13rem', margin: '20px' }}>
            <Card.Img variant="top" src={props.photo} />
            <Card.Body>
                <Card.Title>{props.display_name}</Card.Title>
                <Card.Text>
                    {props.email}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ClubMember