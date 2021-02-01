const initialState = [];

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAVIGATION':

            return action.payload;

        default:
            return state;
    }
}

export default navigation;