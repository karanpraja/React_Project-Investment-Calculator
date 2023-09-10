import React,{ useState } from "react";
import './Calculate.css'
import InvestForm from "./InvestForm";
import Result from "./Result";
const Calculate=(props)=>{
    const [userInput,setUserInput]=useState(0)

    const calculateData=(userinput)=>{
        setUserInput(userinput)
    }
   
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
    
        const yearlyData = []; // per-year results
    
        let currentSavings = userInput['current-savings']; // feel free to change the shape of this input object!
        let yearlySaving = userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        let expectedReturn =userInput['expected-return'] / 100;
        let duration = userInput['duration'];
        let totalInterest=null;
        let investedCapital=null;
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlySaving;
          totalInterest+=yearlyInterest;
          investedCapital=currentSavings-totalInterest;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            savingsEndOfYear: currentSavings,
            yearlyInterest: yearlyInterest,
            totalInterest:totalInterest,
            investedCapital: investedCapital,
          });
        }
    // do something with yearlyData ...
    return (<div>
<InvestForm InvestmentForm={calculateData}/>
{!userInput&&<p style={{textAlign:'center'}}>No investments found</p>}
{userInput&&<Result data={yearlyData}/>}
    </div>)
}
export default Calculate;