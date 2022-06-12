import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      {!user && (
        <>
          <Link to="/auth/login">Login</Link>
          &nbsp; | &nbsp;
          <Link to="/auth/signup">Sign up</Link>
        </>
      )}

      {user && (
        <>
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link to="/newlisting">Create Listing</Link>
          &nbsp; | &nbsp;
          <Link to="/listings">Listings</Link>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      )}
      {!user}
    </nav>
  );
}
