import './Content.css'

import Hero from './hero/Hero';
import AboutUs from './about-us/AboutUs';
import Reviews from './reviews/Reviews';

export default function Content () {

    return <div id="content-container">
        <Hero/>
        <AboutUs/>
        <Reviews/>
    </div>
    
}