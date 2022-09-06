export default function Start(props) {
  return (
    <div className="start-container">
      <h1>Quizzical</h1>
      <h3>A geography trivia game!</h3>
      <button onClick={props.startGame}>Start quiz</button>
    </div>
  );
}
