import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function Login() {
    return (
        <div className='Login'>
            <Container>
                <h2>Módulo de Ingreso</h2>
                <Form>
                    <Form.Group className='mb-3' controlId='formUser'>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type='email' placeholder='ejemplo@minimarket.com' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type='password' placeholder='Contraseña' />
                    </Form.Group>

                    <Button variant='info'>Ingresar</Button>
                </Form>

                <hr />

                <p class='text-danger'>
                    Aquí va el botón de inicio de sesión de Google.
                </p>

            </Container>
        </div>
    );
}

export default Login;
