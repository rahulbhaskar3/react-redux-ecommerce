import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Products from './components/products';

const routes = (
    <Router>
        <Header />  
        <Navigation />
        <Route exact path="/" component={App} />
        <Route exact path="/products" component={Products} />
        <Footer />
    </Router>
);
ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
