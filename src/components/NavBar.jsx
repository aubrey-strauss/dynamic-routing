// Link = React Router's version of an <a> tag. It changes the page WITHOUT
// reloading the whole site, so the login state isn't wiped out.
// useNavigate = a hook that lets our CODE send the user to a page
// (navigate is a verb: "go somewhere").
import { Link, useNavigate } from "react-router-dom";

// useAuth = our shortcut hook that pulls the login info out of AuthContext.
// "../" means go up one folder (out of components/, into src/).
import { useAuth } from "../context/AuthContext.jsx";

function NavBar() {
  // Destructuring: unpack only the two things this file needs from useAuth().
  // isAuthenticated = true/false, are they logged in?
  // logout = function that sets isAuthenticated back to false.
  const { isAuthenticated, logout } = useAuth();

  // navigate is now a function we can call, like navigate("/login").
  const navigate = useNavigate();

  // Log the user out, then send them to the login page.
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    // <nav> = HTML tag meant for navigation links (semantic HTML).
    <nav>
      {/* These two links always show, logged in or not. */}
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>

      {/* Ternary (3 parts): condition ? if-true : if-false
          "Are they logged in? If yes, show Admin + Logout. If no, show Login." */}
      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          {/* Button, not a Link, because logging out DOES something
              instead of just going to a page. */}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default NavBar;
