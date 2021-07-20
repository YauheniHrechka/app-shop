import React from 'react';
import imgCart from '../../cart.png';
import imgBall from '../../ball.png';
import { Link } from 'react-router-dom';
import './Header.scss';

import { useSelector } from 'react-redux';

const Header = () => {

    const { totalCount } = useSelector(({ goodsCart }) => goodsCart);

    return (
        <header>
            <Link to="/">
                <div className="header">
                    <img src={imgBall} alt="ball" />
                    <h2>Ball shop</h2>
                </div>
            </Link>
            <Link to="/cart">
                <div className="cart">
                    <img src={imgCart} alt="cart" />
                    {totalCount > 0 && <span className="quantity">{totalCount}</span>}
                </div>
            </Link>
            <Link to="/auth">
                <div className="auth">
                    <span>auth</span>
                </div>
            </Link>
        </header>
    )
}

export default Header;