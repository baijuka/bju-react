import React from 'react'
import Employee from './components/Employee'

const empList = [
    {name: 'Mohan Lal', designation: 'Actor', salary: 1500 },
    {name: 'Suresh Gopi', designation: 'MP', salary: 2100 },
    {name: 'Joy Alukka', designation: 'Investor', salary: 3000 },
    {name: 'Oommen Chandi', designation: 'Cleaner', salary: 500 }
  ]

function App() {
  return (
    <div>
        <h3>Employee List</h3>    
        {empList.map((emp, index)=> <Employee id={index} key={index} {...emp} />)}
    </div>
  )
}

export default App