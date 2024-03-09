import {FC} from "react";
import styles from './Login.module.scss';
import {Link} from "react-router-dom";

export const Login: FC = () => {
    return (
        <div className={styles['wrapper']}>
            <form action="">
                <h2>Вход</h2>
                <label htmlFor='email'>Ваш Email</label>
                <input type="email" id={'email'} placeholder={'Email'}/>
                <label htmlFor='password'>Ваш пароль</label>
                <input type="password" id={'password'} placeholder={'Пароль'}/>
                <button>Вход</button>
                <span>Нет аккаунта?</span>
                <Link to={'/auth/register'}>Зарегестрироваться</Link>
            </form>
        </div>
    );
};