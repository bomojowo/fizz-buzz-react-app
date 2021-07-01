import { useState } from "react";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [storedNumberArray, setStoredNumberArray] = useState<string[]>([]);

  const handleFizzBuzz = () => {
      if (isFizzBuzz(currentNumber)){ //call helper fucntion here and pass in parameter from useState cll (currentNumber)
        setStoredNumberArray([...storedNumberArray, "FizzBuzz"])  
      } else {
      if (isBuzz(currentNumber)) {
        setStoredNumberArray([...storedNumberArray, 'Buzz'])
      } else {
        if (isFizz(currentNumber)) {
          setStoredNumberArray([...storedNumberArray, 'Buzz'])
        } else {
          setStoredNumberArray([
            ...storedNumberArray,
            currentNumber.toString(),
          ]);
        }
      }
    }
  };

  //helper functions contain the logic

  //isFizzBuzz()
  //if number is a multiple of both 5 and 3
  //return FizzBuzz
  const isFizzBuzz = (currentNumber: number) => currentNumber % 5 === 0 && currentNumber % 3 === 0 
    

  //isFizz()
  //if number is a multiple of three
  //return fizz
  const isFizz = (currentNumber: number) => currentNumber % 5 === 0
  //isBuzz()
  //if number a multiple of five
  //return buzz
  const isBuzz = (currentNumber: number) => currentNumber % 3 === 0

  //nextFizzBuzzIteration()
  //if number is not a multiple of 5 or 3
  //return number

  const handleNextNumber = () => {
    setCurrentNumber((currentNumber) => currentNumber + 1);
  };

  const handleNextClick = () => {
    handleFizzBuzz();
    handleNextNumber();
  };

  //when next is clicked
  //decude whetehr current number is a fizz or buzz and write to array
  //current number is current number + 1

  return (
    <>
      <h1>{greet("Reg")}</h1>
      <p>
        <b>Fizz, Buzz or Fizz-Buzz:</b>{" "}
        {storedNumberArray.map((num: string, index): JSX.Element => {
          return <li key={index}>{num}</li>;
        })}
      </p>
      <hr />
      <button onClick={() => handleNextClick()}>Next</button>
    </>
  );
}

export default App;
