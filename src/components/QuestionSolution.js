import { useState, useRef, useEffect } from "react";
import * as sc from "../styled";

const QuestionSolution = ({ solutions }) => {
  const ref = useRef();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const clickOutsideFn = (e) => {
      if (e.target !== ref.current) setIsActive(false);
    };

    document.addEventListener("click", clickOutsideFn);
    return () => document.removeEventListener("click", clickOutsideFn);
  }, []);

  return (
    <sc.QuestionSolution
      ref={ref}
      target="_blank"
      hasSolution={solutions}
      onClick={() => setIsActive((active) => !active)}
    >
      SOLUTIONS
      {solutions && isActive && (
        <sc.Dropdown>
          {Object.keys(solutions).map((lang, i) => (
            <sc.DropdownItem target="_blank" href={solutions[lang]} key={i}>
              {lang}
            </sc.DropdownItem>
          ))}
        </sc.Dropdown>
      )}
    </sc.QuestionSolution>
  );
};

export default QuestionSolution;
