import { useContext } from "react";
import { Context } from "../context/CreateContext";
import TimeLIneCard from "./TimeLIneCard";
import NoData from "./NoData";


const TimeLine = () => {
    const {timelines}=useContext(Context)
    console.log(timelines)
    if(timelines.length===0){
        return <NoData></NoData>
    }
    return (
        <div>
        {
            timelines.map((timeLine)=><TimeLIneCard timeLine={timeLine}></TimeLIneCard>)
        } 
        </div>
    );
};

export default TimeLine;