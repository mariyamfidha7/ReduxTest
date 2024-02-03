import { useContext, useEffect } from "react";
import { Auth } from "./AuthContext";

const LoginPage = () => {

    const { setLoggedIn, loggedIn }= useContext(Auth);

    const handleLogin = () => {
      // Simulate a login action (in a real app, this would involve authentication)
      setLoggedIn(true);
    };

    useEffect(()=>{

        if(loggedIn)
        window.location.href="/data-table"

    },[loggedIn])
  
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };

  export default LoginPage;