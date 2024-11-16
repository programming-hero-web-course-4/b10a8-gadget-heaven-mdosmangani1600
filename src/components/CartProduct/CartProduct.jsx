

const CartProduct = ({product}) => {
    const { product_title, product_image,description, price} = product || {}
    return (
        <div className="flex justify-between border p-5 rounded-2xl items-center">
            <div className="flex space-x-10 items-center">
            <img className="w-32 h-32 rounded-2xl" src={product_image} alt="" />
            <div>
                <h2 className="font-semibold text-2xl">{product_title}</h2>
                <p>{description}</p>
                <p className="font-semibold text-xl">Price : <i class="fa-light fa-dollar-sign"></i>{price}</p>
            </div>
            </div>
            <button><i class="fa-solid fa-delete-left text-red-500"></i></button>
        </div>
    );
};

export default CartProduct;