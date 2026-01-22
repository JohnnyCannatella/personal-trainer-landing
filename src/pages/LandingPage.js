import React from 'react';
import Hero from '../components/landingpage/Hero';
import Services from "../components/landingpage/Services";
import AboutSection from "../components/landingpage/About";
import Results from "../components/landingpage/Results";
import Pricing from "../components/landingpage/Pricing";

function LandingPage() {
    return (
        <div>
            <Hero />
            <Services />
            <AboutSection />
            <Results />
            <Pricing />
        </div>
    );
}

export default LandingPage;