import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to="/auth">Login||Sign up</Link>
      &nbsp; | &nbsp;
      <Link to="/newlisting">Create Listing</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/listings">Listings</Link>
      { user &&
        <>
          &nbsp; | &nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
      }
    </nav>
  );
}