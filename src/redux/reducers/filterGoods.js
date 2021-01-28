const initialState = '';

const filterGoods = (state = initialState, action) => {
    if (action.type === 'FILTER_BY_CATEGORY') {
        return action.payload;
    }

    return state;
}

export default filterGoods;