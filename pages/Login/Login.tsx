import {FC, useEffect} from "react";
import styles from './Login.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "../../src/components/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {loadToken, setError} from "../../store/user.slice.ts";

interface login {
    email: string
    password: string
}

export const Login: FC = () => {
    const {register, handleSubmit} = useForm<login>()
    const token = useSelector<RootState, string | null>(state => state.user.token)
    const error = useSelector<RootState, string | null>(state => state.user.error)
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])
    const sendLogin = async (submitData: login) => {
        setTimeout(() => {
            dispatch(setError(null))
        }, 3000)

        const {email, password} = submitData;
        dispatch(loadToken({email, password}))
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