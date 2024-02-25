import styles from './Card.module.scss';
import {FC} from "react";
import {Link} from "react-router-dom";
import {iCardProps} from "./Card.props.ts";

export const Card: FC<iCardProps> = ({id, name, ingredients, price, image, rating}) => {
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
                    <div className={styles.buy}>
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