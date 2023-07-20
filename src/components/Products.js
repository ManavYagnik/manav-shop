import { addToCart, emptyCart, remove_from_cart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList, productSearchByCategory } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Myloader from './Myloader';
import Productcontainer from './Productcontainer';

function Products() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);
  console.log("one item",data[1]);
  const Loading = useSelector((state)=> state.isloading.loading)

  useEffect(() => { dispatch(productList()) }, [])

  const cartData = useSelector((state) => state.cartData);
 

  const mergeCartItems = (data) =>{
   
      const mergedItems =[];

      for(let item of data){
        const existingItem = mergedItems.find(
          (mergedItems) => mergedItems.id === item.id
          );

        if(existingItem) {
          existingItem.quantity += 1;
        }else{
          mergedItems.push({
            id: item.id,
            name:item.name,
            price:item.price,
            img:item.img,
            quantity: 1,
            photo:item.photo
          });
        }
          
    }
    for (let item of mergedItems) {
      for (let item of mergedItems) {
        const eachItemPrice = item.price;
        item.totalprice = item.quantity * eachItemPrice;
      }
      
    }
    return mergedItems;


};

  const mergedCartData = mergeCartItems(cartData);



  return (
    <div className='product-page'>
      <div className="products-dropdown">
       
      <button  className='product-page-btn'onClick={() => dispatch(productList())}>All Products</button>
          <button className='product-page-btn' onClick={() => dispatch(productSearchByCategory('oil'))}>Edible Oils</button>
          <button  className='product-page-btn'onClick={() => dispatch(productSearchByCategory('Foods'))}>Foods</button>
          <button className='product-page-btn'onClick={() => dispatch(productSearchByCategory('ReadyToCook'))}>Ready to Cook</button>
        
   
      </div>
       { Loading && < Myloader />}

      {/* <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> */}
      {/* <div className='product-container'>
        {
          data.map((item) => <div className='product-item'>
            <img src={item.photo} alt="" width={'150px'} height={'170px'} />
            <div className='individual-product'>  {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button className="btnAddProcuct" onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button className="btnRemoveProcuct" onClick={() => dispatch(remove_from_cart(item.id))}>Remove </button>

            </div>
          </div>)
        }
      </div> */}

      { !Loading && <Productcontainer />}
    </div>
  );

}
export default Products;
