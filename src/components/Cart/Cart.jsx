import { useEffect, useState } from "react";
import { getAllProducts } from "../utility/addToDb";

import CartProduct from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {

    const [products, setProducts] = useState([])
    useEffect( () =>{
        const carts = getAllProducts();
        setProducts(carts);
    },[])

    const handleSort = () =>{
        const sortedCartList = [...products].sort((a,b) =>b.price - a.price);
        setProducts(sortedCartList)

    }
    return (
        <div>
            <div className="flex justify-between m-5">
                <h4 className="font-bold text-xl">Cart</h4>
                <div className="flex gap-5">
                <h4 className="font-bold text-xl">Total Cost:</h4>

<button onClick={handleSort} className=" border p-2 text-purple-300 border-purple-400 rounded-2xl font-semibold"><Link>Sort by Price</Link></button>
<button className="border p-2 bg-purple-600 text-white rounded-2xl"><Link to="/">Purchase</Link></button>
                </div>
            </div>
            <div className=" overflow-hidden space-y-5">
           {
            products.map(product =>(<CartProduct  key={product.product_id} product={product}></CartProduct>))
           }
        </div>
        </div>
    );
};

export default Cart;