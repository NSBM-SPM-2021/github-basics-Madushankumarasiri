import moment from "moment";

const Expense = ({expense}) => {
    const date = moment(expense.date);
    return (
       <div className="item">
           <p className="description">{expense.description}</p>
           <small className="text-muted">{date.format('MMM Do YYYY - h:mm a')}</small>
           <h6 className="item-value">Rs. {expense.expenseValue}</h6>
       </div>
     );
}
 
export default Expense;