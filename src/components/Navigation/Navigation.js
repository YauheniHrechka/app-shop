import React from 'react';
import './Navigation.scss';

import { connect } from 'react-redux';

const Navigation = ({ navigation, filterByCategory, activeCategory }) => {

    const onClickItem = (category) => {
        filterByCategory(category);
    }

    return (
        <nav className="navigation">
            <ul>
                {navigation.map(({ id, name, category }) =>
                    <li
                        key={id}
                        className={`navigation-item ${activeCategory === category ? `active` : ``}`}
                        onClick={() => onClickItem(category)}
                    >
                        {name}
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default connect(
    state => ({
        navigation: state.navigation,
        activeCategory: state.filterGoods
    }),
    dispatch => ({
        filterByCategory: category => {
            dispatch({
                type: 'FILTER_BY_CATEGORY',
                payload: category
            })
        }
    })
)(Navigation);