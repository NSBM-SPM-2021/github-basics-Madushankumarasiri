import './App.css';
import Form from './Components/Form';
import Expenses from './Components/Expenses';
import { useState, useEffect } from 'react';

function App() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      const expensesFromServer = await fetchExpenses();
      console.log(expensesFromServer);
      setExpenses(expensesFromServer);
    }
    getExpenses();
  }, [])

  //Fetching All Expenses
  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:28045/api/Expenses");
    const data = await res.json();
  
    return data;
  }

  //Add Expense Method
  const addExpense = async (expense) => {
    const res = await fetch("http://localhost:28045/api/Expenses", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(expense)
    })
  }
  return (
    <div className="container-fluid mt-0">
  <div className="row">
    <div className="col-3 heading pt-3">
      Expense Tracker
    </div>
    <div className="col-5">
      <Expenses expenses={expenses}/>
    </div>
    <div className="col-4">
      <Form onAdd={addExpense}/>
    </div>
  </div>
</div>
  );
}

export default App;
