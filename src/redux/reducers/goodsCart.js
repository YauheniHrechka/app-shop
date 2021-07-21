const initialState = {
    goods: {},
    totalCount: 0,
    totalPrice: 0
};

const calcTotalGood = (obj) => {
    Object.keys(obj).forEach(id => {
        let currentObj = obj[id];
        currentObj.totalCountGood = currentObj.goods.length;
        currentObj.totalPriceGood = (currentObj.goods.length * Number(currentObj.goods[0].good.price)).toFixed(2);
    })
}

const calcTotal = (obj, value) => {
    return Object.keys(obj).reduce((total, item) => {
        return total + (obj[item].checkbox ? Number(obj[item][value]) : 0);
    }, 0)
}

const goodsCart = (state = initialState, action) => {

    let newGoods;

    switch (action.type) {
        case 'CLICK_CHECKBOX':

            newGoods = {
                ...state.goods,
                [action.payload.good._id]: {
                    ...state.goods[action.payload.good._id],
                    checkbox: action.payload.checkbox
                }
            }

            return {
                ...state,
                goods: newGoods,
                totalCount: calcTotal(newGoods, 'totalCountGood'),
                totalPrice: calcTotal(newGoods, 'totalPriceGood').toFixed(2)
            }

        case 'ADD_GOOD_CART':

            newGoods = {
                ...state.goods,
                [action.payload.good._id]: !state.goods[action.payload.good._id]
                    ? {
                        goods: [action.payload],
                        totalCountGood: 1,
                        totalPriceGood: Number(action.payload.good.price),
                        checkbox: true
                    }
                    : {
                        ...state.goods[action.payload.good._id],
                        goods: [...state.goods[action.payload.good._id].goods, action.payload]
                    }
            }

            calcTotalGood(newGoods);

            return {
                ...state,
                goods: newGoods,
                totalCount: calcTotal(newGoods, 'totalCountGood'),
                totalPrice: calcTotal(newGoods, 'totalPriceGood').toFixed(2)
            }

        case 'MINUS_GOOD_CART':

            newGoods = {
                ...state.goods,
                [action.payload.good._id]: {
                    ...state.goods[action.payload.good._id],
                    goods: state.goods[action.payload.good._id].goods.slice(0, -1)
                }
            }

            calcTotalGood(newGoods);

            return {
                ...state,
                goods: newGoods,
                totalCount: calcTotal(newGoods, 'totalCountGood'),
                totalPrice: calcTotal(newGoods, 'totalPriceGood').toFixed(2)
            }

        case 'DELETE_GOOD_CART':

            newGoods = {
                ...state.goods
            }

            delete newGoods[action.payload._id];
            calcTotalGood(newGoods);

            return {
                ...state,
                goods: newGoods,
                totalCount: calcTotal(newGoods, 'totalCountGood'),
                totalPrice: calcTotal(newGoods, 'totalPriceGood').toFixed(2)
            }

        default:
            return state;
    }
}

export default goodsCart;