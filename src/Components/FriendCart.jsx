

const FriendCart = ({friend}) => {
    const {tags,status,days_since_contact,name,picture}=friend
    return (
        <div className="card bg-base-100 shadow-sm py-3 p-1">
  <figure className="p-0">
    <img
      src={picture}
      alt="friendspic"
      className="rounded-[50%] w-1/3 " />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="">{name}</h2>
    <p className="text-gray-700 text-xs p-0">{days_since_contact}d ago</p>
    <div className="flex w-full gap-5 items-center justify-between py-2">{tags.map(tag=><p className="bg-green-100 py-1 w-1/2 rounded-xl">{tag}</p>)}</div>
    <div className="card-actions">
      <p className={`px-2 text-white py-1 my-2 rounded-xl ${status==="on track"? "bg-green-400": status==="almostdue" ? "bg-orange-300" : "bg-red-400"  }`}>{status}</p>
    </div>
  </div>
</div>
    );
};

export default FriendCart;