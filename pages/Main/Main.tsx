import {FC, useEffect, useState} from 'react';
import {Title} from "../../src/components/Title/Title";
import {Input} from "../../src/components/Input/Input.tsx";
import styles from './Main.module.scss';
import {Card} from "../../src/components/Card/Card.tsx";
import {Product} from "../../interfaces/product.interface.ts";
import {Api} from "../../utils/API.ts";
import axios, {AxiosError} from "axios";

export const Main: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    const getMenu = async (): Promise<void> => {
        try {
            setLoading(true);
            const {data} = await axios.get<Product[]>(Api + '/products');
            setProducts(data);
        } catch (e) {
            console.log(e);
            if(e instanceof AxiosError) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getMenu();
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
            <div className={styles['cards_wrapper']}>
                {loading && <h2>Loading...</h2> }
                {!loading && products.map(el => (
                    <Card key={el.id}
                          id={el.id}
                          name={el.name}
                          ingredients={el.ingredients.join(',')}
                          price={el.price}
                          image={el.image}
                          rating={el.rating}
                    />
                ))
                }
                {error && <h2>{error}</h2>}
            </div>


        </>

    );
};

export default Main