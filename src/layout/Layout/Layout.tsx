import styles from './Layout.module.scss';
import {Menu} from "../Menu/Menu.tsx";
import avatar from '../../assets/Avatar.png'
import {Button} from "../../components/Button/Button.tsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {deleteToken, loadUserInfo, userInfo} from "../../../store/user.slice.ts";
import {useEffect} from "react";

export const Layout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const userInfo = useSelector<RootState, userInfo | undefined>(state => state.user.userInfo)
    if (!userInfo){
        console.log('Not user info')
    }
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(deleteToken(null))
        navigate('/auth/login');
    }
    useEffect(()=>{
        dispatch(loadUserInfo())
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <aside className={styles.aside}>
                <div className={styles.user_info}>
                    <img src={avatar} alt="avatar"/>
                    <h2>{userInfo?.name}</h2>
                    <span>{userInfo?.email} </span>
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