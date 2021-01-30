const initialState = [];

const goodsCart = (state = initialState, action) => {

    if (action.type === 'CLICK_CHECKBOX') {

        let newState = state.slice(0);
        let findGood = newState.find(good => good.good.id === action.payload.good.id);

        if (findGood) {
            findGood.checkbox = action.payload.checkbox;
            return newState;
        }
        return state;

    } else if (action.type === 'ADD_GOOD_CART') {

        let newState = state.slice(0);
        let findGood = newState.find(good => good.good.id === action.payload.good.id);

        if (findGood) {
            findGood.number++;
            return newState;
        }

        return [
            ...state,
            action.payload
        ]

    } else if (action.type === 'MINUS_GOOD_CART') {

        let newState = state.slice(0);
        let findGood = newState.find(good => good.good.id === action.payload.good.id);

        if (findGood && findGood.number > 1) {
            findGood.number--;
        }
        return newState;

    } else if (action.type === 'DELETE_GOOD_CART') {

        let newState = state.slice(0);
        let findGood = newState.find(good => good.good.id === action.payload.id);

        if (findGood) {
            newState.splice(newState.indexOf(findGood), 1);
        }
        return newState;
    }

    return state
}

export default goodsCart;