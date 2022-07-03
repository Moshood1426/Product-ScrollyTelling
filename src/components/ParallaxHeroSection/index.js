import React, { useRef, useEffect} from "react";
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
  const foregroundHeroRef = useRef()

  useEffect(() => {
    const onMove = ({clientX, clientY }) => {
      foregroundHeroRef.current.moveTo(clientX / 4, clientY/8)
    }

    const onLeave = () => {
      foregroundHeroRef.current.moveTo(0, 0)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener("mouseleave", onLeave)

    return () => document.removeEventListener("mousemove", onMove)
  }, [])


  return (
    <Wrapper>
      <MidgroundHero />
      <ForegroundHero ref={foregroundHeroRef}/>
      <BackgroundHero />
    </Wrapper>
  );
};

export default ParallaxHeroSection
