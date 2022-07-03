import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParallaxHeroSection";
import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection";
import FaceOne from "./assets/images/faceOne.png";
import LandscapeOne from "./assets/images/landscapeOne.png";
import ProductsSection from "./components/ProductsSection";

const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
  opacity: 0;
  clip-path: polygon(50% 100%, 0% 100%, 100% 100%);
  transform: translateY(20px);
`;

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ProductsSection />
      <ContentSection
        title={"Take Care"}
        text={
          "Lorem ipsum dolor veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name={"Christain  Dior"}
        job={"Founder, CEO"}
        sentenceOne={"We only launch"}
        sentenceTwo={"What we love"}
        crossSection={"xPercent"}
      />
      <ContentSection
        title={"New Section"}
        text={
          "Lorem ipsum dolor veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name={"Christain  Dior"}
        job={"Founder, CEO"}
        sentenceOne={"We only launch"}
        sentenceTwo={"What we love"}
        crossSection={"yPercent"}
      />
    </>
  );
}

export default App;
