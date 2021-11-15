import React from 'react';
import {Button, Container, Form, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Sales() {
    const [sale_id_add, set_sale_id_add] = useState('');
    const [sale_total_value_add, set_sale_total_value_add] = useState(0);
    const [product_id_add, set_product_id_add] = useState('');
    const [product_quantity_add, set_product_quantity_add] = useState(0);
    const [product_unit_value_add, set_product_unit_value_add] = useState(0);
    const [client_id_add, set_client_id_add] = useState('');
    const [client_name_add, set_client_name_add] = useState('');
    const [seller_name_add, set_seller_name_add] = useState('');
    const [sale_status_add, set_sale_status_add] = useState('');

    const [id_update, set_id_update] = useState (0);
    const [sale_id_update, set_sale_id_update] = useState('');
    const [sale_total_value_update, set_sale_total_value_update] = useState(0);
    const [product_id_update, set_product_id_update] = useState('');
    const [product_quantity_update, set_product_quantity_update] = useState(0);
    const [product_unit_value_update, set_product_unit_value_update] = useState(0);
    const [client_id_update, set_client_id_update] = useState('');
    const [client_name_update, set_client_name_update] = useState('');
    const [seller_name_update, set_seller_name_update] = useState('');
    const [sale_status_update, set_sale_status_update] = useState('');

    const [sales, set_sales] = useState([]);

const add_sale = () => {
    console.log(product_unit_value_add)
    Axios.post('http://localhost:4000/api/sale/add', {
        sale_id: sale_id_add,
        sale_total_value: product_quantity_add*product_unit_value_add,
        product_id: product_id_add,
        product_quantity: product_quantity_add,
        product_unit_value: product_unit_value_add,
        client_id: client_id_add,
        client_name: client_name_add,
        seller_name: seller_name_add,
        sale_status: sale_status_add
    });
}

useEffect(() => {
    Axios.get('http://localhost:4000/api/sales/list').then((res) => {
        console.log(res.data.sales)
        set_sales(res.data.sales)
    });
}, [])

const update_sale = (_id) => {
    Axios.put('http://localhost:4000/api/sale/update/' + _id, {
        _id: _id,
        sale_id: sale_id_update,
        sale_total_value: product_quantity_update*product_unit_value_update,
        product_id: product_id_update,
        product_quantity: product_quantity_update,
        product_unit_value: product_unit_value_update,
        client_id: client_id_update,
        client_name: client_name_update,
        seller_name: seller_name_update,
        sale_status: sale_status_update
    });
}

const delete_sale = (_id) => {
    Axios.delete('http://localhost:4000/api/sale/delete/' + _id);
}

    return (
        <div className='Sales'>
            <Container>
                <h2>Módulo de Ventas</h2>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicSaleId'>
                        <Form.Label>ID venta</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el ID de la venta'
                            onChange={(event) => { set_sale_id_add(event.target.value) }} />
                    </Form.Group>

                    {/* <Form.Group className='mb-3' controlId='formBasicSaleTotalValue'>
                        <Form.Label>Valor total venta</Form.Label>
                        <Form.Control type='number' disabled="true" placeholder='Ingrese valor total venta de la venta'
                            onChange={(event) => { set_sale_total_value_add(event.target.value) }} />
                    </Form.Group> */}

                    <Form.Group className='mb-3' controlId='formBasicProductId'>
                        <Form.Label>ID producto</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el ID del producto'
                            onChange={(event) => { set_product_id_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicProductQuantity'>
                        <Form.Label>Cantidad producto</Form.Label>
                        <Form.Control type='number' placeholder='Ingrese la cantidad de productos'
                            onChange={(event) => { set_product_quantity_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicProductUnitValue'>
                        <Form.Label>Valor unitario producto</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el valor unitario del producto'
                            onChange={(event) => { set_product_unit_value_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicClientId'>
                        <Form.Label>ID cliente</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el ID del cliente'
                            onChange={(event) => { set_client_id_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicClientName'>
                        <Form.Label>Nombre cliente</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el nombre del cliente'
                            onChange={(event) => { set_client_name_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicSellerName'>
                        <Form.Label>Nombre vendedor</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el nombre del vendedor'
                            onChange={(event) => { set_seller_name_add(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicSaleStatus'>
                        <Form.Label>Estado venta</Form.Label>
                        <Form.Control type='text' placeholder='Ingrese el estado de la venta'
                            onChange={(event) => { set_sale_status_add(event.target.value) }} />
                    </Form.Group>

                    <Button variant='info' onClick={ add_sale }>Añadir</Button>
                </Form>

                <hr />

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>ID venta</th>
                            <th>Valor total venta</th>
                            <th>ID producto</th>
                            <th>Cantidad producto</th>
                            <th>Valor unitario producto</th>
                            <th>ID cliente</th>
                            <th>Nombre cliente</th>
                            <th>Nombre vendedor</th>
                            <th>Estado venta</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map((value, key) =>
                                <tr>
                                    <td>
                                        {key}
                                    </td>
                                    <td>{value.sale_id}</td>
                                    <td>{value.product_quantity*value.product_unit_value}</td>
                                    <td>{value.product_id}</td>
                                    <td>{value.product_quantity}</td>
                                    <td>{value.product_unit_value}</td>
                                    <td>{value.client_id}</td>
                                    <td>{value.client_name}</td>
                                    <td>{value.seller_name}</td>
                                    <td>{value.sale_status}</td>
                                    <td>
                                        <Button variant='warning' onClick={() => {
                                            set_id_update(value._id);
                                            set_sale_id_update(value.sale_id);
                                            set_sale_total_value_update(value.product_quantity*value.product_unit_value);
                                            set_product_id_update(value.product_id);
                                            set_product_quantity_update(value.product_quantity);
                                            set_product_unit_value_update(value.product_unit_value);
                                            set_client_id_update(value.client_id);
                                            set_client_name_update(value.client_name);
                                            set_seller_name_update(value.seller_name);
                                            set_sale_status_update(value.sale_status);
                                            document.getElementById('sale_id_update').defaultValue = value.sale_id;
                                            document.getElementById('sale_total_value_update').defaultValue = value.product_quantity*value.product_unit_value;
                                            document.getElementById('product_id_update').defaultValue = value.product_id;
                                            document.getElementById('product_quantity_update').defaultValue = value.product_quantity;
                                            document.getElementById('product_unit_value_update').defaultValue = value.product_unit_value;
                                            document.getElementById('client_id_update').defaultValue = value.client_id;
                                            document.getElementById('client_name_update').defaultValue = value.client_name;
                                            document.getElementById('seller_name_update').defaultValue = value.seller_name;
                                            document.getElementById('sale_status_update').defaultValue = value.sale_status;
                                        }}>Editar</Button>
                                    </td>
                                    <td>
                                        <Button variant='dark' onClick={() => delete_sale(value._id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

                <hr />

                <Form>
                <Form.Group className='mb-3' >
                        <Form.Label>ID venta</Form.Label>
                        <Form.Control id='sale_id_update' disabled={true} type='text' placeholder='Ingrese el ID de la venta'
                            onChange={(event) => { set_sale_id_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Valor total venta</Form.Label>
                        <Form.Control id='sale_total_value_update' type='number' placeholder='Ingrese valor total venta de la venta'
                            onChange={(event) => { set_sale_total_value_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>ID producto</Form.Label>
                        <Form.Control id='product_id_update' type='text' placeholder='Ingrese el ID del producto'
                            onChange={(event) => { set_product_id_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Cantidad producto</Form.Label>
                        <Form.Control id='product_quantity_update' type='number' placeholder='Ingrese la cantidad de productos'
                            onChange={(event) => { set_product_quantity_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Valor unitario producto</Form.Label>
                        <Form.Control id='product_unit_value_update' type='text' placeholder='Ingrese el valor unitario del producto'
                            onChange={(event) => { set_product_unit_value_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>ID cliente</Form.Label>
                        <Form.Control id='client_id_update' type='text' placeholder='Ingrese el ID del cliente'
                            onChange={(event) => { set_client_id_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Nombre cliente</Form.Label>
                        <Form.Control id='client_name_update' type='text' placeholder='Ingrese el nombre del cliente'
                            onChange={(event) => { set_client_name_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Nombre vendedor</Form.Label>
                        <Form.Control id='seller_name_update' type='text' placeholder='Ingrese el nombre del vendedor'
                            onChange={(event) => { set_seller_name_update(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className='mb-3' >
                        <Form.Label>Estado venta</Form.Label>
                        <Form.Control id='sale_status_update' type='text' placeholder='Ingrese el estado de la venta'
                            onChange={(event) => { set_sale_status_update(event.target.value) }} />
                    </Form.Group>

                    <Button variant='success' onClick={() => { update_sale(id_update) }}>Actualizar</Button>
                </Form>
            </Container>
        </div>
    );
}

export default Sales;
