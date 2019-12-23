import React from "react";
import "./App.css";
import SimpleButton from "./components/SimpleButton/SimpleButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SimpleButton text="test text" />
      </header>
    </div>
  );
};

export default App;
