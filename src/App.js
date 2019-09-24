import React from "react";
import Header from "./components/pgHeader";
import Gameboard from "./components/Gameboard";
import Gameboard from "./components/Gameboard";



import './App.css';

function App() {
  state = { clicked: [] }
  //logic

  cardClicked = () => {
    this.setState({ clicked: [...this.state.clicked, this.id] })
  }

  return (
    <div>
      <pgHeader />
      <Gameboard onClick={cardClicked} />
    </div>
  );
}

export default App;
