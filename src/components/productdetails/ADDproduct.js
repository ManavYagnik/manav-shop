import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productList, productSearchByCategory } from '../../redux/productAction'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";



function ADDproduct() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in form component", data);
  console.log("no of products  ", data.length);
  console.log("spread function output ",...data);


  useEffect(() => { dispatch(productList()) }, [])
  let lastproductname= data[data.length-1].name
  console.log("last product name", lastproductname)

  // const [setNewProduct, NewProudcut]=useState({

  // })
  

  const { register, handleSubmit } = useForm();
  const [data1, setData] = useState("");

  
  
  return (
    <div>

<>
  <div className="form-title-1">Add Products Here</div>
  <div className="form-main-container-1">
    <form  onSubmit={handleSubmit((data1) => setData(JSON.stringify(data1)))}>
      <div className="container-2">

      <div className="row-1">
          <div className="col-25-1">
            <label htmlFor="name"> ID</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="ID"
              name="ID"
              {...register("id")}
              placeholder="Enter Product ID Here ..."
             
          
             
            />
          </div>
        </div>
       




        <div className="row-1">
          <div className="col-25-1">
            <label htmlFor="name"> Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="name"
              name="name"
              {...register("name")}
              placeholder="Enter Product Name ..."
              
          
             
            />
          </div>
        </div>
        <div className="row-1">
          <div className="col-25-1">
            <label htmlFor="color"> Color</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="color"
              name="color"
              {...register("color")}
              placeholder="Enter Color Here ..."
            />
          </div>
        </div>
        <div className="row-1">
          <div className="col-25-1">
            <label htmlFor="price"> Price</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="price"
              name="price"
              {...register("price")}
              placeholder="Enter Price Here ..."
             
            />
          </div>
        </div>
        <div className="row-1">
          <div className="col-25-1">
            <label htmlFor="category"> Category</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="category"
              name="category"
              {...register("category")}
              placeholder="Enter Category Here ..."
            />
          </div>
        </div>
        <div className="row-1">
          <div className="col-25-1">
            <label htmlFor="brand"> Brand</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="brand"
              name="brand"
              {...register("brand")}
              placeholder="Enter Brand Here ..."
            />
          </div>
        </div>
        <div className="row-1">
          <div className="col-25-1">
            <label htmlFor="photo-link"> Photo Link</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="photo-link"
              name="photo-link"
              {...register("photo")}
              placeholder="Enter Photo Link Here ..."
            />
          </div>
        </div>
        <div className="s-row-1">
          <input type="submit" defaultValue="Submit" />
        </div>
      </div>
    </form>

  </div>
</>

      
    </div>
  )
}

export default ADDproduct


