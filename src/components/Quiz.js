import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const [gameCounter, setGameCounter] = React.useState(0);
  const [triviaData, setTriviaData] = React.useState([]);
  const [checkAnswers, setCheckAnswers] = React.useState(false);

  React.useEffect(() => {
    console.log(triviaData);
  }, [triviaData]);

  React.useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=22&type=multiple"
      );
      const data = await res.json();
      setTriviaData(data.results);
      setCheckAnswers((prevValue) => !prevValue);
    }
    fetchQuestions();
  }, [gameCounter]);

  function toggleCheckAnswers() {
    setCheckAnswers((prevValue) => !prevValue);
  }

  const questions = triviaData.map((question) => {
    console.log(question);
    return (
      <Question
        data={question}
        checkAnswers={checkAnswers}
        key={question.question}
      />
    );
  });

  function newGame() {
    setGameCounter((prevValue) => prevValue + 1);
  }

  return (
    <div className="quiz-container">
      {questions}
      <div className="check-container">
        {checkAnswers && <h1>You scored /5 correct answers</h1>}
        <button onClick={checkAnswers ? newGame : toggleCheckAnswers}>
          {checkAnswers ? "Play Again" : "Check answers"}
        </button>
      </div>
    </div>
  );
}
