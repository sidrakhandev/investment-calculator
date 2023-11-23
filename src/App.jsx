import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 6000,
    annualInvestment: 100000,
    expectedReturn: 6,
    duration: 12,
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }

  const isValidDuration = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {!isValidDuration && (
        <p className="center">Enter a Duration greater or equal to 1</p>
      )}

      {isValidDuration && <Results input={userInput} />}
    </>
  );
}

export default App;
