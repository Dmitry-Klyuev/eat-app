import styles from './Card.module.scss';
import React, {FC} from "react";
import {Link} from "react-router-dom";
import {iCardProps} from "./Card.props.ts";
import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/cart.slice.ts";

export const Card: FC<iCardProps> = ({id, name, ingredients, price, image, rating}) => {
    const dispatch = useDispatch()

    const addToCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.preventDefault()
        console.log('click')
        dispatch(cartActions.addItem(id))
    }

    return (
        <Link to={`product/${id}`} style={{'textDecoration': 'none'}}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_image}>
                    <img src={image} alt="card"/>
                    <div className={styles.price}>
                        {price} <span>₽</span>
                    </div>
                    <div className={styles.rating}>
                        {rating} <img src={'/star_icon.svg'} alt="star"/>
                    </div>
                    <div className={styles.buy} onClick={addToCart}>
                        <img src={'/buy_icon.png'} alt="кнопка купить"/>
                    </div>
                </div>
                <div className={styles.card_title}>
                    {name}
                </div>
                <div className={styles.card_description}>
                    {ingredients}
                </div>
            </div>
        </Link>
    );
};