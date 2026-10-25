import { useContext } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { Context } from "../context/CreateContext";



const Stats = () => {
    const {timelines}=useContext(Context)
    const call=timelines.filter(timeLine=>timeLine.type==="call")
    const video=timelines.filter(timeLine=>timeLine.type==="video")
    const message=timelines.filter(timeLine=>timeLine.type==="message")
    const data=[
        {name:"call",value:call.length},
        {name:"video",value:video.length},
        {name:"message",value:message.length}
       ]
    const colors=['#64748B',"#244D3F","#6366f1"]
    return (
  <div className="w-full h-96 flex justify-center items-center">
          <PieChart width={400} height={300}>
         <Pie data={data}
              dataKey="value"
               nameKey="name"
              cx="50%"
              cy="50%"
             fill="#6366f1"
             label
               >
            {
                data.map((item,index)=><Cell key={item.name} fill={colors[index]}></Cell>)
            }
                </Pie>
         <Tooltip></Tooltip>
        <Legend></Legend>

</PieChart>
  </div>
    );
};

export default Stats;