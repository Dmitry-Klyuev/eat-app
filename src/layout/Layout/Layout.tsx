import styles from './Layout.module.scss';
import {Menu} from "../Menu/Menu.tsx";
import avatar from '../../assets/Avatar.png'
import {Button} from "../../components/Button/Button.tsx";
import {Outlet, useNavigate} from "react-router-dom";

export const Layout = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    }

    return (
        <div className={styles.wrapper}>
        <aside className={styles.aside}>
            <div className={styles.user_info}>
                <img src={avatar} alt="avatar"/>
                <h2>Dmitry Klyuev</h2>
                <span>i6169696@gmail.com</span>
            </div>
            <div className={styles.menu_wrapper}>
                <Menu/>
            </div>
            <Button className={styles.exit} onClick={logout}>
                <img src={'/exit-button.svg'} alt="exit"/>
                Выход</Button>
        </aside>
        <main className={styles.main}>
            <Outlet/>
        </main>
        </div>
    );
};