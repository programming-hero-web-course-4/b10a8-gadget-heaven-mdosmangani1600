import toast from "react-hot-toast"

const getAllProductsList =() =>{
  const all = localStorage.getItem('cart')
  
  if(all){
    const products = JSON.parse(all)
    console.log(products)
    return products
  }else{
    console.log([])
    return []
  }
}

const addToWishlist = product =>{
  const cart = getAllProductsList() ;
  const isExist = cart.find(item => item.product_id == product.product_id)
  if(isExist) return toast.error('This Item already exists!');
 
  cart.push(product)
  localStorage.setItem('cart',JSON.stringify(cart))
  toast.success('Successfully Added!');
}

export {addToWishlist,getAllProductsList}