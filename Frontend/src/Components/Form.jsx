import { FcAlarmClock } from 'react-icons/fc';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FcTodoList } from 'react-icons/fc';
import { FcSalesPerformance } from 'react-icons/fc';
import { FcViewDetails } from 'react-icons/fc';


const Form = () => {
    return ( 
      <div className="p-2" style={{width: "80%"}}>
        <h3 className="mt-4 mb-4 add">Add Transaction</h3>
      <form>
      <div className="mb-3">
        <label className="form-label"><FcMoneyTransfer /> Value</label>
        <input type="text" className="form-control"/>     
      </div>
      <div className="mb-3">
        <label className="form-label"><FcAlarmClock /> Date</label>
        <input type="datetime-local" className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label"><FcTodoList /> Category </label>
        <select className="form-select test">
        <option>Select a Category</option>
        <option value="1">Title 1</option>
        <option value="2">Title 2</option>
     </select>
      </div>
      <div className="mb-3">
      <label className="form-label"><FcViewDetails/> Description </label>
      <textarea className="form-control" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-primary shadow-none mt-2">SUBMIT</button>
    </form>
    </div>
     );
}
 
export default Form;