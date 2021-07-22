import React from 'react';
import './Footer.scss';

import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter>
            <span>Your footer</span>
        </AntFooter>
    )
}

export default Footer;