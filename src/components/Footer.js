import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import { useLocation } from "react-router-dom";
import './footer.css'

function Footer() {

  const { pathname } = useLocation()
  if (pathname === "/contact" || pathname === "/users") {
    return (<div></div>)
  }
  else {
    return (
      <div>
        <div className="footer-container">
          <div className="footer-text">
            Copyrigth ©2023. All  Rights Reserved
          </div>
          <div className="footer-icons">
          <a href="https://www.facebook.com/FortuneFoods"> <i class="fa fa-facebook-f icons"> </i> </a>
          <a href="https://twitter.com/fortunefoods">  <i class="fa fa-twitter icons" ></i> </a>
           <a href="https://www.youtube.com/user/fortunefoods"> <i class="fa fa-youtube-play icons"></i> </a>
           <a href="https://www.instagram.com/fortune.foods/"> <i class="fa fa-instagram icons" ></i> </a>
           <a href="https://api.whatsapp.com/message/3HKNUQFYOTGNA1?autoload=1&app_absent=0"> <i class="fa fa-whatsapp icons" ></i> </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;