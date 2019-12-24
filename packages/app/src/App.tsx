import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SimpleButton from "./components/SimpleButton/SimpleButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout
        left={<SimpleButton text="left" />}
        right={null}
        center={null}
        header={null}
      />
    </div>
  );
};

export default App;
