import React from 'react'
import {useSelector, useDispatch} from  'react-redux'
import { addToCart, emptyCart, remove_from_cart } from '../../redux/action';



function Fortunesoyaoil() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);

    return (
        <> 
        <div class="fso-main">
            <div class="fso-container"> 
                <div class="fso-banner">
                    <div class="fso-item">
                        <h2>Fortune Soya Health Oil</h2>
                        <p > Give your health the power of Soyabeans with Fortune Soya Health Oil.
                            A pioneer in refined oils for the last 20 years, Fortune’s unique nutri-lock
                            action not just adds extra flavour to your foods but is rich in Vitamins,
                            Omega 3 and Tocopherol which keeps you healthy every day. So,
                            go ahead and Cook your favorite dishes without fear,
                            Fortune’s soya oil has
                            got your back! </p>
                    </div>
                    <div class="fso-item">
                        <img src='https://www.fortunefoods.com/wp-content/uploads/2022/12/SoyaHealthOil_.png' alt=''/>
                        <button  className="btnAddProcuct" onClick={() => dispatch(addToCart(data[19]))}>Add to cart</button>
                        <button  className="btnRemoveProcuct" onClick={() => dispatch(remove_from_cart(data[19].id))}>Remove</button>
                    </div>
                </div>
                
                </div>

                <div class="fso-banner">
                    <div class="fso-item">
                        <br />
                        <br />
                        <img src="https://www.fortunefoods.com/wp-content/uploads/2022/12/soya-oil.jpg" width="300px" alt=''/>
                        
                    </div>
                    <div class="fso-item">
                        <h1>  Khana Banao Tastier with the Tadka of Pure Soyabean Oil </h1>

                        Certified as <strong>India’s No. 1 Cooking Oil</strong>, the safe and pure Fortune Soyabean oil has unique nutri-lock action which keeps <br /> you healthy every day. This soybean refined oil not just makes your everyday meals tastier but also makes your bones stronger and heart healthier
                    </div>
                </div>

                <div class="fso-banner">
                    <div class="fso-item">
                        <h1>  Bring Home the Purest Soyabean Refined Oil for your Family…</h1>
                    </div>
                    <div class="fso-item">
                        <img src="https://www.fortunefoods.com/wp-content/uploads/2022/12/big-basket-1.png" alt='' />
                        <img src="https://www.fortunefoods.com/wp-content/uploads/2022/12/Blinkit-1.png" alt=''/>
                    </div>
                </div>



                
            </div>
        </>
    )
}

export default Fortunesoyaoil
