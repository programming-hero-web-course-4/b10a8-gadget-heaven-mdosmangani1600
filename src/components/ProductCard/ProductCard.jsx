import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";


const ProductCard = () => {
    const products = useLoaderData();
    const {category} = useParams();
    const [product, setProduct] = useState([]);
    useEffect( () => {
        if(category){
            const filteredByCategory = [...products].filter(
                product => product.category === category )
                setProduct(filteredByCategory);
        }
        else{
            setProduct(products)
        }
    },[category, products])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden lg:grid-cols-3">
           {
            product.map(product =>(<Product key={product.product_id} product={product}></Product>))
           }
        </div>
    );
};

export default ProductCard;