import React, { useState } from 'react'
import { send } from 'emailjs-com';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from './FormGroup';
import ButtonControl from './ButtonControl';

const NominationForm1 = (props) => {
    const initialState = {
        name: "",
        email: ""
    }
    const initialErrState = {
        nameErr: {},
        emailErr: {}
    }
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const [state, setState] = useState(initialState);
    const { name, email } = state;

    const [errState, setErrState] = useState(initialErrState);
    const { nameErr, emailErr } = errState;

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const validateInput = () => {
        const nameErr = {};
        const emailErr = {};
        let isValid = true;

        if (!name) {
            nameErr.required = "Name is required"
        }
        if (!email) {
            emailErr.required = "Email is required"
        }
        if (Object.keys(nameErr).length > 0 || Object.keys(emailErr).length > 0)
            isValid = false;
        setErrState({ nameErr, emailErr });
        console.log(errState)
        return isValid;
    }

    const clearState = () => {
        setState({ ...initialState });
        setErrState({ ...initialErrState });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validateInput();
        if (!isValid)
            return false;
        let templateParams = {
            to_email: email,
            to_name: name,
            subject: "Acknowledgement",
            message: "Thanks for the registration. XYZ team will contact you within 3 days.",
        }
        send(
            'service_orbzs2q',
            'template_6detnfx',
            templateParams,
            'user_d3HwRfugLrhStxlZNFMza'
        )
            .then((response) => {
                alert("Successfully submitted");
                clearState();
            })
            .catch((err) => {
                alert("Something went wrong");
            });

    }

    return (
        <Row>
            <Col>
                <h4 className="text-center">Nomination Form</h4>
                <div>
                    <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }} onSubmit={handleSubmit}>
                        <FormGroup controlId="formBasicName" label="Name" type="text" name="name" value={name} placeholder="Enter name" handleChange={handleChange}>
                            {
                                Object.keys(nameErr).map((err, index) => {
                                    return (
                                        <small key={index} className="text-danger">{err}</small>
                                    )
                                })
                            }
                        </FormGroup>
                        <FormGroup controlId="formBasicEmail" label="Email" type="email" name="email" value={email} placeholder="Enter email" handleChange={handleChange}>
                            {
                                Object.keys(emailErr).map((err, index) => {
                                    return (
                                        <small key={index} className="text-danger">{err}</small>
                                    )
                                })
                            }
                        </FormGroup>
                        <ButtonControl variant="primary" type="submit" text="Submit" className="mt-2" />
                    </Form>
                </div>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default NominationForm1