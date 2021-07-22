import React from 'react';
import './GoodCart.scss';

import { clickCheckbox, addGoodCart, minusGoodCart, deleteGoodCart } from '../../redux/actions/goodsCart';
import { Context } from '../../context/context';
import { CheckCircleTwoTone, QuestionCircleTwoTone, CloseCircleTwoTone, PlusCircleOutlined, MinusCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Card } from 'antd';

const { Meta } = Card;

const GoodCart = ({ good: { modelNumber, name, brand, url, price }, good, totalCount, totalPrice, checkbox }) => {

    const dispatch = React.useContext(Context);

    const onClickCheckbox = (e) => dispatch(clickCheckbox(good, !checkbox));

    const onClickBtnPlus = () => dispatch(addGoodCart(good));

    const onClickBtnMinus = () => {
        if (totalCount === 1) return;
        dispatch(minusGoodCart(good));
    }

    const onClickDelete = () => dispatch(deleteGoodCart(good));

    return (
        <Card
            hoverable
            extra={<>
                {checkbox ?
                    <CheckCircleTwoTone onClick={onClickCheckbox} twoToneColor="#52c41a" /> :
                    <QuestionCircleTwoTone onClick={onClickCheckbox} />
                }
                <CloseCircleTwoTone key="delete" twoToneColor="#f5222d" onClick={onClickDelete} />
            </>}
            cover={<img src={url} alt={name} />}
            actions={[
                <PlusCircleOutlined key="plus" onClick={onClickBtnPlus} />,
                <Badge size="small" count={totalCount} style={{ backgroundColor: '#52c41a' }}>
                    <ShoppingCartOutlined key="cart" />
                </Badge>,
                <MinusCircleOutlined key="minus" onClick={onClickBtnMinus} />
            ]}
        >
            <Meta
                title={`${price.toFixed(2)} BYN`}
                description={`${name} ${brand} / ${modelNumber}`}
            />
        </Card>
        // <div className="goodCart">
        //     <div className="goodCart__checkbox">
        //         <input type="checkbox" onClick={onClickCheckbox} defaultChecked={checkbox} />
        //     </div>
        //     <div className="goodCart__img">
        //         <img src={url} alt={name} />
        //     </div>
        //     <div className="goodCart__description">
        //         <p>{`${name} ${brand} / ${modelNumber}`}</p>
        //         <p>{`price: ${price} BYN`}</p>
        //     </div>
        //     <div className="goodCart__number">
        //         <button className="btn btn-minus" onClick={onClickBtnMinus}>-</button>
        //         <span>{totalCount}</span>
        //         <button className="btn btn-plus" onClick={onClickBtnPlus}>+</button>
        //     </div>
        //     <div className="goodCart__total">
        //         <span>{`${totalPrice} BYN`}</span>
        //     </div>
        //     <div className="goodCart__delete">
        //         <button className="btn" onClick={onClickDelete}>X</button>
        //     </div>
        // </div>
    )
}

export default GoodCart;