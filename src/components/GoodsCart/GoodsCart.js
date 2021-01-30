import React from 'react';
import './GoodsCart.scss';

import { connect } from 'react-redux';

import GoodCart from '../GoodCart/GoodCart';

const GoodsCart = ({ goodsCart, total }) => {

    return (
        <div className="container__cart">
            <div className="header__cart">
                <h1>{`Your order : ${total} BYN`}</h1>
            </div>
            <div className="container__goodsCart">
                {goodsCart.map(({ good, number, checkbox }) =>
                    <GoodCart
                        key={good.id}
                        good={good}
                        number={number}
                        checkbox={checkbox}
                    />
                )}
            </div>
        </div>
    )
}

export default connect(
    state => ({
        goodsCart: state.goodsCart,
        total: state.goodsCart.reduce((total, { good, number, checkbox }) => {
            return total + (checkbox ? good.price * number : 0);
        }, 0).toFixed(2)
    }),
    dispatch => ({})
)(GoodsCart);