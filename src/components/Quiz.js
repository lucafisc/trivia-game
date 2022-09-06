import React from "react";
import Question from "./Question";

export default function Quiz(props) {
  const [newGame, setNewGame] = React.useState(true);
  const [triviaData, setTriviaData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=22&type=multiple"
      );
      const data = await res.json();
      setTriviaData(data.results);
    }
    fetchData();
  }, [newGame]);

  const [checkAnswers, setCheckAnswers] = React.useState(false);
  function toggleCheckAnswers() {
    setCheckAnswers((prevValue) => !prevValue);
  }

  const questions = triviaData.map((question) => {
    return <Question data={question} checkAnswers={checkAnswers} />;
  });

  return (
    <div className="quiz-container">
      {questions}
      <div className="check-container">
        {checkAnswers && <h1>You scored /5 correct answers</h1>}
        <button onClick={toggleCheckAnswers}>
          {checkAnswers ? "Play Again" : "Check answers"}
        </button>
      </div>
    </div>
  );
}
