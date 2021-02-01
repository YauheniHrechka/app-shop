import React from 'react';
import './GoodCart.scss';

import { clickCheckbox, addGoodCart, minusGoodCart, deleteGoodCart } from '../../redux/actions/goodsCart';

const GoodCart = ({ good, totalCount, totalPrice, checkbox, dispatch }) => {

    const { modelNumber, name, brand, url, price } = good;

    const onClickCheckbox = (e) => {
        dispatch(clickCheckbox(good, e.target.checked));
    }

    const onClickBtnPlus = () => {
        dispatch(addGoodCart(good));
    }

    const onClickBtnMinus = () => {
        if (totalCount === 1) return;
        dispatch(minusGoodCart(good));
    }

    const onClickDelete = () => {
        dispatch(deleteGoodCart(good));
    }

    return (
        <div className="goodCart">
            <div className="goodCart__checkbox">
                <input type="checkbox" onClick={onClickCheckbox} defaultChecked={checkbox} />
            </div>
            <div className="goodCart__img">
                <img src={url} alt={name} />
            </div>
            <div className="goodCart__description">
                <p>{`${name} ${brand} / ${modelNumber}`}</p>
                <p>{`price: ${price} BYN`}</p>
            </div>
            <div className="goodCart__number">
                <button className="btn btn-minus" onClick={onClickBtnMinus}>-</button>
                <span>{totalCount}</span>
                <button className="btn btn-plus" onClick={onClickBtnPlus}>+</button>
            </div>
            <div className="goodCart__total">
                <span>{`${totalPrice} BYN`}</span>
            </div>
            <div className="goodCart__delete">
                <button className="btn" onClick={onClickDelete}>X</button>
            </div>
        </div>
    )
}

export default GoodCart;