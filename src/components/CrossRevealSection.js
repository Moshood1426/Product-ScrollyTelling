import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledCrossRevealContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%;

  .crossRevealImage {
    width: 100%;
    height: 100%;
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0);
  }

  .afterImage img {
    transform: translate(-100%, 0);
  }

  .crossRevealImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .person_content {
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;
    .person_name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }
    .person_job {
      line-height: 1.3;
      font-weight: 400;
      font-size: 17px;
      letter-spacing: -0.022em;
    }
  }
  .landscape_wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0 0;
    .quote_sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: white;
    }
    .author_name {
      line-height: 1.14;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0;
      color: white;
      padding-top: 20px;
    }
  }
`;

const CrossRevealSection = ({
  name,
  job,
  face,
  landscape,
  sentenceOne,
  sentenceTwo,
  crossSection
}) => {
  // animate the container one way
  const containerRef = useRef();
  // and animate the image the opposite way at thesame time
  const imageRef = useRef();
  // specify the point we want anim to start
  const triggerRef = useRef();
  // target the person container
  const personRef = useRef();
  // target the quote container
  const quoteRef = useRef();

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: () => "+=" + triggerRef.current.offsetWidth,
        scrub: true,
        pin: true,
        markers: true,
        anticipatePin: 1, 
      },
    });

    crossRevealTween
      .fromTo(containerRef.current, { [crossSection]: 100, x: 0 }, { [crossSection]: 0 })
      .fromTo(imageRef.current, { [crossSection]: -100, x: 0 }, { [crossSection]: 0 }, 0)
      .from(personRef.current, { autoAlpha: 0 }, 0)
      .from(quoteRef.current, { autoAlpha: 0, delay: 0.26 }, 0);
  }, [crossSection]);

  return (
    <StyledCrossRevealContainer ref={triggerRef}>
      <div className="crossRevealImage">
        <img src={face} alt="" />
        <div className="person_content" ref={personRef}>
          <h3 classname="person_name">{name}</h3>
          <p className="person_job">{job}</p>
        </div>
      </div>
      <div className="crossRevealImage afterImage" ref={containerRef}>
        <img src={landscape} alt="" ref={imageRef} />
      </div>
      <div className="landscape_wrapper" ref={quoteRef}>
        <p className="quote_sentence">
          {sentenceOne} <br /> {sentenceTwo}
        </p>
        <p className="author_name">{name}</p>
      </div>
    </StyledCrossRevealContainer>
  );
};

export default CrossRevealSection;
