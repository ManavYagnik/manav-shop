import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { productSearch } from "../redux/productAction";
import Mystickybar from "./Mystickybar";
import { useEffect, useState } from "react";
import { Fragment } from "react";

const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch();

    const [button, setButton] = useState(true);

    const [navbar, setNavbar] = useState(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };



    window.addEventListener('resize', showButton);
 


    useEffect(() =>{
        showButton();
    }, [])

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };
   
    window.addEventListener('scroll', changeBackground);
  

    console.log("redux data in header", result)

    return (
    
   
    <div className= 'header-container'>
        
        <div className="logo" >
            <Link to="/">
                <span className="logo-img">   <img src="./images/infoware-logo.webp" alt="" /></span>
            </Link>
        </div>

        <span className="btn-grp-L">
            <div class="dropdown">
                <button className="btn" >Edible Oils</button>
                <div class="dropdown-content">
                    <Link to='/fortunesoyaoil' class="link-text">
                        <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span> <span className="large-dropdown-text"> Fortune Soya Health Oil </span></div>
                    </Link>


                    <Link to='/comingsoon' class="link-text">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Sunlite Sunflower Oil</span></div>
                    </Link>

                    <Link to='/comingsoon' class="link-text">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /> </span><span className="large-dropdown-text"> Fortune Kachi Ghani Mustard Oil</span></div>
                    </Link>

                    <Link to='/comingsoon' class="link-text">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text"> Fortune Rice Brain Oil</span></div>
                    </Link>

                    <Link to='/comingsoon' class="link-text">
                 
                   <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text"> Fortune Filtered Groundnut Oil</span></div>
                   </Link>
                </div>
            </div>




            <div class="dropdown">
                <button className="btn">Foods</button>
                <div class="dropdown-content">
                    <Link to='/chakkifreshaata' class="link-text">
                        <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/Chakki-fresh-atta-FOP-1.webp" alt="" /></span> <span className="large-dropdown-text">Fortune Chakki Fresh Atta</span></div>
                    </Link>

                    <Link to="/comingsoon" class="link-text">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Rice</span></div>
                    </Link>

                    <Link to="/comingsoon" class="link-text">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /> </span><span className="large-dropdown-text">Fortune Soya Chunks</span></div>
                    </Link>

                    <Link to="/comingsoon" class="link-text">
                   <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Chana Besan</span></div>
                   </Link>


                   <Link to="/comingsoon" class="link-text">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Sugar</span></div>
                    </Link>
                 </div>
            </div>


            <div class="dropdown">
          
                <button className="btn">Ready to Cook</button>
              
                <div class="dropdown-content">
                <Link to="/comingsoon" class="link-text">
                    <div class="dp-item-1">
                   
                        <span className="large-dropdown-text-1">Fortune Chakki Fresh Atta  </span>
                        </div>
                </Link>

                    <div class="dp-item-1">
                        <span className="large-dropdown-text-1">Fortune Soya Chunks</span></div>

                </div>

            </div>
            <Link to="/products">
                <button className="btn">Products</button>
            </Link>
           
         
         <Link to="/addproductsform">
            <button className="btn" >Add Products</button>
            </Link>
            <Link to="/comingsoon" class="link-text">
            <button className="btn">About US</button>
            </Link>
            <Link to="/contact">
                <button className="btn">Contact Us</button>
            </Link>

        </span>







        <span className="btn-grp-s ">
            <div class="dropdown">

                <button class="dropbtn"><img src="./images/dropdown/ham.png" width="30px" alt="" /></button>

                <div class="dropdown-content">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="" alt="" /></span>  <Link to="/products">
                <button className="btn">Products</button>
            </Link> </div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="" alt="" /></span>  <Link to="/addproductsform">
            <button className="btn" >Add Products</button>
            </Link></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="" alt="" /> </span> <Link to="/comingsoon" class="link-text">
            <button className="btn">About US</button>
            </Link></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="" alt="" /></span>   <Link to="/contact">
                <button className="btn">Contact Us</button>
            </Link></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="" alt="" /></span> items</div>


                </div>
            </div>
        </span>


        <div className="Search-Box">
            <input placeholder="Search Product " onChange={(event) => dispatch(productSearch(event.target.value))} className="input-search"></input>
        </div>
        <span className="cart-container">
            <Link to="/cart" className="link">

                <span className="result">{result.length}</span>

                <span className="cart"><img src="images/cart.png" alt="" /></span>


            </Link>
        </span>
        
        <Mystickybar />
       
    </div>

 
    
    );
}

export default Header;