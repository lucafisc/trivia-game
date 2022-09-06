import React from "react";
import Question from "./Question";

export default function Quiz(props) {
  const [newGame, setNewGame] = React.useState(true);
  const [triviaData, setTriviaData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();
      setTriviaData(data.results);
    }
    fetchData();
  }, [newGame]);

  const questions = triviaData.map((question) => {
    return <Question data={question} />;
  });

  return (
    <div className="quiz-container">
      {questions}
      <button>Check answers</button>;
    </div>
  );
}
