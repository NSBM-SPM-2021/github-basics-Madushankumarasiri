import './App.css';
import Form from './Components/Form';
import Expenses from './Components/Expenses';
import Pagination from './Components/pagination';
import { paginate } from './Components/utils/paginate';
import { useState, useEffect } from 'react';
import firebase2 from './Components/utils/firebase.js'

function App() {

  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const ref = firebase2.firestore().collection("expenses").orderBy("date", "desc");

  function getExpenses() {
    ref.onSnapshot((querySnapshot) => {
      const items =[];
      querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()});
      });
      //console.log(items);
      setExpenses(items);
    })
  }

  useEffect(() => {
    getExpenses(); 
    })

  //Add Expense Method
  const addExpense = (expense) => {
    const userRef = firebase2.firestore().collection("expenses").add({
      expenseValue: expense.expenseValue,
      description: expense.description,
      date: expense.date,
      category: expense.category 
    }); 
    setExpenses([...expenses, userRef]);
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
