import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();
    
    const storedCart = getShoppingCart()
    let savedCart= []
    for (const id in storedCart){
        const quantity = storedCart[id]
        const addedProduct = products.find( pd=> pd.id === id)
        if (addedProduct){
            addedProduct.quantity= quantity
            savedCart.push(addedProduct)

        }
    }
    return savedCart;
    

}
export default cartProductsLoader;