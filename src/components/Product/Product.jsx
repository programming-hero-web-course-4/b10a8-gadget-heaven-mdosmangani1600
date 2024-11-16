import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {product_id, product_title, product_image, price} = product || {}
    return (
        <div>
            <div className="card bg-base-100 w-full border  shadow-xl">
           <figure className="p-5">
            <img
             src={product_image}
             alt="product"
              className="rounded-xl" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">Name: {product_title}</h2>
            <p>Price : <i class="fa-light fa-dollar-sign"></i>{price}</p>
           <div className="card-actions">
          <button className="border-2 border-violet-500 rounded-2xl p-2 font-semibold text-violet-600"><Link to={`/products/${product_id}`}>View Details</Link></button>
         </div>
         </div>
</div>
        </div>
    );
};

export default Product;