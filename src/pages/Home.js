import React from 'react';

import Navigation from '../components/Navigation/Navigation';
import Goods from '../components/Goods/Goods';
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Navigation dispatch={dispatch} />
            <Goods dispatch={dispatch} />
        </>
    )
}

export default Home;