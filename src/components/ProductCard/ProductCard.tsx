import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {Api} from "../../../utils/API.ts";
import {Product} from "../../../interfaces/product.interface.ts";

export const ProductCard = () => {
    const {id} = useParams()
    const [product, SetProduct] = useState<Product | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

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
    return (
        <div>
            {error && (
                <h2>{error}</h2>
            )}
            {loading && <h2>Loading...</h2>}

            {!error && product && (
                <div>
                    {product.name}
                </div>
            )}
        </div>
    );
};
export default ProductCard