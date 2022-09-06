import Answer from "./Answer";
import "../styles/Question.css";

export default function Question(props) {
  const incorrectAnswers = props.data.incorrect_answers;
  const answers = incorrectAnswers.map((answer) => {
    return <Answer data={answer} />;
  });
  return (
    <div className="question">
      <h1>{props.data.question}</h1>
      <div className="answers-container">{answers}</div>
      <hr className="horizontal-line"></hr>
    </div>
  );
}
