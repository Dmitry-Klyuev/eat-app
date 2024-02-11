import styles from './Card.module.scss';
export const Card = () => {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_image}>
                <img src={'/image_1.png'} alt="card" />
                <div className={styles.price}>
                    300 <span>₽</span>
                </div>
                <div className={styles.rating}>
                    4.5 <img src={'/star_icon.svg'} alt="star" />
                </div>
                <div className={styles.buy}>
                    <img src={'/buy_icon.png'} alt="кнопка купить"/>
                </div>
            </div>
            <div className={styles.card_title}>
                Наслаждение
            </div>
            <div className={styles.card_description}>
                Салями, руккола, помидоры, оливки
            </div>
        </div>
    );
};