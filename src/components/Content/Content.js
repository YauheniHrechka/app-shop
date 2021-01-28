import React from 'react';
import './Content.css';

import { connect } from 'react-redux';

import Good from '../Good/Good';

const Content = ({ goods, setGoods }) => {

    React.useEffect(() => {

        fetch('http://localhost:3000/db.json')
            .then(response => response.json())
            .then(response => setGoods(response.goods))

    }, []);

    return (
        <div className="container">
            {goods.map(good =>
                <Good
                    key={good.id}
                    good={good}
                />)}
        </div>
    )
}

export default connect(
    state => ({
        goods: state.goods.filter(good => good.category.includes(state.filterGoods))
    }),
    dispatch => ({
        setGoods: goods => {
            dispatch({
                type: 'SET_GOODS',
                payload: goods
            })
        }
    })
)(Content);