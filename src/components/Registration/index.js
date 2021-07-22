import React from 'react';
import './Registration.scss';

import { useSelector } from 'react-redux';
import { Context } from '../../context/context';
import { fetchRegisterUser } from '../../redux/actions/user';
// import { Result } from '../';
import { Button, Form, Input, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const Registration = () => {

    const dispatch = React.useContext(Context);
    const user = useSelector(({ user: { user } }) => user);
    // console.log('user -> ', user);

    const [loading, setLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onClick = (e) => {
        e.preventDefault();
        dispatch(fetchRegisterUser({ email, password }));
    }

    const getBase64 = (img, callback) => {
        console.log('getBase64');
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = file => {

        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }

        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = info => {
        console.log('info', info);
        if (info.file.status === 'uploading') {
            console.log('uploading');
            setLoading(true);
            return;
        }
        console.log('info.file.status', info.file.status);
        if (info.file.status === 'done') {
            console.log('done');
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl);
                setLoading(true);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )

    return (
        <div className="login__wrapper">
            {/* {Object.keys(user).length !== 0 ?
                <Result {...user} /> : */}
            <Form className="login-form" labelCol={{ span: 7 }}>
                <Form.Item wrapperCol={{ offset: 7 }}>
                    <h2>Create an account</h2>
                </Form.Item>

                <Form.Item name="upload" wrapperCol={{ offset: 7 }} valuePropName="image" >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        showUploadList={false}
                        accept=".jpeg, .png"
                        // action="/test.json"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>

                <Form.Item name="email" label="E-mail" rules={[{ required: true }]} >
                    <Input onChange={e => setEmail(e.target.value)} placeholder="E-mail" value={email} />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true }]} >
                    <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 7 }}>
                    <Button onClick={onClick} type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
            {/* } */}
        </div>
    )
}

export default Registration;