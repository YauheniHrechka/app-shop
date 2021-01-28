const initialState = [];

const navigation = (state = initialState, action) => {
    if (action.type === 'SET_NAVIGATION') {
        return action.payload;
    }

    return state;
}

export default navigation;