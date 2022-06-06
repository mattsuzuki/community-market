import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import Listings from '../Listings/Listings';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          </Routes>
        </>    
    </main>
  );
}

export default App;
