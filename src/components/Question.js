import Answer from "./Answer";
import "../styles/Question.css";
import he from "he";

export default function Question(props) {
  let question = props.data.question;
  question = he.decode(question);
  const incorrectAnswers = props.data.incorrect_answers;
  const answers = incorrectAnswers.map((answer) => {
    return <Answer data={answer} />;
  });

  console.log(props.data.question);
  return (
    <div className="question">
      <h1>{question}</h1>
      <div className="answers-container">{answers}</div>
      <hr className="horizontal-line"></hr>
    </div>
  );
}
