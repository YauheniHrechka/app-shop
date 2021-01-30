import React from 'react';
import imgCart from '../../cart.png';
import imgBall from '../../ball.png';
import { Link } from 'react-router-dom';
import './Header.scss';

import { connect } from 'react-redux';

const Header = ({ goodsCart }) => {
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
                    {goodsCart.length > 0 && <span className="quantity">{goodsCart.length}</span>}
                </div>
            </Link>
        </header>
    )
}

export default connect(
    state => ({
        goodsCart: state.goodsCart
    }),
    dispatch => ({})
)(Header);