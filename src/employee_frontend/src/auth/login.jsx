import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const AuthLoginOut = () => {
  const { isAuthenticated, login, principal, logout } = useAuth();
  const router=useNavigate()
  const handlelogin=()=>{
    router("/home")
  }
  return (
    <>
      {isAuthenticated ? (
        <button
          c
          className="border bg-purple-400 p-2 rounded-md"
    
          onClick={handlelogin}
        >
        Click to continue
        </button>
      ) : (
        <button onClick={login} className="border bg-purple-400 p-2 rounded-md">
          Login with internet idenity
        </button>
      )}
    </>
  );
};

export default AuthLoginOut;
