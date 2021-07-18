import axios from "axios";

export const fetchNavigation = () => dispatch => {
    axios.get('/api/categories')
        .then(res => dispatch(setNavigation(res.data)));
}

export const setNavigation = (items) => ({
    type: 'SET_NAVIGATION',
    payload: items
})