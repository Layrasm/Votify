import React, {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// For Basic setup only please change
const NavBar = () => {

  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);
  

  const getRightNav = () => {
    
    if (user) {
      return (
        
          <div style={{ display : 'inline-block' }} onClick={() => handleLogout(history)}>Logout!</div>

      
      );
    } else {
      return (
        <div>
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
        </div>
      );
    }
  };

  return (



    <div style={styles.navbar}>
      {user && <Link to="/home">Home</Link>}
      <span style={{ margin:"5px"}}></span>
      {user && <Link to="/thingsDemo">Things</Link>}
      <span style={{ margin:"5px"}}></span>
      {user && <Link to="/MyAccount">My Account</Link>}
      <span style={{ margin:"5px" }}></span>
      {getRightNav()}
    </div>
  );
};

const styles = {
  navbar: {
    background: "white",
    outline: "2px solid",
    outlineColor: "black",
    padding: "10px",
    display: "inline-block",
    width: "100%",
    margin:"0px",
    marginBottom: "10px",

  },
};

export default NavBar;