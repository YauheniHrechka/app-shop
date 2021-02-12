import React from 'react';
import './Goods.scss';

import { useSelector } from 'react-redux';

import Good from '../Good/Good';

const Goods = () => {

    const goods = useSelector(({ goods, filterGoods }) => {
        return goods.filter(good => good.category.includes(filterGoods))
    });

    return (
        <div className="container__goods">
            {goods.map(good =>
                <Good
                    key={good.id}
                    good={good}
                />)}
        </div>
    )
}

export default Goods;