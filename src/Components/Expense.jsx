import moment from "moment";
import { FcShop } from 'react-icons/fc';
import { FcDepartment } from 'react-icons/fc';
import { FcDonate } from 'react-icons/fc';
import { FcReading } from 'react-icons/fc';
import { FcDebt } from 'react-icons/fc';
import { FcSalesPerformance } from 'react-icons/fc';

const Expense = ({expense}) => {
    const date = moment(expense.date);
    let view = <FcSalesPerformance/>
    switch(expense.category) {
        case "Education":
            view = <FcReading title="Education"/>
            break;
        case "Food":
            view = <FcShop title="Food"/>
            break;
        case "Debts":
            view = <FcDebt title="Debts"/>
            break;
        case "Donations":
            view = <FcDonate title="Donations"/>
            break;
        case "Health":
            view = <FcDepartment title="Health"/>
            break;
        case "0":
            view = <FcSalesPerformance title="Other"/>
            break;
        default:
            view = <FcSalesPerformance title="Other"/>
            break;
    }

    return (
       <div className="item">
           <p className="description">{view} &nbsp;{expense.description}</p>
           <small className="text-muted">{date.format('MMM Do YYYY - h:mm a')}</small>
           <h6 className="item-value">Rs. {expense.expenseValue}</h6>
       </div>
     );
}
 
export default Expense;