import React from 'react';
import './Good.scss';

import { addGoodCart } from '../../redux/actions/goodsCart';
import { useSelector } from 'react-redux';
import { Context } from '../../context/context';
import { PlusCircleOutlined, MinusCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Good = ({ _id, modelNumber, name, brand, url, price, good }) => {

    const dispatch = React.useContext(Context);

    const totalCountGood = useSelector(({ goodsCart: { goods } }) => {
        return goods.hasOwnProperty(_id) && goods[_id].checkbox ? goods[_id].totalCountGood : 0
    });

    const onClickGood = () => dispatch(addGoodCart(good));

    return (
        <Card
            hoverable
            style={{ width: 200 }}
            cover={<img src={url} alt={name} />}
            actions={[
                <Link to="/cart">
                    <Badge size="small" count={totalCountGood} style={{ backgroundColor: '#52c41a' }}>
                        <ShoppingCartOutlined key="cart" />
                    </Badge>
                </Link>,
                <PlusCircleOutlined key="plus" onClick={onClickGood} />,
                <MinusCircleOutlined key="minus" />
            ]}
        >
            <Meta
                title={`${price.toFixed(2)} BYN`}
                description={`${name} ${brand} / ${modelNumber}`}
            />
        </Card>
        // <div className="good">
        //     <div className="good__img">
        //         <img src={url} alt={name} />
        //     </div>

        //     <div className="good__price">
        //         <div className="good__price_text">
        //             <span>{`${price} BYN`}</span>
        //         </div>
        //         <div className="good__price_btn">
        //             <button onClick={onClickGood}>{`+ add ${totalCountGood > 0 ? totalCountGood : ``}`}</button>
        //         </div>
        //     </div>
        //     <div className="good__description">
        //         <p>{`${name} ${brand} / ${modelNumber}`}</p>
        //     </div>
        // </div>
    )
}

export default Good;