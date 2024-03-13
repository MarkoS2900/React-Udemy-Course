import { useState } from "react";
import Header from "./components/Header/Header";
import UserUnput from "./components/user-input/UserInput";
import Results from "./components/results-table/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =
    userInput.duration > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.initialInvestment > 0 &&
    userInput.expectedReturn > 0;

  function handleChange(newValue, inputIdentifier) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserUnput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a data greater than zero</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
