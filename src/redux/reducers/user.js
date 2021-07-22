const initialState = {
    user: {},
    hasRegistration: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}

export default user;