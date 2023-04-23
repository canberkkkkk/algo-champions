import * as sc from "./styled";
import { QUESTION_BUNDLES } from "./constants";
import BackgroundImage from "./assets/bg.svg";
import QuestionSolution from "./components/QuestionSolution";

const App = () => {
  return (
    <sc.Wrapper>
      <sc.GlobalStyles />
      <sc.Background src={BackgroundImage} />
      <sc.LogoContainer>
        <sc.Logo>
          <sc.LogoIcon>😎</sc.LogoIcon>
          Algo <span>Champions</span>
        </sc.Logo>
      </sc.LogoContainer>
      {QUESTION_BUNDLES.map(({ date, questions }, i) => (
        <sc.QuestionBundleContainer key={i}>
          <sc.QuestionBundleHeading>{date}</sc.QuestionBundleHeading>
          <sc.QuestionBundleMain>
            {questions.map(({ name, link, type, difficulty, solutions }, j) => (
              <sc.QuestionContainer key={j}>
                <sc.QuestionHeader>
                  <sc.QuestionHeading href={link} target="_blank">
                    {name}
                  </sc.QuestionHeading>
                  <sc.QuestionType>{type}</sc.QuestionType>
                </sc.QuestionHeader>
                <sc.QuestionDifficulty difficulty={difficulty.toLowerCase()}>
                  {difficulty}
                </sc.QuestionDifficulty>
                <QuestionSolution solutions={solutions} />
              </sc.QuestionContainer>
            ))}
          </sc.QuestionBundleMain>
        </sc.QuestionBundleContainer>
      ))}
    </sc.Wrapper>
  );
};

export default App;
