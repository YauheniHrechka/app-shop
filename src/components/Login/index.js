import React from 'react';
import './Login.scss';

import axios from 'axios';
import { Button, Form, Input } from 'antd';

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onClick = (e) => {
        e.preventDefault();
        console.log('object => ', { email, password });
        axios.post('/api/auth/login', { email, password })
            .then(res => console.log('data => ', res.data));
    }

    return (
        <div className="login__wrapper">
            <Form labelCol={{ span: 7 }}>
                <Form.Item name="email" label="E-mail" rules={[{ required: true }]} >
                    <Input onChange={e => setEmail(e.target.value)} placeholder="E-mail" value={email} />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true }]} >
                    <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 7 }}>
                    <Button onClick={onClick} type="primary" htmlType="button">Enter</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;