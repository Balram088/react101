import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  // const [token, setToken] = useState("");

  const [isAuth ,setIsAuth] = useState(false);
   const navigate = useNavigate();

  const login = () => {
    setIsAuth(true)
    navigate("/posts")
  };
  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  
  return (
  <AuthContext.Provider value ={{ isAuth, login , logout}} > 
  {children}
  </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
