// import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart,remove_from_cart } from "../redux/action";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';





const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  



  // console.warn(amount)
  
  
  
  
 

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
            color:item.color,
            price:item.price,
            brand:item.brand,
            category:item.category,

           
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
  
  let amount = mergedCartData.length && mergedCartData.map(item => item.totalprice).reduce((prev, next) => prev + next)
  
  return (
    <div  className="cartbody">
      <div className="cartbody-header">
        
        <span ><button className="cart-body-header-text-btn">Your Shopping Cart</button></span>
         
     
       <span>
       <span> <Link to="/products" ><button className="btnAddProcuct-1">Go to Products Page</button></Link></span>
        <span className=""><button className="btnRemoveProcuct-1" onClick={() => dispatch(emptyCart())} >EMPTY_CART</button></span>
        </span>
     
      </div>
      <div className="cart-page-container">
        {/* <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Item</td>
            <td>Quantity</td>
            <td>Remove</td>
            
          </tr>
          {
            mergedCartData.map((item) => <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.totalprice}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            
              
              <td><img src={item.photo} alt="" width={"50px"} height={"50px"} />
              </td>
              <td>{item.quantity}</td>
              <td ><div onClick={() => dispatch(remove_from_cart(item.id)) } className="cart-remove-button">X</div></td>
            </tr>) 
          }
        </table>*/}

        <div className="cart-product-container">

        
        {
          mergedCartData.map((item) => <div className='product-item-1'  key={item.id}>
            <img src={item.photo} alt="" width={'150px'} height={'170px'} />
            <div className="product-item-information">
            <div className='individual-product-name'>  {item.name} </div>
            <div className="individual-product-color"> Color for your {item.name} is {item.color}.  </div>
            <div className="individual-product-color"> You have selected  {item.quantity}  quantity from the store</div>
            <div className="individual-product-color">It comes in the category of {item.category}. </div>
            <div className="individual-product-color">Its Brand name is {item.brand}. </div>
            <div className="individual-product-color">Price of single item is {item.price} and for selected Quantity price is {item.totalprice}. </div>
            
            
            <div className="individual-product-color">Click The Red  Button To Item From the Cart
            <button onClick={() => dispatch(remove_from_cart(item.id)) } className="cart-remove-button">X</button>
            </div>
          </div>
          </div>)
        }
     
       
        </div> 
        


      


        <div className="price-details">
          <div className="adjust-price"><span>Amount  </span>  <span>{amount}</span></div>
          <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
          <div className="adjust-price"><span>Tax     </span><span>{amount * 15 / 100}</span></div>
          <div className="adjust-price"><span>Total   </span><span>{(amount - (amount / 10) + (amount * 15 / 100)).toFixed(2)}</span></div>
         
        </div>

     
                 


         

      </div>



     
    </div>
  );
}

export default Cart;
