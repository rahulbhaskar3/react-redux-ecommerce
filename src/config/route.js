import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Products from '../components/products';

const routes = (
    <Router>
        <Header />  
        <Navigation />
        <Route exact path="/" component={App} />
        <Route exact path="/products" component={Products} />
        <Footer />
    </Router>
);

export default routes;