import React from 'react';
import { Login, Registration } from '../components';

const Auth = () => {
    return (
        <>
            {true ? <Login /> : <Registration />}
        </>
    )
}

export default Auth;