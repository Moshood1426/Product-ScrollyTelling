import React from "react";
import BackgroundHero from "./BackgroundHero";
import ForegroundHero from "./ForegroundHero";
import MidgroundHero from "./MidgroundHero";
import styled from "styled-components";

const Wrapper = styled.section`
position: relative;
width: 50vw;
height: 30vw;

`

const ParallaxHeroSection = () => {
  return (
    <Wrapper>
      <MidgroundHero />
      <ForegroundHero />
      <BackgroundHero />
    </Wrapper>
  );
};

export default ParallaxHeroSection
