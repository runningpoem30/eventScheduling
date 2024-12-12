const Event = () => {

  return (
    <div>
        <div>
          <span className="block">Event Name</span>
          <input type="text" className="h-[45px] w-[300px] text-base border border-black pl-4 rounded-md"></input>
        </div>

        <div className="flex" >
          <div> 
          <span className="block">Date</span>
          <input type="text" className="h-[40px] w-[150px] text-base border border-black pl-4 rounded-md"></input>
          </div>
          
          <div>
            <span className="block">Time</span>
            <input></input>
          </div>
        </div>

    </div>
  )
}


export default Event