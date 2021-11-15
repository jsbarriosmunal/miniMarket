import React from 'react';
import {Button, Container, Form, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {
    const [user_name_add, set_user_name_add] = useState('');
    const [user_email_add, set_user_email_add] = useState('');
    const [user_password_add, set_password_add] = useState('');
    const [user_role_add, set_user_role_add] = useState('');
    const [user_status_add, set_user_status_add] = useState('');

    const [id_update, set_id_update] = useState (0);
    const [user_name_update, set_user_name_update] = useState('');
    const [user_email_update, set_user_email_update] = useState('');
    const [user_password_update, set_password_update] = useState('');
    const [user_role_update, set_user_role_update] = useState('');
    const [user_status_update, set_user_status_update] = useState('');

    const [users, set_users] = useState([]);

const add_user = () => {
    Axios.post('http://localhost:4000/api/user/add', {
        user_name: user_name_add,
        user_email: user_email_add,
        user_password: user_password_add,
        user_role: user_role_add,
        user_status: user_status_add
  
    });
}

useEffect(() => {
    Axios.get('http://localhost:4000/api/users/list').then((res) => {
        console.log(res.data.users)
        set_users(res.data.users)
    });
}, [])

const update_user = (_id) => {
    console.log(_id)
    Axios.put('http://localhost:4000/api/user/update/' + _id, {
        _id: _id,
        user_name: user_name_update,
        user_email: user_email_update,
        user_password: user_password_update,
        user_role: user_role_update,
        user_status: user_status_update
    });
}

const delete_user = (_id) => {
    Axios.delete('http://localhost:4000/api/user/delete/' + _id);
}

    return (
        <div className='users'>
            <Container>
                <h2>Módulo de Usuarios</h2>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicUserName'>
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el nombre del usuario'
                            onChange={(event) => { set_user_name_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicUserEmail'>
                        <Form.Label>Correo electrónico del usuario</Form.Label>
                        <Form.Control type='email' placeholder='Ingrese el correo del usuario'
                            onChange={(event) => { set_user_email_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicUserPassword'>
                        <Form.Label>Constraseña de usuario</Form.Label>
                        <Form.Control type='password' placeholder='Ingrese contraseña de usuario'
                            onChange={(event) => { set_password_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicUserRole'>
                        <Form.Label>Rol de usuario</Form.Label>
                        <Form.Control type='text' placeholder='Rol de usuario'
                            onChange={(event) => { set_user_role_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicUserRole'>
                        <Form.Label>Estado de usuario</Form.Label>
                        <Form.Control type='text' placeholder='Estado de usuario'
                            onChange={(event) => { set_user_status_add(event.target.value) }} />
                    </Form.Group>

                    <Button variant='info' onClick={ add_user }>Añadir</Button>
                </Form>

                <hr />

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>Nombre de usuario</th>
                            <th>Correo electrónico de usuario</th>
                            <th>Constraseña de usuario</th>
                            <th>Rol de usuario</th>
                            <th>Estado de Usuario</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((value, key) =>
                                <tr>
                                    <td>
                                        {key}
                                    </td>
                                    <td>{value.user_name}</td>
                                    <td>{value.user_email}</td>
                                    <td>{value.user_password}</td>
                                    <td>{value.user_role}</td>
                                    <td>{value.user_status}</td>
                                    <td>
                                        <Button variant='warning' onClick={() => {
                                            set_id_update(value._id);
                                            set_user_name_update(value.user_name);
                                            set_user_email_update(value.user_email);
                                            set_password_update(value.user_password);
                                            set_user_role_update(value.user_role);
                                            set_user_status_update(value.user_status);
                                            document.getElementById('user_name_update').defaultValue = value.user_name;
                                            document.getElementById('user_email_update').defaultValue = value.user_email;
                                            document.getElementById('user_password_update').defaultValue = value.user_password;
                                            document.getElementById('user_role_update').defaultValue = value.user_role;
                                            document.getElementById('user_status_update').defaultValue = value.user_status;
                                            
                                            
                                            
                                        }}>Editar</Button>
                                    </td>
                                    <td>
                                        <Button variant='dark' onClick={() => delete_user(value._id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

                <hr />

                <Form>
                <Form.Group className='mb-3' >
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control id='user_name_update' type='text' placeholder='Ingrese el nombre del usuario'
                            onChange={(event) => { set_user_name_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Correo electrónico del usuario</Form.Label>
                        <Form.Control id='user_email_update' type='email' placeholder='Ingrese el correo del usuario'
                            onChange={(event) => { set_user_email_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Constraseña de usuario</Form.Label>
                        <Form.Control id='user_password_update' type='password' placeholder='Ingrese contraseña de usuario'
                            onChange={(event) => { set_password_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Rol de usuario</Form.Label>
                        <Form.Control id='user_role_update' type='text' placeholder='Rol de usuario'
                            onChange={(event) => { set_user_role_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Estado de usuario</Form.Label>
                        <Form.Control id='user_status_update' type='text' placeholder='Estado de usuario'
                            onChange={(event) => { set_user_status_update(event.target.value) }} />
                    </Form.Group>

                    <Button variant='success' onClick={() => { update_user(id_update) }}>Actualizar</Button>
                </Form>
            </Container>
        </div>
    );
}
export default Users;
