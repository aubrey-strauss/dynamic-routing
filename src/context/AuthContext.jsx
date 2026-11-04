import { createContext, useState, useContext } from "react";

// 1. Create the context (the empty "shared box")
const AuthContext = createContext(null);

// 2. The Provider: holds the login state and shares it with the app
// It’s called a Provider because it provides the data to everything inside it.
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. A shortcut so other files can grab the auth info easily
//This is a custom hook. In React, “hooks” are functions starting with use that hook into React’s features.
export function useAuth() {
  return useContext(AuthContext);
}
