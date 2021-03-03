import {React} from "react";

var energy = 5
var tech = 20
var fin = 5
var realEst = 15
var pharma = 10
var airline = 10
var retail = 10
var gaming = 15

const updatePercentages = () => {
  energy = 5
  tech = 15
  fin = 5
  realEst = 15
  pharma = 15
  airline = 10
  retail = 10
  gaming = 15
}

const getRequest = () => {
  // Simple GET request to get investment options using fetch
  fetch('http://localhost:7779/api/v1/forecast')
  .then(response => response.json())
  .then(data => console.log(data));
}

const postRequest = () => {
  updatePercentages();
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"request" :{"Energy":energy, "Technology":tech, "Financial Services":fin, "Real Estate":realEst, "Pharmaceuticals":pharma, "Airline":airline, "Retail":retail, "Gaming":gaming}})
  };
  fetch('http://localhost:7779/api/v1/forecast', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
}

const ForecasterHome = () => {
  return (
    <>
       <div>
            <h3>Investment Forecaster</h3>
            <p>Logic goes here</p>
            <button text="Get" onClick={getRequest}>test get</button>
            <button text="Post" onClick={postRequest}>test post</button>
        </div>
    </>
  );
};

export default ForecasterHome;