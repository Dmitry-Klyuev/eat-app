import {FC, useEffect, useState} from 'react';
import {Title} from "../../src/components/Title/Title";
import {Input} from "../../src/components/Input/Input.tsx";
import styles from './Main.module.scss';
import {Card} from "../../src/components/Card/Card.tsx";
import {Product} from "../../interfaces/product.interface.ts";
import {Api} from "../../utils/API.ts";
import axios from "axios";

export const Main: FC = () => {
    const [products, setProducts] = useState<Product[]>([])

    const getMenu = async (): Promise<void> => {
        try {
            const {data} = await axios.get<Product[]>(Api + '/products')
            setProducts(data)
        } catch (e) {
            console.log(e)
        }
    }
        useEffect(() => {
            getMenu()
        }, []);

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
                {products.map(el => (
                    <Card key={el.id}
                          id={el.id}
                          name={el.name}
                          ingredients={el.ingredients.join(',')}
                          price={el.price}
                          image={el.image}
                          rating={el.rating}
                    />
                ))}

            </>

        );
    };
