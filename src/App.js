import React from "react";
import "./styles/App.css";
import Start from "./components/Start";
import Background from "./components/Background";
function App() {
  const [startScreen, setStartScreen] = React.useState(true);
  function startGame() {
    setStartScreen(false);
  }
  return (
    <div className="app">
      <Background />
      {startScreen && <Start startGame={startGame} />}
    </div>
  );
}

export default App;
