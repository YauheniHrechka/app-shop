import React from 'react';
import './Good.scss';

import { addGoodCart } from '../../redux/actions/goodsCart';
import { useSelector } from 'react-redux';
import { Context } from '../../context/context';

const Good = ({ good }) => {

    const dispatch = React.useContext(Context);
    const { _id, modelNumber, name, brand, url, price } = good;

    const totalCountGood = useSelector(({ goodsCart: { goods } }) => {
        return goods.hasOwnProperty(_id) && goods[_id].checkbox ? goods[_id].totalCountGood : 0
    });

    const onClickGood = () => dispatch(addGoodCart(good));

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
                    <button onClick={onClickGood}>{`+ add ${totalCountGood > 0 ? totalCountGood : ``}`}</button>
                </div>
            </div>
            <div className="good__description">
                <p>{`${name} ${brand} / ${modelNumber}`}</p>
            </div>
        </div>
    )
}

export default Good;