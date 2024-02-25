import {FC} from 'react';
import {Title} from "../../src/components/Title/Title";
import {Input} from "../../src/components/Input/Input.tsx";
import styles from './Main.module.scss';
import {Card} from "../../src/components/Card/Card.tsx";

export const Main: FC = () => {
    return (
        <>
            <div className={styles.main}>
                <Title>
                    Меню
                </Title>
                <div className={styles['input_wrapper']}>
                    <Input placeholder={'Введите блюдо или состав'} className={styles.search}/>
                    <img src={'/search-icon.svg'} alt="seracrh icon"/>
                </div>

            </div>
            <Card id={1}
            title={'Наслаждение'}
                  description={'Салями, руккола, помидоры, оливки'}
                  price={300}
                  image={'/image_1.png'}
                  rating={4.5}
            />
        </>

    );
};
