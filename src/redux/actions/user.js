import axios from "axios";

export const fetchUser = params => dispatch => {
    axios.post('/api/auth/login', params)
        .then(res => dispatch(setUser(res.data)));
}

export const setUser = user => ({
    type: 'SET_USER',
    payload: user
})