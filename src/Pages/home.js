import React from 'react';

import Hero from './../components/hero';

import heroBackground from './../images/heroBackground.jpg';

const home = () => {
    return (
        <div class="home">
            <Hero title="Homegrown Herbs" subtitle="Perfect for any occasion" backgroundImg={heroBackground}>
                <p>Start shopping now&hellip;</p>
            </Hero>
        </div>
    )
}

export default home;