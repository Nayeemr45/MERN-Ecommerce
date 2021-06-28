import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({name  , half , type ,label , handleChange , value}) => {
    return (
        <div>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control name={name} type={type}  onChange={handleChange} value={value}/>
            </Form.Group>
        </div>
    )
}

export default Input
