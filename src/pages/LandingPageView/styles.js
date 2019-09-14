import styled from "styled-components";

const LandingPage = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LandingLogo = styled.div`
  font-size: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const LandingTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default { LandingPage, LandingLogo, LandingTitle, StartButton };
