import React from 'react';
import './Good.scss';

import { connect } from 'react-redux';

const Good = ({ good, addGood }) => {

    const { modelNumber, name, brand, url, price } = good;

    const onClickGood = () => {
        addGood(good);
    }

    return (
        <div className="good">
            <div className="good__img">
                <img src={url} alt={name} />
            </div>

            <div className="good__price">
                <div className="good__price_text">
                    <span>{`${price} BYN`}</span>
                </div>
                <div className="good__price_btn">
                    <button onClick={onClickGood}>Buy</button>
                </div>
            </div>
            <div className="good__description">
                <p>{`${name} ${brand} / ${modelNumber}`}</p>
            </div>
        </div>
    )
}

export default connect(
    state => ({}),
    dispatch => ({
        addGood: good => {
            dispatch({
                type: 'ADD_GOOD_CART',
                payload: {
                    good,
                    number: 1,
                    checkbox: true
                }
            })
        }
    })
)(Good);