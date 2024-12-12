import slotifyLogo from "/Users/aryapathak/eventSchedulingApp/client/frontend/src/assets/images/slotifyLogo.png"



const FirstNavbar = () => {

  return (
    <div className="absolute top-0 left-0 w-full mt-[50px] border-b-2 border-b-black-100 ">
        <nav className="flex mb-[5px]  ">
          <img src={slotifyLogo} className="h-[45px] mb-[20px] ml-[25px]"></img>
          <ul className="flex gap-[50px] ml-[400px] ">
            <li className="text-[18px] text-[#2C2C2C] font-bold">Product</li>
            <li className="text-[18px] text-[#2C2C2C] font-bold">Solutions</li>
            <li className="text-[18px] text-[#2C2C2C] font-bold">Enterprise</li>
            <li className="text-[18px] text-[#2C2C2C] font-bold">Pricing</li>
            <li className="text-[18px] text-[#2C2C2C] font-bold">Resources</li>
            <li className="text-[15px] text-[#2c2c2c] font-normal mt-[3px]">Signup</li>
          </ul>
          <button className="bg-[#3793FF] py-[3px] px-[8px] text-[white]  rounded-[8px] ml-[20px] align-center mb-[30px]">Get Started</button>
        </nav>
    </div>
  )
}


export default FirstNavbar