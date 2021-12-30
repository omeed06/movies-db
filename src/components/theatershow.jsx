import React from 'react'
import {Card, Button} from 'react-bootstrap'

export default function theatershow({data}) {
    console.log(data);
    return (
        <>
        
             <br />
        <div class="container text-center" style={{color:'rgba(255,255,255,1)'}}>
        <div class="section-first">
        <div class="row">
        <div class="col-sm-2">
        </div>
        <div class="col-sm-8">
        <h1 class="text-center">Welcome To The Theater</h1>
        <center><hr style={{border:'#F00 thin solid', width:'150px' }} /></center>
        <p class="text-center">When thou shalt be disposed to set me light
        And place my merit in the eye of scorn,Upon thy side against myself I’ll fight And prove thee virtuous, though thou art forsworn.With mine own weakness being best acquainted,Upon thy part I can set down a story Of faults conceal’d, wherein I am attainted, That thou in losing me shalt win much glory. </p>
        </div>
        <div class="col-sm-2">
        </div>
        </div>
        </div>
        </div> 
            <br />
            <br />
            <div className="section-first">
                <h1 className="text-center">English Theatre Shows</h1>
                <center><hr style={{ border: '#F00 thin solid', width: '150px', }} /></center>
                <br />
                {data?.results?.map((movie) => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`} />
                    <Card.Body>
                      <Card.Title style={{color: '#000'}}>{movie?.original_title}</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text> */}
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                   
            ))}
                <div className="owl-carousel owl-theme">
                </div>
            </div>
            {/* section first */}

            <br />
            <br />
            <br />
            <br />
            <div className="section-second">
                <h1 className="text-center">Hindi Theatre Shows</h1>
                <center><hr style={{ border: '#F00 thin solid', width: '150px', }} /></center>
                <br />
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/72656395_1368773726633008_6199866024643156287_n.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/junglee-indian-movie-poster-md.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/MV5BZWRiMzk5ZWQtNGE5MC00ODE3LWIyOGEtZjRjMzQ1YTU0Nzc4XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY1200_CR22,0,630,1200_AL_.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/Raees-Shah-Rukh-Khan-Bollywood-Movies-Poster.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/Saand-Ki-Aankh16.jpeg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/Amavas1.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/Bharat8.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/MV5BNzM2MWQ4YWMtYmY0NC00OGU1LTgwNDMtNTk3OGUxMTE4YjYyXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/MV5BZThmMWFlOWYtY2M0YS00OWIxLWI4MzgtYTJhMDNkZDY4ZjhjXkEyXkFqcGdeQXVyNzc4NzEzNjY@._V1_.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/hindi shows/akshay-kumar-1.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>


                </div>
            </div>
            {/* <!--section-second--> */}

            <br />
            <br />
            <br />
            <br />
            <div className="section-third">
                <h1 className="text-center">Urdu Theatre Shows</h1>
                <center><hr style={{ border: '#F00 thin solid', width: '150px', }} /></center>
                <br />
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/5dd72d8f47cb131143e8c48e66a137da.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />

                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/27b5bdac0cf215438dbea7cbe843074e.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/104551cd2871bb07d48114a8c72bef35_500x735.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/36358219_2171407079555419_528129300637941760_n.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/deac43a167975adde3d71adde648b79b.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/f9a70ef193adef035f7ec93601aee759.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/MV5BNzdjYjNmOWItYTg5OS00MmEyLTk1NjEtY2MxNzA5NTcxMGRhXkEyXkFqcGdeQXVyMTAxNDM4MTM0._V1_.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/MV5BODJlMjQzNDktNDhhNC00N2ZmLWEyMzMtOGFlYmE1Y2MxMDQwXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_SY480_SX384_AL_.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/P_HO00007133.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/urdu shows/Wrong-No-2.jpeg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>


                </div>
            </div>
            {/* <!--section-third--> */}

            <br />
            <br />
            <br />
            <br />
            <div className="section-fourth">
                <h1 className="text-center">Upcoming Shows</h1>
                <center><hr style={{ border: '#F00 thin solid', width: '150px', }} /></center>
                <br />
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/GL120710203.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />

                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/61rDX7jHWIL._SY679_.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/c304fab395b4b353f34476f2850f7840.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/40476012bfece758813397353dae466c.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/83-ranveer-hindi-movie-poster-star-cast-release-date-mt-wiki.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/ebeac6aa937f1837b30a8f6fd751245c.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/26dab8a50fc3da32b96f09d885ff921d.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/0b61b5622c09fe27d0ca992c62dad374.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/4e2a8dbfbd13711021f97f9bac9e677d.jpg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>
                    <div className="item">
                        <img alt="movie" src="img/upcoming shows/WhatsApp-Image-2017-11-20-at-3.23.47-PM.jpeg" className="img-thumbnail" />
                        <button className="btn btn-danger mt-3">View More</button>
                        <br />
                        <br />
                    </div>


                </div>
            </div>
        </>


    )
}
