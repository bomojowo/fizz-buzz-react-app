import { useState } from "react";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const [currentNumber, setCurrentNumber] = useState<number>(1)
  const [storedNumberArray, setStoredNumberArray] = useState<(string)[]>([])

 

  const handleFizzBuzz =() => {
    if(currentNumber % 5 === 0 && currentNumber % 3 ===0){
      setStoredNumberArray([...storedNumberArray, 'Fizz-Buzz',',']);
    } else{
      if(currentNumber % 5 === 0){
        setStoredNumberArray([...storedNumberArray, 'Buzz',',']);
      } else{
        if(currentNumber % 3 ===0){
          setStoredNumberArray([...storedNumberArray, 'Fizz',','])
        } else{
          setStoredNumberArray([...storedNumberArray, currentNumber.toString(),','])
        }
      }
    }
  }

  
  
  const handleNextNumber = () => {
    setCurrentNumber(currentNumber => currentNumber + 1)
  }

  const handleNextClick = () => {
    handleFizzBuzz();
    handleNextNumber();

  }
  


  //when next is clicked
    //decude whetehr current number is a fizz or buzz and write to array
    //current number is current number + 1


  return(
  <>
   <h1>{greet("World")}</h1>
   <p>current number: {currentNumber}</p>
   <p>stored numbers: {storedNumberArray}</p>
   <button onClick={() => handleNextClick()}>Next</button>
   
   </>
  )
}

export default App;