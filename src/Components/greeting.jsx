import moment from "moment";

const Greeting = () => {
    
    return ( 
        <div className="total">
            <h4 className="greeting-heading">Welcome Back!</h4>
            <h6>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h6>
        </div>
     );
}
 
export default Greeting;