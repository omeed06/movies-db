import React from 'react'

export default function footer() {
    return (
        <div className="footer container-fluid w-100">
            <div className="container" style={{color:'#FFF'}}>
                <div className="row " style={{paddingTop: '50px'}} >
                    <div className="col-sm-3">
                        <h2>THEATRE.COM</h2>
                        <p className="text-center" style={{paddingTop: '20px'}}>The Perfect Ongoing Shows And Upcoming Shows Are Here </p>
                    </div>

                    <div className="col-sm-3">
                        <h2>Information</h2>
                        <br />
                        <p className="icon"><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Brooklyn, NY 10036</p>
                        <p className="icon"><i className="far fa-envelope"></i>&nbsp;&nbsp;&nbsp;example@example.com</p>
                        <p className="icon"><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;&nbsp;Call Us: 1-800-123-1234</p>
                    </div>

                    <div className="col-sm-3">
                        <h2>SHOWS</h2>
                        <br />
                        <p className="icon">English Theatre Shows</p>
                        <p className="icon">Hindi Theatre Shows</p>
                        <p className="icon">Urdu Theatre Shows</p>
                    </div>

                    <div className="col-sm-3">
                        <h2>MORE</h2>
                        <br />
                        <p className="icon">Upcoming Shows</p>
                        <p className="icon">Artist Gallery </p>
                        <p className="icon">Auditorium</p>
                    </div>

                </div>
                <center><hr style={{border:'#F00 solid thin;'}} /></center>
                <div className="row text-center">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-12 social">
                        <p>FOLLOW US:
                            <a href="#"><i className="fab fa-facebook-square" style={{color:'#3b5998' , fontSize:'32px' , marginLeft:'10px'}}></i></a>
                            <a href="#"><i className="fab fa-whatsapp-square" style={{color:'#00ab6b' , fontSize:'32px' , marginLeft:'10px'}}></i></a>
                            <a href="#"><i className="fab fa-twitter-square" style={{color:' #55acee' , fontSize:'32px' , marginLeft:'10px'}}></i></a>
                            <a href="#"><i className="fab fa-youtube-square" style={{color:'#b31217' , fontSize:'32px' , marginLeft:'10px'}}></i></a>
                        </p>
                    </div>
                </div>
                <center><hr style={{border: '#F00 thin solid' , marginTop:'-10px' , width:'280px'}}/></center>
                <p style={{color:'#CCC', textAlign: 'center' , fontSize:'12px'}}>Theatre.com © All rights reserved</p>
            </div>
        </div>
    )
}
