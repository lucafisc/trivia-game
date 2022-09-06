import he from "he";

export default function Answer(props) {
  let answer = props.data;
  answer = he.decode(answer);
  return (
    <div className="answer">
      <h2>{answer}</h2>
    </div>
  );
}
