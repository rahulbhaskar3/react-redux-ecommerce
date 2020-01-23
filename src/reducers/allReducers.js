import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productReducer from './productReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    products: productReducer
});

export default allReducers;