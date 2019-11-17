import React from 'react'
import Form from 'react-bootstrap/Form'

const GroupDropDown = () => {
    return (
        <Form className="group-drop-down">
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>Hardware</option>
                    <option>Linear Algebra</option>
                    <option>Software Design</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default GroupDropDown
