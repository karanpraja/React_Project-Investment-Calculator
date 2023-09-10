import React from "react";
import "./Result.css"
const Result=(props)=>{
  const formatter=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits:2,
    maximumFractionDigits:2
  })
    return (<div>
        {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data)=>(<tr>
            <td>{data.year}</td>
            <td>{formatter.format(data.savingsEndOfYear)}</td>
            <td>{formatter.format(data.yearlyInterest)}</td>
            <td>{formatter.format(data.totalInterest)}</td>
            <td>{formatter.format(data.investedCapital)}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
    )
}
export default Result;