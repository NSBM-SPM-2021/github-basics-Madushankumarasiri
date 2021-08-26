import moment from "moment";

const Expense = ({expense}) => {
    const date = moment(expense.date);
    return (
       <div className="item">
           <p className="description">{expense.description}</p>
           <small className="text-muted">{date.format('MMMM Do YYYY, h:mm:ss a')}</small>
           <h6 className="item-value">${expense.expenseValue}</h6>
       </div>
     );
}
 
export default Expense;