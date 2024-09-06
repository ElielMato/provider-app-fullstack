import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import { UserContext } from './context/UserContext'
import { PublicRoutes } from './routes/PublicRoutes'
import { PrivateRoutes } from './routes/PrivateRoutes'

function App() {
  const [user, setUser] = useState({
    logged: false,
    role: '',
    roleType: '',
    id: ''
  });

  console.log('User Logged', user.logged);

  return (
    <main className="scroll-smooth">
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route path="/*" element={user.logged ? <PrivateRoutes /> : <PublicRoutes />} />
        </Routes>
      </UserContext.Provider>
    </main>
  );
}

export default App;
