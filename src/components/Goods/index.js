import React from 'react';
import './Goods.scss';

import { useSelector } from 'react-redux';

import { Good } from '../';

const Goods = () => {

    const goods = useSelector(({ goods, filterGoods }) => {
        return goods.filter(good => good.categoryId.includes(filterGoods))
    });

    return (
        <div className="container__goods">
            {goods && goods.map(good =>
                <Good
                    key={good._id}
                    good={good}
                />)}
        </div>
    )
}

export default Goods;