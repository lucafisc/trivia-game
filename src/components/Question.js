export default function Question(props) {
  console.log(props.data.question);
  return (
    <div className="question">
      <h1>{props.data.question}</h1>
    </div>
  );
}
