import axios from "axios";

export const fetchRegisterUser = params => dispatch => {
    axios.post('/api/auth/registration', params)
        .then(res => console.log(res.data));
}

export const fetchLoginUser = params => dispatch => {
    axios.post('/api/auth/login', params)
        .then(res => dispatch(setUser(res.data)));
}

export const setUser = user => ({
    type: 'SET_USER',
    payload: user
})