const initialState = [];

const goods = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GOODS':

            return action.payload;

        default:
            return state;
    }
}

export default goods;