import React from 'react';
import { Route } from 'react-router-dom';
import './Content.scss';

import { pageHome, pageCart, pageLogin, pageRegistration } from '../../pages';
import { Layout } from 'antd';

const { Content: AntContent } = Layout;

const Content = () => {
    return (
        <AntContent>
            <Route exact path="/" component={pageHome} />
            <Route exact path="/cart" component={pageCart} />
            <Route exact path="/login" component={pageLogin} />
            <Route exact path="/registration" component={pageRegistration} />
        </AntContent>
    )
}

export default Content;