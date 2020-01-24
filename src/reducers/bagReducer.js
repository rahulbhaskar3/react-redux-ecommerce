import products from '../api/products.json'

const initialState = {
    bagItem: []
}

const bagReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_BAG':
            return {
                ...state,
                bagItem: [...state.bagItem, ...action.payload]
            }
        default:
            return state;
    }
}

export default bagReducer;