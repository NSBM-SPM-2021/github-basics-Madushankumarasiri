import Expense from './Expense';
import Total from './Total';

const Expenses = ({expenses}) => {

    return ( 
        <>
        <h3 className="mt-4 p-2">My Expenses</h3>
        <Total/>
       {expenses.map((expense) => (
           <Expense key={expense.expenseId} expense={expense}/>
       ))}
        </>
     );
}
 
export default Expenses;