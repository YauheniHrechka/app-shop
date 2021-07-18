import React from 'react';
import './Navigation.scss';

import { filterByCategory } from '../../redux/actions/filterGoods';

import { useSelector } from 'react-redux';
import { Context } from '../../context/context';

const Navigation = () => {

    const dispatch = React.useContext(Context);

    const { activeCategory, navigation } = useSelector(({ navigation, filterGoods }) => {
        return {
            activeCategory: filterGoods,
            navigation
        }
    });

    const onClickItem = (categoryId) => dispatch(filterByCategory(categoryId));

    return (
        <nav className="navigation">
            <ul>
                {navigation && navigation.map(({ _id, name }) =>
                    <li
                        key={_id}
                        className={`navigation-item ${activeCategory === _id ? `active` : ``}`}
                        onClick={() => onClickItem(name === "All" ? "" : _id)}
                    >
                        {name}
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation;