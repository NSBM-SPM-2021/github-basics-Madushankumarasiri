import './App.css';
import Form from './Components/Form';

function App() {
  const addExpense = async (expense) => {
    //console.log(expense);
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
      One of three columns
    </div>
    <div className="col-4">
      <Form onAdd={addExpense}/>
    </div>
  </div>
</div>
  );
}

export default App;
