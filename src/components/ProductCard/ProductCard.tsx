import {useParams} from "react-router-dom";

export const ProductCard = () => {
    const {id} = useParams()
    return (
        <div>
            ProductCard : {id}
        </div>
    );
};