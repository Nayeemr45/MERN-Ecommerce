import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({name  , half , type ,label}) => {
    return (
        <div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{label}</Form.Label>
                <Form.Control name={name} type={type} />
            </Form.Group>
        </div>
    )
}

export default Input
