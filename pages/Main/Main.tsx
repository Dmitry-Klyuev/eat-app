import {FC} from 'react';
import {Title} from "../../src/components/Title/Title";
import {Input} from "../../src/components/Input/Input.tsx";
import styles from './Main.module.scss';

export const Main: FC = () => {
    return (
        <div className={styles.main}>
            <Title >
                Меню
            </Title>
            <div className={styles['input_wrapper']}>
                <Input placeholder={'Введите блюдо или состав'} className={styles.search}/>
                <img src={'/search-icon.svg'} alt="seracrh icon"/>
            </div>
        </div>
    );
};
