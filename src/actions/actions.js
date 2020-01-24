export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const getProduct = () => {
    return {
        type: 'GET_PRODUCTS'
    }
}

export const deleteProduct = (productId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: productId
    }
}

export const addToBag = (product) => {
    return {
        type: 'ADD_TO_BAG',
        payload: [product]
    }
}