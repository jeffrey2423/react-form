import React, { useState, useEffect } from 'react'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../components/Input'
import { regularExpressions } from '../Generales';

const SignUpForm = () => {

    const [inputName, ChangeInputName] = useState({ value: '', isValid: null, isInvalid: null });
    const [inputEmail, ChangeInputEmail] = useState({ value: '', isValid: null, isInvalid: null });
    const [isValidForm, ChangeisValidForm] = useState(false);

    useEffect(() => {

        let vBlnFlag = false;

        if (inputName.isValid && inputEmail.isValid) {
            vBlnFlag = true
        }

        if (vBlnFlag) {
            ChangeisValidForm(true);
        } else {
            ChangeisValidForm(false);
        }

    }, [inputName, inputEmail]);


    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container>

            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <Input
                            id="name"
                            label="Nombre"
                            type='text'
                            errorText="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
                            successText="Bien hecho!"
                            regularExpression={regularExpressions.userName}
                            inputState={inputName}
                            inputChangeState={ChangeInputName}
                        />
                    </Col>
                    <Col>
                        <Input
                            id="email"
                            label="Correo"
                            type='text'
                            errorText="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo"
                            successText="Bien hecho!"
                            regularExpression={regularExpressions.email}
                            inputState={inputEmail}
                            inputChangeState={ChangeInputEmail}
                        />
                    </Col>
                </Row>

                <Button type="submit" className='mt-5' disabled={isValidForm ? !isValidForm : true}>
                    Registarme
                </Button>
            </Form>

        </Container>
    );
}

export default SignUpForm;
