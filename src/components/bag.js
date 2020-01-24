import React from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';

const Bag = () => {
    const bagItems = useSelector(state => state.bagItem.bagItem);
    console.log(bagItems);
    let bagItemList;
    if(bagItems.length !== 0 && bagItems !== null && bagItems) {
        bagItemList = bagItems.map(bItem => {
            return <li>{bItem.name}</li>
        });
    } else {
        bagItemList = <span>Bag is Empty</span>
    }

    return(
        <div className="box">
            <ul>
                {bagItemList}
            </ul>
        </div>
    )
}

export default Bag;