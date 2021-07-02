import { useState } from "react";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const [number, setnumber] = useState<number>(1);
  const [numberArray, setnumberArray] = useState<string[]>([]);

  const handleFizzBuzz = () => {
    if (isFizzBuzz(number)) {
      //call helper fucntion here and pass in parameter from useState cll (number)
      setnumberArray([...numberArray, "FizzBuzz"]);
    } else {
      if (isBuzz(number)) {
        setnumberArray([...numberArray, "Buzz"]);
      } else {
        if (isFizz(number)) {
          setnumberArray([...numberArray, "Fizz"]);
        } else {
          setnumberArray([...numberArray, number.toString()]);
        }
      }
    }
  };

  //helper functions contain the logic

  //isFizzBuzz()
  //if number is a multiple of both 5 and 3
  //return FizzBuzz
  const isFizzBuzz = (number: number) => number % 5 === 0 && number % 3 === 0;

  //isFizz()
  //if number is a multiple of three
  //return fizz
  const isFizz = (number: number) => number % 5 === 0;
  //isBuzz()
  //if number a multiple of five
  //return buzz
  const isBuzz = (number: number) => number % 3 === 0;

  //nextFizzBuzzIteration()
  //if number is not a multiple of 5 or 3
  //return number

  const handleNextNumber = () => {
    setnumber((number) => number + 1);
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
        {numberArray.map((num: string, index): JSX.Element => {
          return <li key={index}>{num}</li>;
        })}
      </p>
      <hr />
      <button onClick={() => handleNextClick()}>Next</button>
    </>
  );
}

export default App;
