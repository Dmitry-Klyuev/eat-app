import {FC, SyntheticEvent} from "react";
import styles from './Register.module.scss';
import {Title} from "../../src/components/Title/Title.tsx";
import {Input} from "../../src/components/Input/Input.tsx";
import {Button} from "../../src/components/Button/Button.tsx";
import {Link} from "react-router-dom";

export const Register: FC = () => {

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            email: { value: string }
            password: { value: string }
            name: { value: string }
        }
        const name = target.name.value
        const email = target.name.value
        const password = target.password.value
        console.log(name + email + password)
    }

    console.log()
    return (
        <div className={styles['wrapper']}>
            <Title>Регистрация</Title>
            <form className={styles['form']}>
                <label htmlFor="email">Ваш Email</label>
                <Input placeholder={'Email'} id={'email'} name={'email'}/>
                <label htmlFor="password">Ваш пароль</label>
                <Input placeholder={'Пароль'} id={'password'} type={'password'} name={'password'}/>
                <label htmlFor="name">Ваше имя</label>
                <Input placeholder={'Имя'} id={'name'} name={'name'}/>
                <Button size={'large'} onClick={onSubmit}>Зарегестироваться</Button>
            </form>
            <div className={styles['footer']}>
                <span>Есть аккаунт?</span>
                <Link to={'/auth/login'}>Войти</Link>
            </div>

        </div>
    );
};
