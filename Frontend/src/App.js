import './App.css';
import Form from './Components/Form';

function App() {
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
      <Form/>
    </div>
  </div>
</div>
  );
}

export default App;
