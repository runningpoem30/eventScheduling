import slotifyLogo from "/Users/aryapathak/eventSchedulingApp/client/frontend/src/assets/images/slotifyLogo.png"




const FirstNavbar = () => {

  return (
    <div className="absolute top-0 left-0 w-full mt-50px">
        <nav className="flex">
          <img src={slotifyLogo} className="h-[25px]"></img>
          <ul className="flex gap-[40px] ml-[100px] ">
            <li>Product</li>
            <li>Solutions</li>
            <li>Enterprise</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Signup</li>
          </ul>
          <button className="bg-[#3793FF] px-3 text-[white]  rounded-[5px]">Get Started</button>
        </nav>
    </div>

  )
}


export default FirstNavbar