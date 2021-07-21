import React from 'react';
// import imgCart from '../../cart.png';
// import imgBall from '../../ball.png';
import { Link } from 'react-router-dom';
import './Header.scss';

import { useSelector } from 'react-redux';
import { Navigation } from '../';
import { Avatar, Badge, Layout, Menu, Dropdown } from 'antd';
import { ShoppingCartOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const menu = (
    <Menu>
        <Link to="/login">
            <Menu.Item icon={<UserOutlined />}>
                {/* <a rel="noopener noreferrer"> */}
                Sign in
                {/* </a> */}
            </Menu.Item>
        </Link>
        <Link to="/registration">
            <Menu.Item icon={<UserAddOutlined />}>
                <a rel="noopener noreferrer">
                    Registration
                </a>
            </Menu.Item>
        </Link>
    </Menu>
);

const Header = () => {

    const { totalCount } = useSelector(({ goodsCart }) => goodsCart);

    return (
        <AntHeader>
            <Link to="/">
                <div className="logo"></div>
            </Link>
            <Navigation />
            <div>
                {/* <Link to="/login"> */}
                <div className="login">
                    <Dropdown overlay={menu}>
                        <Avatar style={{ backgroundColor: '#d580ff' }} size={48} icon={<UserOutlined />} />
                    </Dropdown>
                </div>
                {/* </Link> */}
                <Link to="/cart">
                    <div className="cart">
                        <Badge size="small" count={totalCount} style={{ backgroundColor: '#52c41a' }}>
                            <ShoppingCartOutlined />
                        </Badge>
                        {/* <span>cart</span> */}
                        {/* {totalCount > 0 && <span className="quantity">{totalCount}</span>} */}
                    </div>
                </Link>
            </div>
        </AntHeader>
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