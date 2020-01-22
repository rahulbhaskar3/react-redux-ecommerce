import React from 'react';
import ReactDom from 'react-dom';
import './product-tile.css';
import { increment, decrement, deleteProduct } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const ProductTile = (props) => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(
        <div className="box">
            <p>{props.name}</p>
            <div>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
                <button className="btn"><input type="number" value={counter}></input></button>
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
            </div>
            <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(props.id))}>Delete Product</button>
        </div>
    );
}

export default ProductTile;