import { addToCart, emptyCart, remove_from_cart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList, productSearchByCategory } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Myloader from './Myloader';

function Products() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);
  console.log("one item",data[1]);
  const Loading = useSelector((state)=> state.isloading.loading)

  useEffect(() => { dispatch(productList()) }, [])
  return (
    <div className='product-page'>
      <div className="products-dropdown">
        <button className="products-dropbtn">Categories</button>
        <div className="products-dropdown-content">
          <button onClick={() => dispatch(productSearchByCategory('oil'))}>Edible oils</button><br />
          <button onClick={() => dispatch(productSearchByCategory('Foods'))}>Foods</button><br />
          <button onClick={() => dispatch(productSearchByCategory('ReadyToCook'))}>Ready to Cook</button><br />
          <button onClick={() => dispatch(productList())}>All Products</button><br />
        </div>
      </div>
       { Loading && < Myloader />}

      {/* <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> */}
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
    </div>
  );
}

export default Products;
