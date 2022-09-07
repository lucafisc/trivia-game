import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const [triviaData, setTriviaData] = React.useState([]);
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=22&type=multiple"
    );
    const data = await res.json();
    setTriviaData(data.results);
    setCheckAnswers(false);
  }

  function toggleCheckAnswers() {
    setCheckAnswers(true);
  }

  function addPoint() {
    setScore((prevScore) => prevScore + 1);
  }

  function newGame() {
    fetchQuestions();
    setScore(0);
  }

  const questions = triviaData.map((question) => {
    return (
      <Question
        data={question}
        checkAnswers={checkAnswers}
        addPoint={addPoint}
        key={question.question}
      />
    );
  });

  return (
    <div className="quiz-container">
      {questions}
      <div className="check-container">
        {checkAnswers && <h1>You scored {score}/5 correct answers</h1>}
        <button onClick={checkAnswers ? newGame : toggleCheckAnswers}>
          {checkAnswers ? "Play Again" : "Check answers"}
        </button>
      </div>
    </div>
  );
}
