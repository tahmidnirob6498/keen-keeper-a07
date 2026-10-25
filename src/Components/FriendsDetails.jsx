import { use, useContext } from "react";
import { FiArchive } from "react-icons/fi";
import { LuMessageSquareText } from "react-icons/lu";
import { MdOutlineCall, MdOutlineDelete, MdSnooze } from "react-icons/md";
import { RiVideoOnLine } from "react-icons/ri";
import { useParams } from "react-router";
import { Context } from "../context/CreateContext";

const friendsApi=fetch("/friendsData.json").then(res=>res.json())
const FriendsDetails = () => {
  const {handleVideoLink,handleMessageLink,handleCallLink}=useContext(Context)
    const friends=use(friendsApi)
    const {id}=useParams()
    const selectedFriend=friends.find(friend=>friend.id===parseInt(id))
    const {name,picture,next_due_date,goal,bio,tags,days_since_contact,status}=selectedFriend


    return (
        <div className="md:flex gap-4 py-5 rounded-xl  ">
                <div className="text-center flex-[30%] card bg-base-100 shadow-sm py-3 p-1">
  <figure className="p-0">
    <img
      src={picture}
      alt="friendspic"
      className="rounded-[50%] w-1/3 " />
  </figure>
  <div className=" p-0 items-center justify-center text-center">
    <h2 className="text-xl font-medium pt-2">{name}</h2>
      <div className="w-1/2 mx-auto">
      <p className={`px-2 text-center text-white py-1 my-2 rounded-xl ${status==="on track"? "bg-green-400": status==="almostdue" ? "bg-orange-300" : "bg-red-400"  }`}>{status}</p>
    </div>
    <div className="flex w-full gap-5 items-center justify-between ">{tags.map((tag,i)=><p key={i} className="bg-green-100  w-1/2 rounded-xl p-0 m-0">{tag}</p>)}</div>
  <p className="text-xs italic py-2 pt-3 text-gray-800">"{bio}"</p>
  </div>
  <div className="flex items-center gap-2  text-gray-700 text-sm justify-center shadow-2xl my-1 py-2"><MdSnooze/><p>Snooze 2 Weeks</p></div>
  <div className="flex items-center gap-2  text-gray-700 text-sm justify-center shadow-2xl my-1 py-2"><FiArchive /><p>Archive</p></div>
  <div className="flex items-center gap-2 text-sm justify-center shadow-2xl my-1 py-2 text-red-500"><MdOutlineDelete /><p>Delete</p></div>
</div>
        <div className="flex-[70%] flex flex-col gap-4 ">

         <div className="grid grid-cols-3">
             <div className="shadow-xl gap-2 py-5 flex flex-col  items-center rounded-xl">
<h1 className="text-2xl text-primary font-semibold">{days_since_contact}</h1>
<p className="text-gray-700">Days Since Contact</p></div>
   <div className="shadow-xl gap-2 p-4 flex flex-col justify-center items-center rounded-xl">
<h1 className="text-2xl text-primary font-semibold">{goal}</h1>
<p className="text-gray-700">Goal(Days)</p></div>
   <div className="shadow-xl gap-2 p-4 flex flex-col justify-center items-center rounded-xl">
<h1 className="text-2xl text-primary font-semibold">{next_due_date}</h1>
<p className="text-gray-700">Next Due</p></div>
 </div>   

<div className="bg-white shadow-sm flex justify-between items-start">
   <div className=" gap-2 p-4 flex flex-col justify-center  rounded-xl  text-sm">
<h1 className="font-semibold text-gray-700">Relationship Goal</h1>
<p>Connects Every <span className="font-semibold">30 days</span></p></div>
<p className="bg-gray-200 text-xs p-1 m-1">Edit</p>
    
</div>   
<div>
       <div className=" shadow-sm bg-white gap-2 p-4 flex flex-col justify-center  rounded-xl ">
<h1 className=" text-sm text-gray-600 font-semibold">Quick Check In</h1>
<div className="grid grid-cols-3 gap-3 text-center w-full h-full mt-3">
    <button onClick={()=>handleCallLink(name)} className="bg-gray-200 text-center  p-3 rounded-xl">
        <MdOutlineCall size={22} className="mx-auto m-2" />
        <p>Call</p>
    </button>
    <button onClick={()=>handleMessageLink(name)} className="bg-gray-200 text-center  p-3 rounded-xl">
        <LuMessageSquareText  size={22} className="mx-auto m-2"  />
        <p>Message</p>
    
    </button>
    <button onClick={()=>handleVideoLink(name)} className="bg-gray-200 text-center  p-3 rounded-xl">
        <RiVideoOnLine   size={22} className="mx-auto m-2" />
        <p>Video</p>
        </button>
</div>
</div>        
            
          
          
  </div> 
        </div></div>
    );
};

export default FriendsDetails;