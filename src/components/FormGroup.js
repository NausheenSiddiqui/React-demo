import React from 'react';
import Form from 'react-bootstrap/Form';

const FormGroup = ({ controlId, label, type, name, handleChange,children, ...rest }) => {
    const handleTextChange = (e) => {
        handleChange(e)
    }
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} name={name} onChange={handleTextChange} autoComplete="off" {...rest} />
            {children}
        </Form.Group>
    )
}

export default FormGroup

