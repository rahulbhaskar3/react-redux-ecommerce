import React from 'react';
import ReactDom from 'react-dom';
import ProductTile from './product-tile';
import './product-tile.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../actions/actions';

const Product = (props) => {
    const productListRedux = useSelector(state => state.products);
    const dispatch = useDispatch();

    let productList;
    if(productListRedux.products !== null) {
        productList = productListRedux.products.map(pro => {
            return (<ProductTile key={pro.id}
                id={pro.id}
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
    } else {
        productList = <span>Data Loading</span>
    }

    return(
        <div className="App">
            <button className="btn btn-primary" onClick={() => dispatch(getProduct())}>Load Products</button>
            <div className="wrapper">
                {productList}
            </div>
        </div>
    );
}
export default Product;