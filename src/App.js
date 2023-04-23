import * as sc from "./styled";
import { QUESTION_BUNDLES } from "./constants";
import BackgroundImage from "./assets/bg.svg";

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
      {QUESTION_BUNDLES.map(({ date, questions }) => (
        <sc.QuestionBundleContainer>
          <sc.QuestionBundleHeading>{date}</sc.QuestionBundleHeading>
          <sc.QuestionBundleMain>
            {questions.map(
              ({ name, link, type, difficulty, solution, solved }) => (
                <sc.QuestionContainer>
                  <sc.QuestionHeader>
                    <sc.QuestionHeading href={link} target="_blank">
                      {name}
                    </sc.QuestionHeading>
                    <sc.QuestionType>{type}</sc.QuestionType>
                  </sc.QuestionHeader>
                  <sc.QuestionDifficulty difficulty={difficulty.toLowerCase()}>
                    {difficulty}
                  </sc.QuestionDifficulty>
                  <sc.QuestionSolution
                    href={solution}
                    target="_blank"
                    hasSolution={solution}
                  >
                    SOLUTION
                  </sc.QuestionSolution>
                </sc.QuestionContainer>
              )
            )}
          </sc.QuestionBundleMain>
        </sc.QuestionBundleContainer>
      ))}
    </sc.Wrapper>
  );
};

export default App;
