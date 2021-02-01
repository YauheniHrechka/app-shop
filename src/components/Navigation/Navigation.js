import React from 'react';
import './Navigation.scss';

import { filterByCategory } from '../../redux/actions/filterGoods';

import { useSelector } from 'react-redux';

const Navigation = ({ dispatch }) => {

    const { activeCategory, navigation } = useSelector(({ navigation, filterGoods }) => {
        return {
            activeCategory: filterGoods,
            navigation
        }
    });

    const onClickItem = (category) => {
        dispatch(filterByCategory(category));
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

export default Navigation;