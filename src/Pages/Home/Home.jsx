import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Hero from './Hero';
import PopularMenu from './PopularMenu';
import ChefRecommends from './ChefRecommends';
import Featured from './Featured';
import Testimonials from './Testimonials';
import CallNow from './CallNow';
import { Title } from "react-head";
const Home = () => {
    return (
        <div>
             <Title>CAFE-ALI | HOME</Title>
            <Banner/>
           <Category/>
           <Hero/>
           <PopularMenu/>
           <CallNow/>
           <ChefRecommends/>
           <Featured/>
           <Testimonials/>
        </div>
    );
};

export default Home;