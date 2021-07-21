import { combineReducers } from 'redux';

import navigation from './navigation';
import goods from './goods';
import filterGoods from './filterGoods';
import goodsCart from './goodsCart';
import user from './user';

export default combineReducers({
    navigation,
    goods,
    filterGoods,
    goodsCart,
    user
});