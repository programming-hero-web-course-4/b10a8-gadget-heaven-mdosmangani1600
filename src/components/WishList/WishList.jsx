import { useEffect, useState } from "react";
import { getAllProductsList } from "../utility/addToWishlist";
import CartProduct from "../CartProduct/CartProduct";

const WishList = () => {
    const [productsList, setProductsList] = useState([])
    useEffect( () =>{
        const cart = getAllProductsList();
        setProductsList(cart);
    },[])
    return (
        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-5">WishList</h3>
            <div className=" gap-5 overflow-hidden space-y-5">
           {
            productsList.map(product =>(<CartProduct key={product.product_id} product={product}></CartProduct>))
           }
        </div>
        </div>
    );
};

export default WishList;