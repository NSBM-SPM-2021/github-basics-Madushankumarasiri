import './App.css';
import Form from './Components/Form';
import Expenses from './Components/Expenses';
import Pagination from './Components/pagination';
import { paginate } from './Components/utils/paginate';
import { useState, useEffect } from 'react';

function App() {

  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getExpenses = async () => {
      const expensesFromServer = await fetchExpenses();
      console.log(expensesFromServer);
      setExpenses(expensesFromServer);
    }
    getExpenses();
  }, [expenses])

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
    const data = await res.json()
    setExpenses([...expenses, data]);
  }

  //For pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const totalCount = expenses.length;
  const pageSize = 5;
 // const expensesForDisplay = paginate(expenses, currentPage, pageSize);

  return (
    <div className="container-fluid mt-0">
  <div className="row">
    <div className="col-3 heading pt-3">
      Expense Tracker
    </div>
    <div className="col-5">
      <Expenses expenses={paginate(expenses, currentPage, pageSize)}/>
      <Pagination itemCount={totalCount} 
            pageSize={pageSize}
            currentPage= {currentPage } 
            onPageChange={ handlePageChange } />
    </div>
    <div className="col-4">
      <Form onAdd={addExpense}/>
    </div>
  </div>
</div>
  );
}

export default App;
