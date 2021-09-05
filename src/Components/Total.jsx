const Total = ({expensesForTotal}) => {

    let total = expensesForTotal.reduce(function(prev, current) {
        return prev + +current.expenseValue
      }, 0);

    return ( 
        <div className="total">
            <h6 className="total-heading">My Total</h6>
            <h5 className="total-value">Rs. {total}</h5>
            <hr/>
        </div>
     );
}
 
export default Total;