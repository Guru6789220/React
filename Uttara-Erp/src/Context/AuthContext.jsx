import { createContext, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setuser] = useState(() => {
    const saved = localStorage.getItem("Auth-Item");
    return saved ? JSON.parse(saved) : null;
  });

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("Auth-Item", JSON.stringify(user));
    } else {
      localStorage.removeItem("Auth-Item");
    }
  }, [user]);

  

  const logout = () => {
    localStorage.removeItem("Auth-Item");
    setuser(null);
    navigate("/Login", { replace: true });  // ✅ Correct usage
  };

  const value = useMemo(() => ({ user, setuser, logout }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
