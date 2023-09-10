import React,{useState} from "react";
import "./InvestForm.css"
const InvestForm=(props)=>{
    const InitialState={
        'current-savings':'',
        'yearly-contribution':'',
        'expected-return':'',
        'duration':''
    }
    const [userInput,setUserInput]=useState(InitialState)
    const userInputHandler=(input,value)=>{
        console.log(input,value)
setUserInput((prevuserInput)=>{
    return {...prevuserInput,[input]:+value}
    })
    }
    const onSubmitHandler=(event)=>{
event.preventDefault()
props.InvestmentForm(userInput)
    }

    const onResetHandler=()=>{
        setUserInput(InitialState)
    }


    return(<div>
        <form onSubmit={onSubmitHandler} onReset={onResetHandler} className="form">
          <div className="input-group">
            <p>
              <label htmlFor="current-savings">Current Savings ($)</label>
              <input  onChange={(event)=>userInputHandler('current-savings',event.target.value)} value={userInput['current-savings']} type="number" id="current-savings" />
            </p>
            <p>
              <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
              <input onChange={(event)=>userInputHandler('yearly-contribution',event.target.value)} value={userInput['yearly-contribution']} type="number" id="yearly-contribution" />
            </p>
          </div>
          <div className="input-group">
            <p>
              <label htmlFor="expected-return">
                Expected Interest (%, per year)
              </label>
              <input onChange={(event)=>userInputHandler('expected-return',event.target.value)}  value={userInput['expected-return']} type="number" id="expected-return" />
            </p>
            <p>
              <label htmlFor="duration">Investment Duration (years)</label>
              <input onChange={(event)=>userInputHandler('duration',event.target.value)} value={userInput['duration']} type="number" id="duration" />
            </p>
          </div>
          <p className="actions">
            <button type="reset" className="buttonAlt">
              Reset
            </button>
            <button type="submit" className="button">
              Calculate
            </button>
          </p>
        </form>
        </div>)
}
export default InvestForm;

// const [enteredCurrentSavings,setEnteredCurrentSavings]=useState('')
// const [enterdYearlySavings,setEnteredYearlySavings]=useState('')
// const [enteredInterest,setEnteredInterest]=useState('')
// const [enteredDuration,setEnteredDuration]=useState('')
// const currentSavingsHandler=(event)=>{
//     setEnteredCurrentSavings(event.target.value)
//     console.log(event.target.value)
// }
// const yearlySavingsHandler=(event)=>{
//     setEnteredYearlySavings(event.target.value)
// }
// const interestHandler=(event)=>{
//     setEnteredInterest(event.target.value)
// }
// const durationHandler=(event)=>{
//     setEnteredDuration(event.target.value)
// }
// const onSubmitHandler=(event)=>{
// event.preventDefault()//compulsory  to use it 
//     const InvestmentData=[
//         enteredCurrentSavings,
//         enterdYearlySavings,
//         enteredInterest,
//         enteredDuration
//     ]
//     props.InvestmentForm(InvestmentData)
// }
// const onResetHandler=()=>{
//     setEnteredCurrentSavings('')
//     setEnteredDuration('')
//     setEnteredInterest('')
//     setEnteredYearlySavings('')
// }
