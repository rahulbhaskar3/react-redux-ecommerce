import products from '../api/products.json'

const productReducer = (state = { products: null }, action) => {
    switch(action.type) {
        case 'GET-PRODUCTS':
            return {
                ...state,
                products: products
            }
        case 'DELETE-PRODUCT':
            return {
                ...state,
                products: state.products.filter(pro => pro.id !== action.payload)
            }
        default:
            return state;
    }
}

export default productReducer;