import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productReducer from './productReducer';
import bagReducer from './bagReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    products: productReducer,
    bagItem: bagReducer
});

export default allReducers;