import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EmailInput = (props) => {
    const {formText, useFormText} = "default"

    const handleSubmit = (e) => {
        console.log(formText)
    }

    return (
        <div className="email-input">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Add a Member</Form.Label>
                    <InputGroup>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@stolaf.edu</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback type="invalid" value={formText}>
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default EmailInput