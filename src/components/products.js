import React from 'react';
import products from '../api/products.json'

const product = (props) => {
    const productList = products.map(product => {
        return (
            <div key={product.id} className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={product.imageUrl} alt={product.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.content}</p>
                </div>
            </div>
        );
    });
    return(
        <div className="row">
            {productList}
        </div>
    );
}

export default product;