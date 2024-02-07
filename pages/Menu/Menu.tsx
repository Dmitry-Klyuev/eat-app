import {FC} from 'react';
import {Title} from "../../src/components/Title/Title";
import {Input} from "../../src/components/Input/Input.tsx";
import styles from './Menu.module.scss';

export const Menu: FC = () => {
    return (
        <div>
            <Title >
                Меню
            </Title>
            <div className={styles['input_wrapper']}>
                <Input />
                <img src={'/search-icon.svg'} alt="seracrh icon"/>
            </div>
        </div>
    );
};
