
import './Mystickybar.css'
 
const Mystickybar = () => {

  return (
    <div>

      <div className="sticky-img-container">
        <div className="stiky">
          Have any questions? <br />
          <a href="/contact" id='c'> Contact us </a>
        </div>



        <img className="sticky-img1 simg" src="images/stickybar/1.webp" />
        <img className="sticky-img2 simg" src="images/stickybar/2.webp" />
        <img className="sticky-img2 simg" src="images/stickybar/2.webp" />
        <img className="sticky-img3 simg" src="images/stickybar/3.webp" />
        <img className="sticky-img4 simg" src="images/stickybar/4.webp" />
        <img className="sticky-img5 simg" src="images/stickybar/5.webp" />

        <div className="rotate-img-container">
          <div className="rotate-img">
            <img className="rotate" src="images/stickybar/bloom-big.png" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Mystickybar