import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  //hook for getting the api
  const [birthData, setBirthData]= useState([]);

  //hook for running the api
  useEffect(()=>{
    //to get the api
    fetch("https://api.data.gov.my/data-catalogue/?id=births&limit=50").then((response)=>response.json()).then((birthData)=>{
      setBirthData(birthData);
    }).catch((e)=>{
      console.log("There is something wrong")
    })
  }, [])

  return (
    <div>

      <table>
        <tr>
          <th>Date</th>
          <th>State</th>
          <th>Births</th>
        </tr>
        {
          //take data from api to insert into our table
          birthData.map((birth)=>(
            <tr>
              <td>{birth.date}</td>
              <td>{birth.state}</td>
              <td>{birth.births}</td>
            </tr>
          ))
        }
      </table>

    </div>
  )
}

export default App;
