import { IoMdCall } from "react-icons/io";
import { MdVideocam } from "react-icons/md";
import { TbMessageCircleFilled } from "react-icons/tb";


const TimeLIneCard = ({timeLine}) => {
    const {name,today,type}=timeLine

    console.log(timeLine)
    return (
    <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="list-row flex items-center">
    <div>{type==="call"?<IoMdCall size={24}/> : type==="message" ? <TbMessageCircleFilled size={24} /> : <MdVideocam size={24} />}</div>
    <div>
      <div>{type} with {name}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{today.toDateString()}</div>
    </div>
 </li>
</ul>
    );
};

export default TimeLIneCard;