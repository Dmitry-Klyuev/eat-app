import {FC, useEffect} from "react";
import styles from './Register.module.scss';
import {Title} from "../../src/components/Title/Title.tsx";
import {Button} from "../../src/components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/user.slice.ts";
import {RootState} from "../../store/store.ts";

interface Inputs {
    name: string
    email: string
    password: string
}

export const Register: FC = () => {
    const {register, handleSubmit} = useForm<Inputs>();
    const token = useSelector<RootState, string | null>(state => state.user.token)
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const {email, name, password} = data
        console.log(data)
        if (email && name && password) {
            // @ts-ignore
            dispatch(registerUser({email, name, password}))
        }


    }
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])
    return (
        <div className={styles['wrapper']}>
            <Title>Регистрация</Title>
            <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Ваш Email</label>
                <input placeholder={'Email'} id={'email'} {...register('email')}/>
                <label htmlFor="password">Ваш пароль</label>
                <input placeholder={'Пароль'} id={'password'} type={'password'} {...register('password')}/>
                <label htmlFor="name">Ваше имя</label>
                <input placeholder={'Имя'} id={'name'} {...register('name')}/>
                <Button size={'large'} type={'submit'}>Зарегестироваться</Button>
            </form>
            <div className={styles['footer']}>
                <span>Есть аккаунт?</span>
                <Link to={'/auth/login'}>Войти</Link>
            </div>

        </div>
    );
};
