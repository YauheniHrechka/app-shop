import { combineReducers } from 'redux';

import navigation from './navigation';
import goods from './goods';
import filterGoods from './filterGoods';
import goodsCart from './goodsCart';

export default combineReducers({
    navigation,
    goods,
    filterGoods,
    goodsCart
});