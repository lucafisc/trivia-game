import he from "he";

export default function Answer(props) {
  let answer = props.data;
  answer = he.decode(answer);
  const classes =
    answer === props.selectedAnswer ? "answer selected" : "answer";
  return (
    <div className={classes} onClick={() => props.chooseAnswer(answer)}>
      <h2>{answer}</h2>
    </div>
  );
}
