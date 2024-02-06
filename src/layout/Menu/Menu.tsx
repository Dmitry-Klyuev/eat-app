import {Link, Outlet} from "react-router-dom";
import styles from './Menu.module.scss'



export const Menu = () => {
    return (
        <div className={styles.wrapper}>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
            <Outlet/>
        </div>
    );
};
