import React from 'react';
import './Navigation.css';

import { connect } from 'react-redux';

const Navigation = ({ navigation }) => {

    const [active, setActive] = React.useState('01');

    const onClickItem = (e) => {
        setActive(e.target.getAttribute('data-item'));
    }

    return (
        <nav className="navigation">
            <ul>
                {navigation.map(({ id, name }) =>
                    <li
                        key={id}
                        data-item={id}
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
    dispatch => ({})
)(Navigation);