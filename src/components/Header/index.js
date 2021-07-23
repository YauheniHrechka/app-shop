import React from 'react';
// import imgCart from '../../cart.png';
// import imgBall from '../../ball.png';
import { Link } from 'react-router-dom';
import './Header.scss';

import { useSelector } from 'react-redux';
import { Navigation } from '../';
import { Avatar, Badge, Button, Input, Layout, Menu, Dropdown } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const menu = (
    <Menu>
        <Link to="/login">
            <Menu.Item key="1" icon={<UserOutlined />}>
                {/* <a rel="noopener noreferrer"> */}
                Sign in
                {/* </a> */}
            </Menu.Item>
        </Link>
        <Link to="/registration">
            <Menu.Item key="2" icon={<UserAddOutlined />}>
                {/* <a rel="noopener noreferrer"> */}
                Create Account
                {/* </a> */}
            </Menu.Item>
        </Link>
    </Menu>
);

const Header = () => {

    const { totalCount } = useSelector(({ goodsCart }) => goodsCart);

    return (
        <>
            <AntHeader style={{ background: '#f0f2f5', padding: '0 20px' }}>
                <Link to="/">
                    <div className="logo"></div>
                </Link>
                <div className="search">
                    <Input size="large" placeholder=" search" prefix={<SearchOutlined />} style={{ borderRadius: '40px' }} />
                </div>
                <div className="login">
                    <Dropdown overlay={menu}>
                        {/* <Avatar style={{ backgroundColor: '#d580ff' }} size={48} icon={<UserOutlined />} /> */}
                        <Button shape="round" icon={<UserOutlined />} size="large">
                            account
                        </Button>
                    </Dropdown>
                </div>

                <div className="cart">
                    <Link to="/cart">
                        <Button shape="round" size="large">
                            <Badge size="small" count={totalCount} style={{ backgroundColor: '#52c41a' }}>
                                <ShoppingCartOutlined />
                            </Badge>
                            <span className="btn-title">cart</span>
                        </Button>

                        {/*        <Badge size="small" count={totalCount} style={{ backgroundColor: '#52c41a' }}>
                                <ShoppingCartOutlined />
                            </Badge> */}
                        {/* <span>cart</span> */}
                        {/* {totalCount > 0 && <span className="quantity">{totalCount}</span>} */}
                    </Link>
                </div>

                {/* </div> */}
            </AntHeader>
            <Navigation />
        </>
        // <header>
        //     <Link to="/">
        //         <div className="header">
        //             <img src={imgBall} alt="ball" />
        //             <h2>Ball shop</h2>
        //         </div>
        //     </Link>
        //     <div className="menu">
        //         <Link to="/cart">
        //             <div className="cart">
        //                 <img src={imgCart} alt="cart" />
        //                 {totalCount > 0 && <span className="quantity">{totalCount}</span>}
        //             </div>
        //         </Link>
        //         <Link to="/login">
        //             <div className="login">
        //                 <span>login</span>
        //             </div>
        //         </Link>
        //         <Link to="/registration">
        //             <div className="registration">
        //                 <span>registration</span>
        //             </div>
        //         </Link>
        //     </div>
        // </header>
    )
}

export default Header;