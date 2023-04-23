import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1024px) {
      font-size: 60%;
    }

    @media (max-width: 768px) {
        font-size: 57.5%;
    }
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: #17151D;
    color: white;
  }
`;

export const Wrapper = styled.div`
  padding: 2.5rem 0;
`;

export const Background = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90rem;
  width: 90%;
  margin: 0 auto 7.5rem;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
    justify-content: flex-start;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;

  span {
    color: #ffd88e;
    margin-left: 5px;
  }
`;

export const LogoIcon = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  background-color: #ffd88e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

export const QuestionBundleContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto 7.5rem;
  position: relative;
  z-index: 1;
  width: 90%;
`;

export const QuestionBundleHeading = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const QuestionBundleMain = styled.div`
  background-color: #1d1b24;
  padding: 2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  background-color: #211f29;
  border-radius: 1.25rem;
  padding: 2rem 2.5rem;
`;

export const QuestionHeader = styled.div`
  margin-right: auto;
`;

export const QuestionHeading = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: none;
  color: white;
  transition: color 0.5s ease;
  flex-shrink: 0;

  &:hover {
    color: #3e63ff;
  }
`;

export const QuestionType = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0.5;
`;

const Tag = css`
  width: 11rem;
  height: 3.5rem;
  border-radius: 7.5px;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
`;

export const QuestionDifficulty = styled.div`
  ${Tag}
  ${(props) => {
    if (props.difficulty === "easy")
      return `
        background-color: #232D2E;
        color: #32A55E;
    `;

    if (props.difficulty === "medium")
      return `
        background-color: #38282F;
        color: #ff7665;
    `;

    if (props.difficulty === "hard")
      return `
        background-color: #38222B;
        color: #FF3C3C;
    `;
  }}
`;

export const QuestionSolution = styled.a`
  ${Tag}
  background-color: #3E63FF;

  ${(props) =>
    !props.hasSolution &&
    `
    background-color: #282633;
    color: #706C81;
    pointer-events: none;
  `}
`;
