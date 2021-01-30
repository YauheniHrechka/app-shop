import React from 'react';
import './GoodCart.scss';

import { connect } from 'react-redux';

const GoodCart = ({ good, number, checkbox, clickCheckbox, addGood, minusGood, deleteGood }) => {

    const { modelNumber, name, brand, url, price } = good;

    const onClickCheckbox = (e) => {
        clickCheckbox(good, e.target.checked);
    }

    const onClickBtnPlus = () => {
        addGood(good);
    }

    const onClickBtnMinus = () => {
        if (number === 1) return;
        minusGood(good);
    }

    const onClickDelete = () => {
        deleteGood(good);
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
                <span>{number}</span>
                <button className="btn btn-plus" onClick={onClickBtnPlus}>+</button>
            </div>
            <div className="goodCart__total">
                <span>{`${(number * price).toFixed(2)} BYN`}</span>
            </div>
            <div className="goodCart__delete">
                <button className="btn" onClick={onClickDelete}>X</button>
            </div>
        </div>
    )
}

export default connect(
    state => ({}),
    dispatch => ({
        clickCheckbox: (good, checkbox) => (
            dispatch({
                type: 'CLICK_CHECKBOX',
                payload: {
                    good,
                    checkbox
                }
            })
        ),
        addGood: good => {
            dispatch({
                type: 'ADD_GOOD_CART',
                payload: {
                    good,
                    number: 1
                }
            })
        },
        minusGood: good => {
            dispatch({
                type: 'MINUS_GOOD_CART',
                payload: {
                    good,
                    number: 1
                }
            })
        },
        deleteGood: good => (
            dispatch({
                type: 'DELETE_GOOD_CART',
                payload: good
            })
        )
    })
)(GoodCart);