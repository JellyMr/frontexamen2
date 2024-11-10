// src/components/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('search');

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get(`http://bazarjavi.infinityfreeapp.com/api/items?q=${query}`);
                setResults(response.data.products);
            } catch (error) {
                console.error("Error fetching search results", error);
            }
        };
        fetchResults();
    }, [query]);

    return (
        <Container className="my-5">
            <h2 className="text-center">Resultados de la búsqueda de: {query}</h2>
            <Row className="mt-4">
                {results.map((product) => (
                    <Col md={4} className="mb-4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>
                                    <strong>${product.price}</strong>
                                    <span className="text-muted ms-2">{product.category}</span>
                                </Card.Text>
                                <Card.Text>⭐ {product.rating}</Card.Text>
                                <Link to={`/item/${product.id}`} className="btn btn-primary">
                                    Ver detalles
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SearchResults;
