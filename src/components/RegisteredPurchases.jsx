// src/components/RegisteredPurchases.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, Button } from 'react-bootstrap';

const RegisteredPurchases = () => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await axios.get('http://bazarjavi.infinityfreeapp.com/api/sales');
                setPurchases(response.data.sales);
            } catch (error) {
                console.error("Error fetching purchases", error);
            }
        };
        fetchPurchases();
    }, []);

    return (
        <Container className="my-5">
            <h2 className="text-center">Registered Purchases</h2>
            <ListGroup className="mt-4">
                {purchases.map((purchase) => (
                    <ListGroup.Item key={purchase.sale_id}>
                        <p><strong>Producto:</strong> {purchase.title}</p>
                        <p><strong>Cantidad:</strong> {purchase.quantity}</p>
                        <p><strong>Fecha:</strong> {new Date(purchase.sale_date).toLocaleString()}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="text-center mt-4">
                <Button variant="danger" onClick={() => window.location.href = '/'}>Salir</Button>
            </div>
        </Container>
    );
};

export default RegisteredPurchases;
