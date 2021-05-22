import React from 'react';

import { Form, InputGroup } from 'react-bootstrap';

import './styles/Input.css'

const Input = (props) => {
    let controlLabel;

    const OnChange = (e) => {
        props.inputChangeState({ ...props.inputState, value: e.target.value })
    }

    const Validation = () => {
        if (props.regularExpression) {
            if (props.regularExpression.test(props.inputState.value)) {
                props.inputChangeState({ ...props.inputState, isValid: true, isInvalid: false })
                controlLabel = document.getElementById(props.id + "_label");
                controlLabel.className = 'text-success form-label'
            } else {
                props.inputChangeState({ ...props.inputState, isValid: false, isInvalid: true })
                controlLabel = document.getElementById(props.id + "_label");
                controlLabel.className = 'text-danger form-label'
            }
        }

        if (props.ValidSecondPassword) {
            props.ValidSecondPassword();
        }
    }

    return (
        <React.Fragment>
            <Form.Label
                className='text-dark'
                id={props.id + "_label"}
                htmlFor={props.id}
            >
                {props.label}
            </Form.Label>
            <InputGroup hasValidation>
                <Form.Control
                    className="input_personalizado"
                    id={props.id}
                    type={props.type}
                    isInvalid={props.inputState.isInvalid}
                    isValid={props.inputState.isValid}
                    onChange={OnChange}
                    onKeyUp={Validation}
                    onBlur={Validation}
                />
                <Form.Control.Feedback type="valid">
                    {props.successText}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    {props.errorText}
                </Form.Control.Feedback>
            </InputGroup>
        </React.Fragment>
    );
}

export default Input;