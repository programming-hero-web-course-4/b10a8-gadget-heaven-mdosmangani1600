import { NavLink, useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { addToCart} from "../utility/addToDb";
import { addToWishlist } from "../utility/addToWishlist";




const ProductDetails = () => {
    const {product_id} = useParams();
    const data = useLoaderData();

    const handleAddToCart =(product) =>{
      addToCart(product)
    }
    const handleAddToWishList =(product) =>{
      addToWishlist(product)
    }
    
    const product = data.find(product => product.product_id === product_id)
    
    const {product_title,product_image, price, description,specification, rating} =product;
    return (
        <div>
            <NavBar></NavBar>
            <div className="text-center bg-purple-500 pb-80 text-white rounded-xl p-5">
            <h3 className="font-bold text-3xl">Product Details</h3>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="card card-side bg-base-100 shadow-xl p-5 w-10/12 mx-ac
             -mt-72 mx-auto">
  <figure>
    <img className=" w-96 rounded-2xl"
      src={product_image}
      alt="product" />
  </figure>
  <div className="card-body">
    <h2 className=" font-semibold text-3xl">{product_title}</h2>
    <p className=" font-semibold text-xl">Price : <i class="fa-light fa-dollar-sign"></i>{price}</p>
    <button className="border w-20 rounded-2xl border-green-400 bg-green-100 text-green-500">In Stock</button>
    <p>{description}</p>
    <div>
        <h2 className="font-bold text-lg">Specification:</h2>
        {
            specification.map(item => <ol className="list-decimal pl-7"><li>{item}</li></ol>)
        }
    </div>
    <h2 className="font-bold text-lg">Rating:{rating} </h2>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-200" />
</div>
    <div className=" space-x-5">
      <button onClick={() =>handleAddToCart(product)} className="border p-2 rounded-2xl bg-purple-500 text-white">Add to Card <i class="fa-solid fa-cart-shopping"></i></button>
      <button onClick={() =>handleAddToWishList(product)}  className=" p-2 rounded-full border"><NavLink><i class="fa-regular w-7 fa-heart"></i></NavLink></button>
    </div>
  </div>

</div>
        </div>
    );
};

export default ProductDetails;