import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Videocorousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <div className='banner' style={{ "text-align": "center" }} >
            <Carousel
            controls={false}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1200}
                rewind={true}
                arrows={true}
                rewindWithAnimation={true}
                showDots={false}>
                    
      <div className='vidItem'><iframe width="100%"  src="https://www.youtube.com/embed/yj9UtXRR2To" title="পেট পুজো পরিক্রমা | এবার নতুন স্বাদে | ফরচুন ফুডস" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div className="text">Samantha Prabhu's secret is finally out! |<br></br> Fortune Sunflower Oil</div><div className="playbutton"><button>Watch Now</button></div></div>
      <div className='vidItem'><iframe width="100%" src="https://www.youtube.com/embed/yj9UtXRR2To" title="পেট পুজো পরিক্রমা | এবার নতুন স্বাদে | ফরচুন ফুডস" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <div className="text">Fit food with hit taste! Here's the Bawarchi's secret |<br/> Fortune Soya Health Oil</div><div className="playbutton"><button>Watch Now</button></div></div>
      <div className='vidItem'><iframe width="100%"  src="https://www.youtube.com/embed/yj9UtXRR2To" title="পেট পুজো পরিক্রমা | এবার নতুন স্বাদে | ফরচুন ফুডস" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div className="text">Celebrating 20 Years of Fortune</div><div className="playbutton"><button>Watch Now</button></div></div>


            </Carousel>
        </div>
    )
}

export default Videocorousel;