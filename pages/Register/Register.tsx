import {FC} from "react";
import styles from './Register.module.scss';
import {Title} from "../../src/components/Title/Title.tsx";
import {Input} from "../../src/components/Input/Input.tsx";
import {Button} from "../../src/components/Button/Button.tsx";
import {Link} from "react-router-dom";

export const Register: FC = () => {
    return (
        <div className={styles['wrapper']}>
            <Title>Регистрация</Title>
            <form className={styles['form']}>
                <label htmlFor="email">Ваш Email</label>
                <Input placeholder={'Email'} id={'email'}/>
                <label htmlFor="pass">Ваш пароль</label>
                <Input placeholder={'Пароль'} id={'pass'} type={"password"}/>
                <label htmlFor="name">Ваше имя</label>
                <Input placeholder={'Имя'} id={'name'}/>
                <Button size={'large'}>Зарегестироваться</Button>
            </form>
            <div className={styles['footer']}>
                <span>Есть аккаунт?</span>
                <Link to={'/auth/login'}>Войти</Link>
            </div>

        </div>
    );
};
