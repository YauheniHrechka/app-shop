const initialState = '';

const filterGoods = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_BY_CATEGORY':

            return action.payload;

        default:
            return state;
    }
}

export default filterGoods;