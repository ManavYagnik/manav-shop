import React, { useState } from 'react'
import './AddProductForm.css'


const AddProductForm = () => {
    const [addNewProduct, setaddNewProduct] = useState({
        id: 20,
        name: "",
        category: "",
        brand: "",
        photo: "",
        price: 0,
        color: "",
    });


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setaddNewProduct({ ...addNewProduct, [name]: value })


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { ...addNewProduct };
        console.log("Form Submited",newProduct);

        const res = fetch(`https://my-mongo-db-api.onrender.com/api/products/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...newProduct })

        })
        alert("your product added");
    }



    return (
        <>
            <div className='form-container'>
                <h1>Add Product</h1>

                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">Product ID</label>
                        <input type="text" id="id"
                            value={addNewProduct.id}
                            onChange={handleInput}
                            name="id" placeholder="item ID" />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"
                            value={addNewProduct.name}
                            onChange={handleInput}
                            name="name" placeholder="Product Name" />
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category"
                            value={addNewProduct.category}
                            onChange={handleInput}
                            name="category" placeholder="category" />
                    </div>
                    <div>
                        <label htmlFor="color">Name</label>
                        <input type="text" id="color"
                            value={addNewProduct.color}
                            onChange={handleInput}
                            name="color" placeholder="Color" />
                    </div>
                    <div>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" id="brand"
                            value={addNewProduct.brand}
                            onChange={handleInput}
                            name="brand" placeholder="Brand" />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="text" id="price"
                            value={addNewProduct.price}
                            onChange={handleInput}
                            name="price" placeholder="Price" />
                    </div>
                    <div>
                        <label htmlFor="photo">Photo (URL)</label>
                        <input type="text" id="photo"
                            value={addNewProduct.photo}
                            onChange={handleInput}
                            name="photo" placeholder="image URL" />
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>

    )
} 

export default AddProductForm

