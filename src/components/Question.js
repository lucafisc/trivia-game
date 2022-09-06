import React from "react";
import Answer from "./Answer";
import "../styles/Question.css";
import he from "he";
import shuffle from "fisher-yates";

export default function Question(props) {
  const [question, setQuestion] = React.useState(
    he.decode(props.data.question)
  );

  const incorrectAnswers = props.data.incorrect_answers;
  const correctAnswer = props.data.correct_answer;
  const [answersArray, setanswersArray] = React.useState(
    shuffle(incorrectAnswers.concat(correctAnswer))
  );

  const answers = answersArray.map((answer) => {
    return <Answer data={answer} chooseAnswer={chooseAnswer} />;
  });

  const [chosenAnswer, setChosenAnswer] = React.useState(false);
  function chooseAnswer(value) {
    setChosenAnswer(value);
    console.log(chosenAnswer);
  }

  React.useEffect(() => {}, []);
  return (
    <div className="question">
      <h1>{question}</h1>
      <div className="answers-container">{answers}</div>
      <hr className="horizontal-line"></hr>
    </div>
  );
}
