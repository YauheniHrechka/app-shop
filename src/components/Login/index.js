import React from 'react';
import './Login.scss';

import axios from 'axios';

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onClick = (e) => {
        e.preventDefault();
        console.log('object => ', { email, password });
        axios.post('/api/auth/login', { email, password })
            .then(data => console.log('data => ', data));
    }

    return (
        <div className="login__wrapper">
            <form className="form">
                <div>
                    <label >E-mail:
                        <input type="text" name="email" onInput={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label > Password:
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <button type="submit" onClick={onClick}>Login</button>
            </form>
        </div>
    )
}

export default Login;