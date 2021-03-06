import React from 'react';
import './GoodsCart.scss';

import { useSelector } from 'react-redux';

import { GoodCart } from '../';

const GoodsCart = () => {

    const { goodsCart, totalPrice } = useSelector(({ goodsCart }) => ({
        goodsCart: goodsCart.goods,
        totalPrice: goodsCart.totalPrice
    }));

    const goods = Object.keys(goodsCart).map(_id => ({
        ...goodsCart[_id],
        good: goodsCart[_id].goods[0].good
    }));

    return (
        <div className="container__cart">
            <div className="header__cart">
                <h1>{`Your order : ${totalPrice} BYN`}</h1>
            </div>
            <div className="container__goodsCart">
                {goods && goods.map(({ good, totalCountGood, totalPriceGood, checkbox }) =>
                    <GoodCart
                        key={good._id}
                        good={good}
                        totalCount={totalCountGood}
                        totalPrice={totalPriceGood}
                        checkbox={checkbox}
                    />
                )}
            </div>
        </div>
    )
}

export default GoodsCart;