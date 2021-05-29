import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonControl = ({ variant = "primary", type, text, className}) => {
    return (
        <Button variant={variant} type={type} className={className}>{text}
        </Button>
    )
}

export default ButtonControl

