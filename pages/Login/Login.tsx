import {FC, SyntheticEvent, useState} from "react";
import styles from './Login.module.scss';
import {Link} from "react-router-dom";
import {Button} from "../../src/components/Button/Button.tsx";
import {Input} from "../../src/components/Input/Input.tsx";

export const Login: FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault()
        const formData = {email, password}
        console.log(formData);
    }

    return (
        <div className={styles['wrapper']}>
            <form action="">
                <h2>Вход</h2>
                <label htmlFor='email'>Ваш Email</label>
                <Input type="email"
                       id={'email'}
                       placeholder={'Email'}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Ваш пароль</label>
                <Input type="password"
                       id={'password'}
                       placeholder={'Пароль'}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <Button size={'large'} onClick={submitForm}>Вход</Button>
                <span>Нет аккаунта?</span>
                <Link to={'/auth/register'}>Зарегестрироваться</Link>
            </form>
        </div>
    );
};