import React from 'react';
import Hero from './Hero';
import TopSellers from './TopSellers';
import Recommended from './Recommended.jsx';
import News from './News';


const Home=()=>{
    return(
        <>
        <Hero/>
        <TopSellers/>
        <Recommended/>
        <News/>
        </>
    )
}
export default Home