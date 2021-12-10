import React from 'react';


const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="background">

            </div>
            <div className="contents">
                <div className='title-container'>
                    <h1 className='title' >Baobab Agency</h1>
                </div>
                <div className="images">
                    <div>
                        <img src="http://localhost:3000/images/hotel.jpg" alt="" />
                    </div>
                    <div className='image2'>
                        <img src="http://localhost:3000/images/baobab.jpg" width={400} height={245} alt="" />
                    </div>
                    <div>
                        <img src="http://localhost:3000/images/eat.jpg" alt="" />
                    </div>
                </div>
                <div className='slogan'>
                    <h2 className="slogan-text">
                        Optez pour des réservations en ligne , assurées et rapide
                    </h2>
                </div>
                <div className="navigation">

                    <div className='link' >
                        <a href="#" className="test">
                            Hotel
                        </a>
                    </div>
                    <div className='link'>
                        <a href="#" className='test'>
                            Restaurant
                        </a>
                    </div>
                    <div className='inscription'>
                        <a href="#">
                            <img src="http://localhost:3000/images/inscrire.png" width={150} alt="inscription" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
