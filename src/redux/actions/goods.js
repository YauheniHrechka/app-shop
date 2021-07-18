import axios from 'axios';

export const fetchGoods = () => dispatch => {
    axios.get('/api/goods')
        .then(res => dispatch(setGoods(res.data)));
}

export const setGoods = (goods) => ({
    type: 'SET_GOODS',
    payload: goods
})