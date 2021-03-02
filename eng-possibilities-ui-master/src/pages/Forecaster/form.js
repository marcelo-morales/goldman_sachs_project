import React from "react";
function Form() {
  const [state, setState] = React.useState({
    energyPercent: 0,
    retailPercent: 0,
    financialPercent: 0,
    pharmPercent: 0,
    airPercent: 0,
    techPercent: 0,
    gamingPercent: 0,
    realPercent: 0
  })
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('form submitted');
  }
  return (
    <div>
    <style>{`
      input{
        width: 50%
      }
      table{
      border-spacing: 200px 0;
      }
      tr { 
        border: solid;
        border-width: 1px 0;
      }
      td {
            padding:0 20px;
        }
    `}</style>
      <form onSubmit = {handleSubmit} id="form">
        <table>
          <tbody>
            <tr>
            <td id="InvestmentCategory"><b>Investment Category</b></td>
            <td name="Header1"><b>Header</b></td>
            <td name="Header2"><b>Header</b></td>
            <td name="Header3"><b>Header</b></td>
            <td name="Header4"><b>Header</b></td>
            <td name="Header5"><b>Header</b></td>
            <td name="Header6"><b>Header</b></td>
            <td name="Percentage"><b>Percentage</b></td>
            </tr>
            <tr>
              <td name="energy">Energy</td>
              <td name="einput1">0,000,000</td>
              <td name="einput2">0,000,000</td>
              <td name="einput3">0,000,000</td>
              <td name="einput4">0,000,000</td>
              <td name="einput5">0,000,000</td>
              <td name="einput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="energyPercent"/>
              </td>
            </tr>
            <tr>
              <td name="technology">Technology</td>
              <td name="tinput1">0,000,000</td>
              <td name="tinput2">0,000,000</td>
              <td name="tinput3">0,000,000</td>
              <td name="tinput4">0,000,000</td>
              <td name="tinput5">0,000,000</td>
              <td name="tinput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="techPercent"/>
              </td>
            </tr>
            <tr>
              <td name="finservices">Financial Services</td>
              <td name="finput1">0,000,000</td>
              <td name="finput2">0,000,000</td>
              <td name="finput3">0,000,000</td>
              <td name="finput4">0,000,000</td>
              <td name="finput5">0,000,000</td>
              <td name="finput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="financialPercent"/>
              </td>
            </tr>
            <tr>
              <td name="realestate">Real Estate</td>
              <td name="rinput1">0,000,000</td>
              <td name="rinput2">0,000,000</td>
              <td name="rinput3">0,000,000</td>
              <td name="rinput4">0,000,000</td>
              <td name="rinput5">0,000,000</td>
              <td name="rinput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="realPercent"/>
              </td>
            </tr>
            <tr>
              <td name="pharm">Pharmaceuticals</td>
              <td name="pinput1">0,000,000</td>
              <td name="pinput2">0,000,000</td>
              <td name="pinput3">0,000,000</td>
              <td name="pinput4">0,000,000</td>
              <td name="pinput5">0,000,000</td>
              <td name="pinput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="pharmPercent"/>
              </td>
            </tr>
            <tr>
              <td name="airline">Airline</td>
              <td name="ainput1">0,000,000</td>
              <td name="ainput2">0,000,000</td>
              <td name="ainput3">0,000,000</td>
              <td name="ainput4">0,000,000</td>
              <td name="ainput5">0,000,000</td>
              <td name="ainput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="airPercent"/>
              </td>
            </tr>
            <tr>
              <td name="retail">Retail</td>
              <td name="retinput1">0,000,000</td>
              <td name="retinput2">0,000,000</td>
              <td name="retinput3">0,000,000</td>
              <td name="retinput4">0,000,000</td>
              <td name="retinput5">0,000,000</td>
              <td name="retinput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="retailPercent"/>
              </td>
            </tr>
            <tr>
              <td name="gaming">Gaming</td>
              <td name="ginput1">0,000,000</td>
              <td name="ginput2">0,000,000</td>
              <td name="ginput3">0,000,000</td>
              <td name="ginput4">0,000,000</td>
              <td name="ginput5">0,000,000</td>
              <td name="ginput6">0,000,000</td>
              <td>
                  <input type="number" placeholder="0" step="0.01" name="gamingPercent"/>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <br></br>
      <button type="submit" form="form">Update</button>
    </div>
  );
}

export default Form;