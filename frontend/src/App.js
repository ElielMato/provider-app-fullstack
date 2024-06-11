import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Navbar/>
      
      <Routes>
        <Route exact path="/home" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={ <Register />}/>
      </Routes>
    </main>
  );
}

export default App;