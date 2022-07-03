import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .contentWrapper {
    max-width: 900px;
    h2 {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #acacac;
    }
    h3 {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #080f0f;
    }
  }
`;

const ContentSection = (props) => {
  return (
    <Wrapper>
      <div className="contentWrapper">
        <h2>{props.title}</h2>
        <h3>{props.text}</h3>
      </div>
    </Wrapper>
  );
};

export default ContentSection;
