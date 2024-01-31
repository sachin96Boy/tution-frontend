import Login from "./pages/login";
import Profile from "./pages/profile";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Register from "./pages/register";



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        
          <Route path="/" element={<Login />} />
            
          

          <Route path="/Register" element={<Register/>}/>
           

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
