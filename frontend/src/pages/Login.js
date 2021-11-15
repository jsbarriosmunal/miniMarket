import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { LoginButton } from "../LoginButton";


function Login() {
    return (
        <div className='Login'>
            <Container>
                <h2>Ingreso</h2>
                    {/* <Form.Group className='mb-3' controlId='formUser'>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type='email' placeholder='ejemplo@minimarket.com' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type='password' placeholder='Contraseña' />
                    </Form.Group> */}
                    <div className="LoginButton">
                    <LoginButton/>
                    </div>

                <hr />



            </Container>
        </div>
    );
}

export default Login;
