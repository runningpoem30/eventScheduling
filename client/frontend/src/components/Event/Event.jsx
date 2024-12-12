import Calendar from '../Calendar/Calendar'

const Event = () => {

  return (
    <div>
      <h1 className='absolute left-10 top-40 text-[50px] font-bold text-[#3E3E3E]'>Add an Event</h1>
      <div className='flex gap-[100px] mt-[60px]'>
        <div className='mt-[60px]'>
        <Calendar></Calendar>
        </div>
        <div className='w-[1px] h-[500px] bg-black'></div>

      <div>
      <form>
        <div className="space-y-1">
        <div>
          <span className="block text-[#414141] font-medium">Event Name</span>
          <input type="text" className="h-[45px] w-[320px] text-base border border-black pl-4 rounded-md"></input>
        </div>

        <div className="flex gap-[20px]"  >
          <div> 
          <span className="block text-[#414141] font-medium">Date</span>
          <input type="text" className="h-[40px] w-[150px] text-base border border-black pl-4 rounded-md"></input>
          </div>
          
          <div>
            <span className="block text-[#414141] font-medium">Time</span>
            <input type="text" className="h-[40px] w-[150px] text-base border border-black pl-4 rounded-md"></input>
          </div>
        </div>

        <div>
          <span className="block text-[#414141] font-medium">Venue</span>
          <input type="text" className="h-[45px] w-[320px] text-base border border-black pl-4 rounded-md"></input>
        </div>

        <div>
            <span className="block text-[#414141] font-medium">Remind before</span>
            <input type="text" className="h-[40px] w-[150px] text-base border border-black pl-4 rounded-md"></input>
         </div>

         <div>
          <span className="block text-[#414141] font-medium">Description</span>
          <input type="text" className="h-[100px] w-[400px] text-base border border-black pl-4 rounded-md "></input>
        </div>
        </div>
     
      </form>
        

        <button className='mt-[10px] bg-[#D37BFF] px-10 text-[white] py-3 rounded-[5px] font-medium'>Add Event</button>
        <button className='ml-[5px] mt-[10px] bg-[#D6D6D6] px-10 text-[white] py-3 rounded-[5px] text-[#414141] font-medium'>Back</button>
    </div>
    </div>

    </div>
    
    
  )
}


export default Event