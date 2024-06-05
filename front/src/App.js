import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route exact path="/home" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={ <Register />}/>
      </Routes>

    </div>
  );
}

export default App;
