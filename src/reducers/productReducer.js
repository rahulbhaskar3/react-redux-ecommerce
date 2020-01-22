import products from '../api/products.json'

const productReducer = (state = { products: null }, action) => {
    switch(action.type) {
        case 'GET-PRODUCTS':
            return state = {
                products: [...products]
            };
        case 'DELETE-PRODUCT':
            state = {
                products: state.products.filter(pro => pro.id !== action.payload)
            }
            return state;
        default:
            return state;
    }
}

export default productReducer;