import React from "react";
import "./styles/App.css";
import Start from "./components/Start";
import Background from "./components/Background";
import Quiz from "./components/Quiz";
function App() {
  const [startScreen, setStartScreen] = React.useState(true);
  function startGame() {
    setStartScreen(false);
  }
  return (
    <div className="app">
      <Background />
      {startScreen && <Start startGame={startGame} />}
      {!startScreen && <Quiz />}
    </div>
  );
}

export default App;
