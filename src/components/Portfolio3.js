import React from 'react';
import './../css/animate.css';
import './../css/App.css';
import './../css/bootstrap.min.css';
import './../css/color-switcher.css';
import './../css/index.css';
import './../css/line-icons.css';
import './../css/magnific-popup.css';
import './../css/main.css';
import './../css/menu_sideslide.css';
import './../css/nivo-lightbox.css';
import './../css/owl.carousel.css';
import './../css/owl.theme.css';
import './../css/responsive.css';
import ReactPlayer from "react-player";

export default function Portfolio3() {
    return (
        <div>
            <section id="portfolios3" className="section">
  {/* Container Starts */}
  <div className="container">
    <div className="section-header">          
      <h2 className="section-title">Video giới thiệu sản phẩm hoặc cửa hàng</h2>
      <p className="section-subtitle">Giới thiệu vắn tắt nội dung</p>
    </div>
    <div className="row">          
      <div className="col-md-12">
        {/* Portfolio Controller/Buttons */}
       
        {/* Portfolio Controller/Buttons Ends*/}
      </div>
    </div>
    {/* Portfolio Recent Projects */}
    <div  className="row portfolio">
      <div className="col-lg-12 col-md-12 col-xs-12 mix development print">
        <ReactPlayer url="https://youtu.be/O8_tb1pDU8g" width="100" height="800px"></ReactPlayer>
      </div>
     
    </div>
  </div>
  {/* Container Ends */}
</section>
{/* Portfolio Section Ends */}

        </div>
    )
}
