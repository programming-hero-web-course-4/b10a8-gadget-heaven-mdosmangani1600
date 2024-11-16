import toast from "react-hot-toast"

const getAllProducts =() =>{
  const all = localStorage.getItem('carts')
  
  if(all){
    const products = JSON.parse(all)
    console.log(products)
    return products
  }else{
    console.log([])
    return []
  }
}

const addToCart = product =>{
  const carts = getAllProducts() ;
  const isExist = carts.find(item => item.product_id == product.product_id)
  if(isExist) return toast.error('This Item already exists!');
 
  carts.push(product)
  localStorage.setItem('carts',JSON.stringify(carts))
  toast.success('Successfully Added!');
}

export {addToCart, getAllProducts}