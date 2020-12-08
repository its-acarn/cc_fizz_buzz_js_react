//button generate number
//return string fizz/buzz
//if statement % by 3 and 5 
//set number on change run function get output
import {useState, useEffect} from 'react';

const FizzBuzz = ()=> {
    const[number, setNumber] = useState(1);
    const [output, setOutput] = useState("")

    const addOne= ()=> {
        setNumber(number+1)
    }

// const fizzBuzz = () => {
   
// }

useEffect(()=>{
    if (number % 3 === 0 && number %5 === 0){
        setOutput( "FizzBuzz!!!!")
    }else if (number %5 === 0){
        setOutput( "Buzz")
    }else if (number %3 ===0 ){
        setOutput ("Fizz")
    }else { 
        setOutput(number)
    }
},[number])

    return (
        <div>
            <h1>FizzBuzz</h1>
            <button onClick={addOne}>Add Count By One</button>
            <h2>Input Number:{number}</h2>
            <h2>Output:{output}</h2>
        </div>
    )

}

export default FizzBuzz;


