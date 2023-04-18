import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Documentation from "./components/Documentation";
import Support from "./components/Support";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App() {
     return (
          <>
               <NavBar />

               <div className="mt-20 mb-3">
                    <Routes>
                         <Route path="/" element={<Landing />} />
                         <Route path="/about" element={<About />} />
                         <Route path="/documentation" element={<Documentation />} />
                         <Route path="/support" element={<Support />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/signup" element={<SignUp />} />
                         <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
               </div>
          </>
     );
}

export default App;
