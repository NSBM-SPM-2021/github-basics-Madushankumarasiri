import { useState } from 'react';


const Form = ({ onAdd }) => {
  const [expenseValue, setExpenseValue] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('0');
  const [description, setDescription] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(!expenseValue){
        alert('Please add a Value');
        return
    }
    if(isNaN(expenseValue)){
      alert('Please enter a valid value');
      return
    }
    if(!description){
      alert('Please add a description');
      return
    }
    onAdd({ expenseValue, date, category, description });
    setExpenseValue('');
    setDate('');
    setCategory("0");
    setDescription('');
}

    return ( 
      <div className="p-2" style={{width: "80%"}}>
        <h3 className="mt-4 mb-4 add">Add Expense</h3>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label"> Value</label>
        <input type="text" className="form-control" maxLength="7" value={expenseValue}
        onChange={(e) => setExpenseValue(e.target.value)} />    
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input type="datetime-local" className="form-control" value={date}
        onChange={(e) => setDate(e.target.value)} required/>
      </div>
      <div className="mb-3">
        <label className="form-label">Category </label>
        <select className="form-select test" value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="0">Select a Category</option>
        <option value="Education">Education</option>
        <option value="Food">Food</option>
        <option value="Debts">Debts</option>
        <option value="Donations">Donations</option>
        <option value="Health">Health</option>
        <option value="Other">Other</option> 
     </select>
      </div>
      <div className="mb-3">
      <label className="form-label">Description </label>
      <textarea className="form-control" rows="4" value={description}
      onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      </div>
      <button id="SubmitButton" type="submit" className="btn btn-primary shadow-none mt-2">SUBMIT</button>
    </form>
    </div>
     );
}
 
export default Form;