import React from 'react'
import Image from '../assets/img/carousel/JOKER.jpg'
import Image2 from '../assets/img/carousel/dabang.jpg'
import Image3 from '../assets/img/carousel/binroye.jpg'
import Image4 from '../assets/img/carousel/std.jpg'
import Image5 from '../assets/img/carousel/superstar.jpg'
import Image6 from '../assets/img/carousel/war.jpeg'
import Image7 from '../assets/img/carousel/wolves.jpg'
import Image8 from '../assets/img/carousel/wrongno.jpg'
import Image9 from '../assets/img/carousel/rampage.jpg'

export default function banner() {
  return (

    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel" style={{ marginTop: 50 }}>
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image2}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image4}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image5}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image6} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image7}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image8}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image9}  className="d-block w-100" alt="..." />
        </div>

      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
