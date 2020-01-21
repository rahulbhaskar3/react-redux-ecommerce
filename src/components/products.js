import React from 'react';
import ReactDom from 'react-dom';
import products from '../api/products.json'


const product = (props) => {
    const productList = products.map(pro => {
    return (<li>{pro.name}</li>);
    });
    return(
        <div>
            <ul>
                {productList}
            </ul>
        </div>
    );
}

export default product;