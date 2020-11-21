import React from "react";

import Hero from "./../components/hero";
import Slider from "./../components/slider";
import Grid from "@material-ui/core/Grid";

import heroBackground from "./../images/heroBackground.jpg";
import greenhouse from "./../images/greenhouse.jpg";
import boxes from "./../images/boxes.jpg";

const home = () => {
  return (
    <div class="home">
      <Hero
        title="Homegrown Herbs"
        subtitle="Perfect for any occasion"
        backgroundImg={heroBackground}
      >
        <br />
        <p>
          <i>Start shopping now&hellip;</i>
        </p>
      </Hero>
      <Grid className="home-grid-container" container spacing={4}>
        <Grid className="home-grid-item-text" item xs={8}>
          <h2 class="home-hthree">Why shop with us?</h2>
          <p class="home-p">
            Homegrown herbs is committed to organic and natural herbs for all
            aspects of life. All of our herbs come from sustainable and
            eco-friendly farms or greenhouses. Our seeds are non-GMO and we pay
            our farmers fairly. Our herbs smell and taste beautifully and we
            strongly believe you will feel the same.
          </p>
        </Grid>
        <Grid className="home-grid-item" item xs={4}>
          <img
            class="home-img"
            src={greenhouse}
            alt="A greenhouse filled with lots of greenary."
          />
        </Grid>
        <Grid className="home-grid-item" item xs={4}>
          <img
            class="home-img box"
            src={boxes}
            alt="A stack of two white boxes on a reclaimed wood background."
          />
        </Grid>
        <Grid className="home-grid-item-text" item xs={8}>
          <h2 class="home-hthree">How do we ship sustainably?</h2>
          <p class="home-p">
            Homegrown Herbs strives to lower our carbon emissions by using
            sustainable packaging and shipping methods. Our boxes are 100%
            recyclable and no plastic is used, instead we ship with silicon
            based wrappers and containers. Our customer, you, can either reuse
            these containers for your own purposes or ship them back with your
            next order to receive a discount. Using these methods we have
            prevented an estimated 1 million tons of carbon emissions into the
            environment.
          </p>
        </Grid>
      </Grid>
      <hr></hr>
      <Slider title="Now, what do we offer?">
        <img src={boxes} />
        <img src={greenhouse} />
      </Slider>
    </div>
  );
};

export default home;
