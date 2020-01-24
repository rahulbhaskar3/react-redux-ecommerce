import products from '../api/products.json'

const initialState = { 
    products: null 
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: products
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(pro => pro.id !== action.payload)
            }
        default:
            return state;
    }
}

export default productReducer;