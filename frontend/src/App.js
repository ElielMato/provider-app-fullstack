import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Navbar } from "./components/Navbar";
import { Provider } from "./components/Provider";
import { Routes, Route } from 'react-router-dom';
import { Customer } from "./components/Customer";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

function App() {
  return (
    <main className="scroll-smooth">
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/home" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={ <Register />}/>
        <Route exact path="/provider" element={ <Provider />}/>
        <Route exact path="/customers" element={ <Customer />}/>
        <Route exact path="/about" element={ <About />}/>
        <Route exact path="/contact" element={ <Contact />}/>
      </Routes>
    </main>
  );
}

export default App;