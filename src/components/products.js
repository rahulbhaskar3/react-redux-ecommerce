import React from 'react';
import ReactDom from 'react-dom';
import products from '../api/products.json'
import ProductTile from './product-tile';
import './product-tile.css';

const product = (props) => {
    const productList = products.map(pro => {
        return (<ProductTile key={pro.id}
            name={pro.name}
            price={pro.price}
            subCategoryId={pro.subCategoryId}
            categoryId={pro.categoryId}
            rate={pro.rate}
            content={pro.content}
            review={pro.review}
            typeVariant={pro.typeVariant}
            colorvariant={pro.colorvariant}
            imageUrl={pro.imageUrl}/>);
    });
    return(
        <div className="wrapper">
            {productList}
        </div>
    );
}

export default product;