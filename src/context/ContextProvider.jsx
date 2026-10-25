import { toast } from "react-toastify";
import { Context } from "./CreateContext";
import { useState } from "react";


const ContextProvider = ({children}) => {
const [timelines,setTimelines]=useState([])
const [loading,setLoading]=useState(true)
    const handleCallLink=(name)=>{
        toast.success(`${name} successfully added to Timeline`)
        const type="call"
        const today=new Date()
        const timelineObj={
            name,
            type,
            today
        }
        const timelineArr=[...timelines,timelineObj]
    setTimelines(timelineArr)
    }
    const handleMessageLink=(name)=>{
   toast.success(`${name} successfully added to Timeline`)
        const type="message"
        const today=new Date()
        const timelineObj={
            name,
            type,
            today
        }
        const timelineArr=[...timelines,timelineObj]
    setTimelines(timelineArr)
    }
    const handleVideoLink=(name)=>{
         toast.success(`${name} successfully added to Timeline`)
        const type="video"
        
        const timelineObj={
            name,
            type,
            today:new Date()
        }
        const timelineArr=[...timelines,timelineObj]
    setTimelines(timelineArr)
    }
   
    const obj={
        handleCallLink,
        handleMessageLink,
        handleVideoLink,
        timelines,
        setTimelines,
        loading,
        setLoading
    }


    return (
      <Context.Provider value={obj}>
        {children}
      </Context.Provider>
    );
};

export default ContextProvider;