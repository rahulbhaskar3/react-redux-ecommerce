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
        type: 'GET-PRODUCTS'
    }
}

export const deleteProduct = (productId) => {
    return {
        type: 'DELETE-PRODUCT',
        payload: productId
    }
}