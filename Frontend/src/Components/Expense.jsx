const Expense = ({expense}) => {
    return ( 
       <div className="item">
           <p className="description">{expense.description}</p>
           <small className="text-muted">{expense.date}</small>
           <h6 className="item-value">${expense.expenseValue}</h6>
       </div>
     );
}
 
export default Expense;