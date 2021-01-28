import React from 'react';
import './Navigation.css';

import { connect } from 'react-redux';

const Navigation = ({ navigation, filterByCategory }) => {

    const [active, setActive] = React.useState('01');

    const onClickItem = (e) => {
        setActive(e.target.getAttribute('data-id'));
        filterByCategory(e.target.getAttribute('data-category'));
    }

    return (
        <nav className="navigation">
            <ul>
                {navigation.map(({ id, name, category }) =>
                    <li
                        key={id}
                        data-id={id}
                        data-category={category}
                        className={`navigation-item ${active === id ? `active` : ``}`}
                        onClick={onClickItem}
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
        navigation: state.navigation
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