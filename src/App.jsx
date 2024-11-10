// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';
import RegisteredPurchases from './components/RegisteredPurchases';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchBox />} />
                <Route path="/results" element={<SearchResults />} />
                <Route path="/item/:id" element={<ProductDetail />} />
                <Route path="/sales" element={<RegisteredPurchases />} />
            </Routes>
        </Router>
    );
}

export default App;
