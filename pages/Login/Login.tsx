import {FC, useState} from "react";
import styles from './Login.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import axios, {AxiosError} from "axios";
import {Api} from "../../utils/API.ts";
import {LoginInterface} from "../../interfaces/Login.interface.ts";
import {Button} from "../../src/components/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {setToken} from "../../store/user.slice.ts";

interface login {
    email: string
    password: string
}

export const Login: FC = () => {
    const [error, setError] = useState<string | null>(null)
    const {register, handleSubmit} = useForm<login>()
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const sendLogin = async (submitData: login) => {
        try {
            setError(null)
            const {email, password} = submitData;
            const {data} = await axios.post<LoginInterface>(`${Api}/auth/login`, {
                email,
                password
            })
            if (!data) {
                throw new Error('Ошибка получения токена')
            }
            // localStorage.setItem('token', data.access_token)
            dispatch(setToken(data.access_token))
            navigate('/')
        } catch (e) {
            if (e instanceof AxiosError) {
                setError(e.response?.data.message);
                setTimeout(() => {
                    setError(null)
                }, 3000)
            }
        }

    }
    const submit: SubmitHandler<login> = submitData => sendLogin(submitData)


    return (
        <div className={styles['wrapper']}>
            {error && <div className={styles['error']}>{error}</div>}
            <form onSubmit={handleSubmit(submit)}>
                <h2>Вход</h2>
                <label htmlFor='email'>Ваш Email</label>
                <input type="email" id={'email'} placeholder={'Email'} {...register('email')}/>
                <label htmlFor='password'>Ваш пароль</label>
                <input type="password" id={'password'} placeholder={'Пароль'} {...register('password')}/>
                <Button size={'large'}>Вход</Button>
                <span>Нет аккаунта?</span>
                <Link to={'/auth/register'}>Зарегестрироваться</Link>
            </form>
        </div>
    );
};