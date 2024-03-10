import {FC} from "react";
import styles from './Login.module.scss';
import {Link} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

interface login {
    email: string
    password: string
}
export const Login: FC = () => {
    const {register, handleSubmit} = useForm<login>()
    const submit: SubmitHandler<login> = data => console.log(data)

    return (
        <div className={styles['wrapper']}>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Вход</h2>
                <label htmlFor='email'>Ваш Email</label>
                <input type="email" id={'email'} placeholder={'Email'} {...register('email')}/>
                <label htmlFor='password'>Ваш пароль</label>
                <input type="password" id={'password'} placeholder={'Пароль'} {...register('password')}/>
                <button>Вход</button>
                <span>Нет аккаунта?</span>
                <Link to={'/auth/register'}>Зарегестрироваться</Link>
            </form>
        </div>
    );
};