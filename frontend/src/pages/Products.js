import React from 'react';
import {Button, Container, Form, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Products() {
    const [product_id_add, set_product_id_add] = useState('');
    const [product_unit_value_add, set_product_unit_value_add] = useState(0);
    const [product_description_add, set_product_description_add] = useState('');
    const [product_availability_add, set_product_availability_add] = useState("true");

    const [id_update, set_id_update] = useState (0);
    const [product_id_update, set_product_id_update] = useState('');
    const [product_unit_value_update, set_product_unit_value_update] = useState(0);
    const [product_description_update, set_product_description_update] = useState('');
    const [product_availability_update, set_product_availability_update] = useState("true");

    const [products, set_products] = useState([]);

const add_product = () => {
    console.log(product_unit_value_add)
    Axios.post('http://localhost:4000/api/product/add', {
        product_id: product_id_add,
        product_unit_value: product_unit_value_add,
        product_description: product_description_add,
        product_availability: product_availability_add
  
    });
}

useEffect(() => {
    Axios.get('http://localhost:4000/api/products/list').then((res) => {
        console.log(res.data.products)
        set_products(res.data.products)
    });
}, [])

const update_product = (_id) => {
    console.log(_id)
    Axios.put('http://localhost:4000/api/product/update/' + _id, {
        _id: _id,
        product_id: product_id_update,
        product_unit_value: product_unit_value_update,
        product_description: product_description_update,
        product_availability: product_availability_update
    });
}

const delete_product = (_id) => {
    Axios.delete('http://localhost:4000/api/product/delete/' + _id);
}

    return (
        <div className='Products'>
            <Container>
                <h2>Módulo de Productos</h2>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicProductId'>
                        <Form.Label>ID producto</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el ID del producto'
                            onChange={(event) => { set_product_id_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicProductUnitValue'>
                        <Form.Label>Valor unitario producto</Form.Label>
                        <Form.Control type='number' placeholder='Ingrese el valor unitario del producto'
                            onChange={(event) => { set_product_unit_value_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicProductDescription'>
                        <Form.Label>Descripción producto</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese la descripción del producto'
                            onChange={(event) => { set_product_description_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicProductStatus'>
                        <Form.Label>Estado del porducto</Form.Label>
                        <Form.Control type='boolean' placeholder='Ingrese el estado del producto'
                            onChange={(event) => { set_product_availability_add(event.target.value) }} />
                    </Form.Group>

                    <Button variant='info' onClick={ add_product }>Añadir</Button>
                </Form>

                <hr />

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>ID producto</th>
                            <th>Valor unitario producto</th>
                            <th>Descripción del producto</th>
                            <th>Estado del producto</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((value, key) =>
                                <tr>
                                    <td>
                                        {key}
                                    </td>
                                    <td>{value.product_id}</td>
                                    <td>{value.product_unit_value}</td>
                                    <td>{value.product_description}</td>
                                    <td>{value.product_availability.toString()}</td>
                                    <td>
                                        <Button variant='warning' onClick={() => {
                                            set_id_update(value._id);
                                            set_product_id_update(value.product_id);
                                            set_product_unit_value_update(value.product_unit_value);
                                            set_product_description_update(value.product_description);
                                            set_product_availability_update(value.product_availability);
                                            document.getElementById('product_id_update').defaultValue = value.product_id;
                                            document.getElementById('product_unit_value_update').defaultValue = value.product_unit_value;
                                            document.getElementById('product_description_update').defaultValue = value.product_description;
                                            document.getElementById('product_availability_update').defaultValue = value.product_availability;
                                        }}>Editar</Button>
                                    </td>
                                    <td>
                                        <Button variant='dark' onClick={() => delete_product(value._id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

                <hr />

                <Form>
                <Form.Group className='mb-3' >
                        <Form.Label>ID producto</Form.Label>
                        <Form.Control id='product_id_update' disabled={true} type='text' placeholder='Ingrese el ID de la venta'
                            onChange={(event) => { set_product_id_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Valor unitario producto</Form.Label>
                        <Form.Control id='product_unit_value_update' type='number' placeholder='Ingrese valor total venta de la venta'
                            onChange={(event) => { set_product_unit_value_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Descripción producto</Form.Label>
                        <Form.Control id='product_description_update' type='text' placeholder='Ingrese el ID del producto'
                            onChange={(event) => { set_product_description_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Estado del producto</Form.Label>
                        <Form.Control id='product_availability_update' type='boolean' placeholder='Ingrese la cantidad de productos'
                            onChange={(event) => { set_product_availability_update(event.target.value) }} />
                    </Form.Group>

                    <Button variant='success' onClick={() => { update_product(id_update) }}>Actualizar</Button>
                </Form>
            </Container>
        </div>
    );
}

export default Products;
