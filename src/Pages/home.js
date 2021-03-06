import React from "react";

import Hero from "./../components/hero";
import Slider from "./../components/slider";
import FourCard from "./../components/fourCard";
import Grid from "@material-ui/core/Grid";

import heroBackground from "./../images/heroBackground.jpg";
import greenhouse from "./../images/greenhouse.jpg";
import boxes from "./../images/boxes.jpg";
import Homecards from "./../components/homeCard";
import feverFew from "./../images/feverfew.jpg";
import ginger from "./../images/ginger.jpg";
import goldenSeal from "./../images/goldenSeal.jpg";
import milkThistle from "./../images/milkthistle.jpg";
import Parsely from "./../images/parsely.jpg";
import Coriander from "./../images/coriander.jpg";
import Dill from "./../images/dill.jpg";
import chives from "./../images/chives.jpg";
import pestle from "./../images/mortarandpatel.jpg";
import cutter from "./../images/herbcutter.jpg";
import grinder from "./../images/herbGrinder.jpg";
import jar from "./../images/masonjars.jpg";
import lavender from "./../images/lavender.jpg";
import chamomile from "./../images/Chamomile.jpg";
import rosehips from "./../images/rosehips.jpg";
import mint from "./../images/mint.jpg";

const cardItemsMedicinal = [
  {
    exampleImage: feverFew,
    exampleImageAlt: "White flowers with a small yellow middle.",
    exampleName: "Feverfew",
  },
  {
    exampleImage: ginger,
    exampleImageAlt: "Large brown roots piled on top of each other.",
    exampleName: "Ginger",
  },
  {
    exampleImage: goldenSeal,
    exampleImageAlt: "Green leaves with five points.",
    exampleName: "Golden Seal",
  },
  {
    exampleImage: milkThistle,
    exampleImageAlt:
      "A large pink flower with green thistles just under the bloom.",
    exampleName: "Milk Thistle",
  },
];

const cardItemsCulinary = [
  {
    exampleImage: Parsely,
    exampleImageAlt: "Small green leaves.",
    exampleName: "Parsely",
  },
  {
    exampleImage: Coriander,
    exampleImageAlt: "Bundles of small light green leaves.",
    exampleName: "Coriander",
  },
  {
    exampleImage: Dill,
    exampleImageAlt: "Two bundles of small thin leaves and stems.",
    exampleName: "Dill",
  },
  {
    exampleImage: chives,
    exampleImageAlt: "Tall thin stems with purple tops.",
    exampleName: "Chives",
  },
];
const cardItemsAccessories = [
  {
    exampleImage: pestle,
    exampleImageAlt: "A white mortar and pestle with red pepper in the bowl.",
    exampleName: "Mortar & Pestle",
  },
  {
    exampleImage: cutter,
    exampleImageAlt: "A green device with round blades chopping coriander.",
    exampleName: "Herb Cutter",
  },
  {
    exampleImage: grinder,
    exampleImageAlt: "A black grinder with small crushed leaves.",
    exampleName: "Herb Grinders",
  },
  {
    exampleImage: jar,
    exampleImageAlt: "A mason jar with stalks of lavender.",
    exampleName: "Mason Jars",
  },
];
const cardItemsTea = [
  {
    exampleImage: lavender,
    exampleImageAlt: "Light purple stalks of lavender",
    exampleName: "Lavender",
  },
  {
    exampleImage: chamomile,
    exampleImageAlt: "Bright yellow and white flowers.",
    exampleName: "Chamomile",
  },
  {
    exampleImage: rosehips,
    exampleImageAlt: "Small red fruits on tree branches.",
    exampleName: "Rose Hips",
  },
  {
    exampleImage: mint,
    exampleImageAlt: "Round green leaves in a pot.",
    exampleName: "Mint",
  },
];

const home = () => {
  return (
    <div class="home">
      <Hero
        title="Homegrown Herbs"
        subtitle="Perfect for any occasion"
        backgroundImg={heroBackground}
      >
        <p>
          <i>Start shopping now&hellip;</i>
        </p>
      </Hero>
      <Grid className="home-grid-container" container spacing={4}>
        <Grid className="home-grid-item-text" item xs={8}>
          <h2 className="home-hthree">Why shop with us?</h2>
          <p className="home-p">
            Homegrown herbs is committed to organic and natural herbs for all
            aspects of life. All of our herbs come from sustainable and
            eco-friendly farms or greenhouses. Our seeds are non-GMO and we pay
            our farmers fairly. Our herbs smell and taste beautifully and we
            strongly believe you will feel the same.
          </p>
        </Grid>
        <Grid className="home-grid-item" item xs={4}>
          <img
            className="home-img"
            src={greenhouse}
            alt="A greenhouse filled with lots of greenary."
          />
        </Grid>
        <Grid className="home-grid-item" item xs={4}>
          <img
            className="home-img box"
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
        <Homecards
          Name="Cilantro"
          Description="Cooking"
          Price="2.99"
          Image="https://firebasestorage.googleapis.com/v0/b/isp-term.appspot.com/o/cilantro.jpg?alt=media&token=60a6184a-9bbd-4fd4-a285-d4833b3bce61"
        />
        <Homecards
          Name="Basil"
          Description="Cooking"
          Price="2.00"
          Image="https://firebasestorage.googleapis.com/v0/b/isp-term.appspot.com/o/basil.jpg?alt=media&token=cd9c3726-800d-49ef-96e4-7597ab95c62b"
        />
        <Homecards
          Name="Chives"
          Description="Cooking"
          Price="2.49"
          Image="https://firebasestorage.googleapis.com/v0/b/isp-term.appspot.com/o/chives.jpg?alt=media&token=911e3ad7-2cfa-4845-9a73-5f79e455b7b3"
        />
        <Homecards
          Name="Tumeric"
          Description="Medicine"
          Price="3.49"
          Image="https://firebasestorage.googleapis.com/v0/b/isp-term.appspot.com/o/tumeric.jpg?alt=media&token=5735beb1-865a-4ee6-9deb-81ff6cc76f24"
        />
        <Homecards
          Name="Rosemary"
          Description="Tea"
          Price="2.75"
          Image="https://firebasestorage.googleapis.com/v0/b/isp-term.appspot.com/o/rosemary.jpg?alt=media&token=5c513602-48c6-46eb-bd43-81ac0104600e"
        />
      </Slider>
      <hr></hr>
      <div class="category-text">
        <h2>Looking for something specific?</h2>
        <h3>Shop by Category</h3>
      </div>
      <div class="four-card-container">
        <FourCard
          title="Medicinal Herbs"
          subtitle="Examples"
          arrayOfExamples={cardItemsMedicinal}
        />
        <FourCard
          title="Culinary Herbs"
          subtitle="Examples"
          arrayOfExamples={cardItemsCulinary}
        />
        <FourCard
          title="Herb Accessories"
          subtitle="Examples"
          arrayOfExamples={cardItemsAccessories}
        />
        <FourCard
          title="Herbs for Tea"
          subtitle="Examples"
          arrayOfExamples={cardItemsTea}
        />
      </div>
    </div>
  );
};

export default home;
