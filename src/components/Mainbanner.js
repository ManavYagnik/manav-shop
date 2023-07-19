import React from 'react';


const Mainbanner = () => {
  return (
    <div>
      <div className="level-container">
    <div className="sub-level-container">
      {/* <!-- rotating image --> */}
      <div className="img-container">
        <div className="img1">
          <img src="images/corousel/bloom.png" className="rotate" alt='' />
        </div>
        <div className="img2">
          <img src="images/corousel/SunliteSunflower.webp" className="rotate" alt='' />
        </div>
      </div>
      {/* <!-- end of rotating img --> */}

      {/* <!-- jug --> */}
      <div className="img-container-2">
        <div className="img3">
          <img src="images/stickybar/1.webp" alt='' />
        </div>
      </div>
      {/* <!-- end of jug --> */}
    </div>


    {/* <!-- text 1 --> */}
    <div className="img-container-3">
      <div className="img4">
        for<br />
        healthy food<br />
        <span className="taste">with taste ka tadka </span>
        <br />
        <button className="btn-level">Bring it Home</button>
      </div>
    </div>
    {/* <!-- end of text --> */}
  </div>
  {/* <!-- end of first banner --> */}











  {/* <!-- 2nd banner --> */}

  <div className="level-container-2">

    <div className="img-container-3">
      <div className="img4">
        for<br />
        new flavours<br />
        <span className="taste">to indulge your parivar </span>
        <br />
        <button className="btn-level">Bring it Home</button>
      </div>
    </div>

    <div className="sub-level-container">
      {/* <!-- jug --> */}
      <div className="img-container-2">
        <div className="img3">
          <img src="images/stickybar/5.webp" alt='' />
        </div>
      </div>
      {/* <!-- end of jug --> */}
      {/* <!-- rotating image --> */}
      <div className="img-container">
        <div className="img1">
          <img src="images/corousel/bloom.png" className="rotate" alt=''/>
        </div>
        <div className="img2">
          <img src="images/corousel/SunliteSunflower.webp" className="rotate" alt=''/>
        </div>
      </div>
      {/* <!-- end rotaing img --> */}
    </div>

  </div>

  {/* <!-- 3rd banner --> */}
  <div className="level-container">
    <div className="sub-level-container">
      {/* <!-- rotating image --> */}
      <div className="img-container">
        <div className="img1">
          <img src="images/corousel/bloom.png" className="rotate" alt=''/>
        </div>
        <div className="img2">
          <img src="images/corousel/SunliteSunflower.webp" className="rotate" alt='' />
        </div>
      </div>

      {/* <!-- jug --> */}
      <div className="img-container-2">
        <div className="img3">
          <img src="images/stickybar/1.webp" alt='' />
        </div>
      </div>
    </div>


    {/* <!-- text 1 --> */}
    <div className="img-container-3">
      <div className="img4">
        for<br />
        healthy food<br />
        <span className="taste">with taste ka tadka </span>
        <br />
        <button className="btn-level">Bring it Home</button>
      </div>
    </div>
  </div>

      
    </div>
  )
} 

export default Mainbanner
