import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/banner'
import TheaterShow from '../components/theatershow'
import OurActor from '../components/OurActor'
import Footer from '../components/footer'


export default function Home() {
    const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=03804306a03e5d084c6e3896162022e1&language=en-US&page=1'
    const [data, setData] = useState(null)
    
    useEffect(() => {
        fetch(POPULAR_MOVIES_URL).then((result) => result.json()).then((res) => setData(res)).catch(console.log)
    }, [])
    
    return (
        <div>
            
            <Header />
            <Banner />
            <TheaterShow data={data} />
            <OurActor data={data} />
            <Footer />

        </div>
    )
}
