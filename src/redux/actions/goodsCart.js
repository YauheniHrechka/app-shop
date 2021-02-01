
export const clickCheckbox = (good, checkbox) => ({
    type: 'CLICK_CHECKBOX',
    payload: {
        good,
        checkbox
    }
})

export const addGoodCart = (good) => ({
    type: 'ADD_GOOD_CART',
    payload: {
        good
    }
})

export const minusGoodCart = (good) => ({
    type: 'MINUS_GOOD_CART',
    payload: {
        good
    }
})

export const deleteGoodCart = (good) => ({
    type: 'DELETE_GOOD_CART',
    payload: good
})