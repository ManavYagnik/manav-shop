import React from 'react'
import { addToCart, emptyCart, remove_from_cart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList, productSearchByCategory } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Productcontainer() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
  return (
    <div className='product-container'>
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
  </div>
  )
}

export default Productcontainer
