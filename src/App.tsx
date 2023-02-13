import "./App.css";
import React from "react";
import Thanks from "./components/Thanks";
import RateForm from "./components/RateForm";
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState<Number>(0);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  return (
    <div className="App">
      {isSubmit ? (
        <Thanks activeButton={activeButton} />
      ) : (
        <RateForm
          activeButton={activeButton}
          setIsSubmit={setIsSubmit}
          setActiveButton={setActiveButton}
        />
      )}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Görkem Karamolla</a>.
      </div>
    </div>
  );
}

export default App;
