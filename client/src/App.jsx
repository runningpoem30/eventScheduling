import { Button } from "@/components/ui/button"; // if alias works
import { Routes , Route } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {

  return (
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
   
  );
}

export default App;
