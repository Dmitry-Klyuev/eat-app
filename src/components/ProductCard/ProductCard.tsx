import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {Api} from "../../../utils/API.ts";
import {Product} from "../../../interfaces/product.interface.ts";
import styles from "./ProductCard.module.scss";
import {Button} from "../Button/Button.tsx";

export const ProductCard = () => {
    const {id} = useParams()
    const [product, SetProduct] = useState<Product | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    const getProduct = async (): Promise<void> => {
        try {
            setLoading(true)
            const get = await axios.get(`${Api}/products/${id}`);
            if (get) {
                SetProduct(get.data)
            }
        } catch (e) {
            console.log(e);
            if (e instanceof AxiosError) {
                setError(e.message)
            }
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        getProduct()
    }, [id]);
    // id:2
    // image:"https://cdn-bucket.hb.ru-msk.vkcs.cloud/purple-images/demo/food/food2.png"
    // ingredients:(3) ['острый перец', 'лепёшка', 'фарш']
    // name:"Такос"
    // price:280
    // rating:4.8
    const clickButton = () => {
        navigate("/");
    }

    return (
        <div>
            {error && (
                <h2>{error}</h2>
            )}
            {loading && <h2>Loading...</h2>}

            {!error && product && (
                <div>
                    <div className={styles['headerBar']}>
                        <div className={styles['left-header']}>
                            <div className={styles['link']}
                            onClick={clickButton}
                            >
                                {'<'}
                            </div>
                            <h2>{product.name}</h2>
                        </div>
                        <Button>
                            В корзину
                        </Button>
                    </div>
                    <div className={styles['content']}>
                        <div className={styles['image']}>
                            <img src={product.image} alt="eat"/>
                        </div>
                        <div className={styles['price']}>
                            <div className={styles['price-text']}>
                                <div>Цена</div>
                                <div>{product.price} ₽</div>
                            </div>
                            <div>
                                Рейтинг
                            </div>
                            <div>Состав:</div>
                            <div>
                                <ul>
                                    {product.ingredients.map(el => <li key={el}>{el}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};
export default ProductCard