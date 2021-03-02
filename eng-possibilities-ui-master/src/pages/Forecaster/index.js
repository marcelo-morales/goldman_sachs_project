import React, { useEffect, useState } from "react";
// import InvestingForeCastService;

const ForecasterHome = () => {
  const [investmentDetails, setInvestmentDetails] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/investment-details.json').then((response) => {setInvestmentDetails(response.json())})
  }, [])
  return (
    <>
       <div>
            <h3>Investment Forecaster</h3>
            <input></input>
            <button id='Submit'>Submit</button>
          </div>
    </>
  );
};

// document.getElementById('Submit').addEventListener('click', InvestingForeCastService.getInvestmentOptions())
export default ForecasterHome;
