// src/components/SearchBox.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/results?search=${query}`);
    };

    return (
        <Container className="text-center my-5">
            <h1 className="mb-4">Bazar Online</h1>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Buscar..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button variant="primary" onClick={handleSearch} className="ms-2">
                            Buscar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBox;
