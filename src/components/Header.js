import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { productSearch } from "../redux/productAction";

import './header.css';
import './headersmall.css'
import Mystickybar from "./Mystickybar";

const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch();

    console.log("redux data in header", result)
    return (<div className=" header-container  ">
        <div className="logo" >
            <Link to="/">
                <span className="logo-img">   <img src="./images/logo.png" alt="" /></span>
            </Link>
        </div>

        <span className="btn-grp-L">
            <div class="dropdown">
                <button className="btn" >Edible Oils</button>
                <div class="dropdown-content">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span> <span className="large-dropdown-text"> Fortune Soya Health Oil </span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Sunlite Sunflower Oil</span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /> </span><span className="large-dropdown-text"> Fortune Kachi Ghani Mustard Oil</span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text"> Fortune Rice Brain Oil</span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text"> Fortune Filtered Groundnut Oil</span></div>
                </div>
            </div>




            <div class="dropdown">
                <button className="btn">Foods</button>
                <div class="dropdown-content">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span> <span className="large-dropdown-text">Fortune Chakki Fresh Atta</span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Rice</span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /> </span><span className="large-dropdown-text">Fortune Soya Chunks</span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Chana Besan</span></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dp-img1.png" alt="" /></span><span className="large-dropdown-text">Fortune Sugar</span></div>
                </div>
            </div>


            <div class="dropdown">
                <button className="btn">Ready to Cook</button>
                <div class="dropdown-content">
                    <div class="dp-item-1"> 
                    <span className="large-dropdown-text-1">Fortune Chakki Fresh Atta  </span></div>
                   
                   
                    <div class="dp-item-1">
                    <span className="large-dropdown-text-1">Fortune Soya Chunks</span></div>

                </div>

            </div>
            <button className="btn">Fortunes Recipes</button>
            <button className="btn">About US</button>
            <Link to="/contact">
                <button className="btn">Contact Us</button>
            </Link>

        </span>







        <span className="btn-grp-s ">
            <div class="dropdown">

                <button class="dropbtn"><img src="./images/dropdown/ham.png" width="30px" /></button>

                <div class="dropdown-content">
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dropdown/dp-img1.png" alt="" /></span> <a> items </a></div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dropdown/dp-img1.png" alt="" /></span>menu items</div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dropdown/dp-img1.png" alt="" /> </span> items</div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dropdown/dp-img1.png" alt="" /></span> items</div>
                    <div class="dp-item"><span class="menu-pic"><img width="30px" src="images/dropdown/dp-img1.png" alt="" /></span> items</div>


                </div>
            </div>
        </span>


        <div className="Search-Box">
            <input placeholder="Search Product " onChange={(event) => dispatch(productSearch(event.target.value))} className="input-search"></input>
        </div>
        {/* <Link to="/cart" className="link">

            <span className="result">{result.length}</span>
            
            <span className="cart"><img src="images/cart.png" /></span>


        </Link> */}

        <Mystickybar />

    </div>);
}

export default Header;