import React from 'react'

export default function OurActor() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="section-actors">
                <h1 className="text-center">Our Actors</h1>
                <center><hr style={{ border: '#F00 thin solid', width: '150px', }} /></center>
                <br />
                <br />
                <div className="row text-center">
                    <div className="col-sm-2">
                        <img src="img/actors/jaouqin phoenix.jpg" className="img-thumbnail" alt="movie" style={{borderRadius: '50%'}} />
                        <br />
                        <br />
                        <h6>Jaouqin Phoenix</h6>
                        <p>Actor</p>
                    </div>

                    <div className="col-sm-2">
                        <img src="img/actors/imogen poots.jpg" className="img-thumbnail" alt="movie" style={{borderRadius: '50%'}} />
                        <br />
                        <br />
                        <h6>Imogin Poots</h6>
                        <p>Actress</p>

                    </div>

                    <div className="col-sm-2">
                        <img src="img/actors/shahid.jpg" className="img-thumbnail" alt="movie" style={{borderRadius: '50%'}} />
                        <br />
                        <br />
                        <h6>Shahid Kapoor</h6>
                        <p>Actor</p>
                    </div>

                    <div className="col-sm-2">
                        <img src="img/actors/26219744_202247023686388_7545794558761521600_n.jpg" className="img-thumbnail" alt="movie" style={{borderRadius: '50%'}} />
                        <br />
                        <br />
                        <h6>Kiara Adwani</h6>
                        <p>Actress</p>
                    </div>

                    <div className="col-sm-2">
                        <img src="img/actors/Humayun-Saeed.jpg" className="img-thumbnail" alt="movie" style={{borderRadius: '50%'}} />
                        <br />
                        <br />
                        <h6>Humaiyun Saeed</h6>
                        <p>Actor</p>
                    </div>

                    <div className="col-sm-2">
                        <img src="img/actors/Mahira-Khan.jpg" className="img-thumbnail" alt="movie" style={{borderRadius: '50%'}} />
                        <br />
                        <br />
                        <h6>Mahira Khan</h6>
                        <p>Actress</p>
                    </div>
                    <br />
                    <br />
                </div>
                <p className="actor-para"><a href="#">More Actors...</a></p>
            </div>
        </>
    )
}
