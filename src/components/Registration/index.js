import React from 'react';
import './Registration.scss';

// import { useSelector } from 'react-redux';
import { Context } from '../../context/context';
import { fetchRegisterUser } from '../../redux/actions/user';
// import { Result } from '../';
import { Button, Form, Input, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const Registration = () => {

    const dispatch = React.useContext(Context);
    // const user = useSelector(({ user: { user } }) => user);
    // console.log('user -> ', user);

    const [loading, setLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('');
    const [imgFile, setImgFile] = React.useState(null);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onClick = (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.set('email', email);
        fd.set('password', password);
        fd.set('file', imgFile, imgFile.name);
        dispatch(fetchRegisterUser(fd));
    }

    const getBase64 = (img, callback) => {

        const reader = new FileReader();
        console.log('reader.result', reader.result);
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

    const handleChange = ({ file: { status, originFileObj } }) => {
        if (status === 'uploading') {
            setLoading(true);

        } else if (status === 'done') {
            // Get this url from response in real world.
            setImgFile(originFileObj);

            getBase64(originFileObj, imageUrl => {
                setImageUrl(imageUrl);
                setLoading(true);
            });
        }
    };

    return (
        <div className="registration__wrapper">
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
                        maxCount={1}
                        action={"http://localhost:3001/api/upload/fake"}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ?
                            <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                            <div>
                                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>}
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
        </div>
    )
}

export default Registration;