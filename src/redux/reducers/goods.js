const initialState = [];

const goods = (state = initialState, action) => {
    if (action.type === 'SET_GOODS') {
        return action.payload;
    }

    return state;
}

export default goods;