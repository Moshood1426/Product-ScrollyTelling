import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import box from "../assets/images/box.png";
import nightCream from "../assets/images/nightCream.png";
import dayCream from "../assets/images/dayCream.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledTextSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #080f0f;
  color: #00efeb;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    width: 60%;
  }
`;

const StyledProductSection = styled.div`
position: relative;
  width: 100vw;
  height: 100vh;
  background: #080f0f;
  color: #fff;

  .product_wrapper {
    height: 100vh;
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-row: 1fr 2fr 1fr;
    place-content: center;

    .product_image {
        grid-row: 2;
        grid-column: 2 / span 1;
        align-self: end;
        justify-self: end;
        max-width: 100%
    }

    p {
        font-weight: 600;
        font-size: 20px;
        margin: 0 0 8px 0;

    }

    .product_text_left {
        display: grid;
        grid-column: 1;
        text-align: right;
        height: 100%;
        align-content: center;
        grid-row: 2;
    }
    .product_text_right {
        display: grid;
        grid-column: 3;
        height: 100%;
        align-content: center;
        grid-row: 2;
    }
    .ghost {
        display: none;
        transform: translateX(8%)
    }
    .product1 img {
        width: 60%;
        margin: auto;
    }
    .product2 img {
        width: 40%;
        margin: auto;
    }
    .product3 img {
        width: 40%;
        margin: auto;
    }
  }
`;

const ProductsSection = () => {
  const textSectionTriggerRef = useRef();
  const productSectionTriggerRef = useRef();
  const productWrapperRef = useRef();
  const boxTextRef = useRef();
  const boxRef = useRef();
  const nightCreamRef = useRef();
  const dayCreamRef = useRef();
  const nightAndDayCreamTextRef = useRef();

  useEffect(() => {

  }, [])

  return (
    <>
      <StyledTextSection ref={textSectionTriggerRef}>
        <p className="intro-text">
          Lorem ipsum dolor veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          Quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </StyledTextSection>
      <StyledProductSection ref={productSectionTriggerRef}>
        <div ref={productWrapperRef} className="product_wrapper">
          <div ref={boxTextRef} className="product_text_left">
            <p>CLEAN & PURE</p>
            <p>Cleansing foam</p>
          </div>
          <div ref={boxRef} className="product_image product1">
            <img className="product1_image_behind" alt="" src={box} />
          </div>
          <div ref={nightCreamRef} className="product_image product2">
            <img alt="" src={nightCream} />
          </div>
          <div ref={dayCreamRef} className="product_image product3 ghost">
            <img alt="" src={dayCream} />
          </div>
          <div ref={nightAndDayCreamTextRef} className="product_text_right">
            <p>REPAIRING</p>
            <p>Foam cleaner</p>
          </div>
        </div>
      </StyledProductSection>
    </>
  );
};

export default ProductsSection;
