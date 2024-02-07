import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'



export const Menu = () => {
    return (
        <div className={styles.wrapper}>
            <NavLink to="/" className={({isActive}) => (isActive? styles.active : '')}>
                <img src={'/menu-icon.svg'} alt="Icon menu"/>
                Меню</NavLink>
            <NavLink to="/cart" className={({isActive}) => (isActive? styles.active : '')}>
                <img src={'/cart-icon.svg'} alt=""/>
                Корзина</NavLink>

        </div>
    );
};
