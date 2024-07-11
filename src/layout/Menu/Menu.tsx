import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";



export const Menu = () => {
    const items = useSelector((store: RootState) => store.count.items)
    return (
        <div className={styles.wrapper}>
            <NavLink to="/" className={({isActive}) => (isActive? styles.active : '')}>
                <img src={'/menu-icon.svg'} alt="Icon menu"/>
                Меню</NavLink>
            <NavLink to="/cart" className={({isActive}) => (isActive? styles.active : '')}>
                <img src={'/cart-icon.svg'} alt=""/>
                Корзина</NavLink>
            {items.reduce((acc,item) => acc+= item.count ,0)}
        </div>
    );
};
