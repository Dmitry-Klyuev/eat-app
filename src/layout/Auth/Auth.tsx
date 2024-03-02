import {FC} from 'react';
import styles from './Auth.module.scss';
import {Outlet} from "react-router-dom";

export const Auth: FC = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['left']}>
                <img src="/auth_logo.svg" alt="логотип авторизации"/>
            </div>
            <div className={styles['right']}>
                {<Outlet/>}
            </div>
        </div>
    );
};
