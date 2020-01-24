import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Products from '../components/products';
import Bag from '../components/bag';

const Routes = () => {
    return (
        <Router>
            <Navigation />
            <Route exact path="/" component={App} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/bag" component={Bag} />
            <Footer />
        </Router>
    );    
}

export default Routes;