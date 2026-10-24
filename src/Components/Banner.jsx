
import { IoAdd } from "react-icons/io5";
import { useEffect, useState } from "react";
const Banner = () => {
    const [friends,setFriends]=useState([])
    useEffect(()=>{
      fetch("/friendsData.json")
      .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    const onTrack=friends.filter(friend=>friend.status==="on track")
    const overDue=friends.filter(friend=>friend.status==="overdue")
   
    const interaction=16;
    return (
      <div className="hero py-10 flex flex-col">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6">
       Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
      </p>
      <button className="btn btn-primary"><IoAdd size={20}/>Add Friend</button>
    </div>
  </div>

<div className="grid grid-2 md:grid-cols-4 gap-4 p-3 w-full">
     <div className="shadow-xl gap-2 p-4 flex flex-col rounded-xl justify-center items-center">
<h1 className="text-2xl font-semibold">{friends.length}</h1>
<p>Total Friends</p>
</div>
     <div className="shadow-xl gap-2 p-4 flex flex-col justify-center items-center rounded-xl">
<h1 className="text-2xl font-semibold">{onTrack.length}</h1>
<p>On Track</p>
</div>
     <div className="shadow-xl gap-2 p-4 flex flex-col justify-center items-center rounded-xl">
<h1 className="text-2xl font-semibold">{overDue.length}</h1>
<p>over due</p>
</div>
     <div className="shadow-xl gap-2 p-4 flex flex-col justify-center items-center rounded-xl">
<h1 className="text-2xl font-semibold">{interaction}</h1>
<p>interations this month</p>
</div>

  </div>
</div>
    );
};

export default Banner;