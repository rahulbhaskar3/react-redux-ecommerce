import React from 'react';
import ReactDom from 'react-dom';
import './product-tile.css'

const productTile = (props) => {
    return(
        <div className="box">
            <p>{props.name}</p>
            <img className="product-image" src={props.imageUrl}></img>
        </div>
    );
}

export default productTile;