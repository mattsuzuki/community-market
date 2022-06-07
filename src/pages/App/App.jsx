import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import Listings from '../Listings/Listings';
import CreateListingPage from '../CreateListingPage/CreateListingPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
      {/* <div  className="container"> */}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/newlisting" element={<CreateListingPage />} />
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage setUser={setUser} />} />
          </Routes>
          {/* </div> */}
        </>    
    </main>
  );
}

export default App;
