import React from 'react';
import './Login.scss';

import { useSelector } from 'react-redux';
import { Context } from '../../context/context';
import { fetchLoginUser } from '../../redux/actions/user';
import { Result } from '../';
import { Button, Form, Input } from 'antd';

const Login = () => {

    const dispatch = React.useContext(Context);
    const user = useSelector(({ user: { user } }) => user);
    console.log('login user -> ', user);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onClick = (e) => {
        console.log('login -> ', dispatch(fetchLoginUser({ email, password })));
    }

    return (
        <div className="login__wrapper">
            {Object.keys(user).length !== 0 ?
                <Result {...user} /> :
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
                </Form>}
        </div>
    )
}

export default Login;