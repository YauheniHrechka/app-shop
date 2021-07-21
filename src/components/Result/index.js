import React from 'react';
import './Result.scss';

import { Link } from 'react-router-dom';
import { Button, Result as AntResult } from 'antd';

const Result = ({ email }) => {
    return (
        <AntResult
            status="success"
            title={`Hello ${email}`}
            subTitle="Welcom to our web site"
            extra={[
                <Link to="/">
                    <Button>Getting Started</Button>
                </Link>
            ]}
        />
    )
}

export default Result;