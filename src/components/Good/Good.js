import React from 'react';
import './Good.css';

const Good = ({ good: { modelNumber, name, brand, url, category, price } }) => {
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
                    <button>Buy</button>
                </div>
            </div>
            <div className="good__description">
                <p>{`${name} ${brand} / ${modelNumber}`}</p>
            </div>
        </div>
    )
}

export default Good;