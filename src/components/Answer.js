import he from "he";

export default function Answer(props) {
  let answer = props.data;
  answer = he.decode(answer);
  const classes = getAnswerClass(
    props.checkAnswers,
    props.selectedAnswer,
    props.correctAnswer,
    answer
  );

  return (
    <div className={classes} onClick={() => props.chooseAnswer(answer)}>
      <h2>{answer}</h2>
    </div>
  );
}

function getAnswerClass(shouldCheck, selected, correct, value) {
  if (shouldCheck) {
    if (selected === value) {
      return value === correct ? "answer correct" : "answer wrong";
    } else if (value === correct) {
      return "answer correct";
    } else {
      return "answer other";
    }
  } else {
    return value === selected ? "answer selected" : "answer";
  }
}
