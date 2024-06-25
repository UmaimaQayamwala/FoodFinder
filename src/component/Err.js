import { useRouteError } from "react-router-dom";
const Err=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>opps there is a typo error</h1>
            <h1>{err.status}</h1>
        </div>
    )
}
export default Err;