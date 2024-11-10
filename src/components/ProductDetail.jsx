// src/components/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://bazarjavi.infinityfreeapp.com/api/items/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details", error);
            }
        };
        fetchProduct();
    }, [id]);

    const handlePurchase = async () => {
        try {
            const response = await axios.post('http://bazarjavi.infinityfreeapp.com/api/addSale', {
                product_id: product.id,
                quantity: 1
            });
            if (response.data.success) {
                alert("Compra registrada con éxito");
            } else {
                alert("Error al registrar la compra");
            }
        } catch (error) {
            console.error("Error registering purchase", error);
        }
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p><strong>Precio: </strong>${product.price}</p>
                    <p><strong>Stock: </strong>{product.stock}</p>
                    <p><strong>Categoría: </strong>{product.category}</p>
                    <Button variant="success" onClick={handlePurchase}>Comprar</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
