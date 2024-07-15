import { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const token = Cookies.get('token');
    if (token) {
      setAuthHeader(token);
    }
  }, []);

  const setAuthHeader = (token) => {
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  };

  const register = async (userData) => {
    setLoader(true);
    try {
      const res = await axiosInstance.post("/user/signup", userData);
      if (res && res.status === 200) {
        setAuthHeader(res.data.token);
        setUser(res.data.user);
        
        Cookies.set('user', JSON.stringify(res.data.user), {
          secure: window.location.protocol === 'https:',
          sameSite: 'Strict',
          expires: 1
        });

        Cookies.set('token', res.data.token, {
          secure: window.location.protocol === 'https:',
          sameSite: 'Strict',
          expires: 1
        });
        return res.data;

      } else {
        throw new Error(res.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error.response?.data || error);
      throw error;
    } finally {
      setLoader(false);
    }
  };

  const login = async (email, password) => {
    setLoader(true);
    try {
      const res = await axiosInstance.post("/user/signin", { email, password });
      if (res && res.status === 200) {
        setAuthHeader(res.data.token);
        setUser(res.data.user);

        Cookies.set('user', JSON.stringify(res.data.user), {
          secure: window.location.protocol === 'https:',
          sameSite: 'Strict',
          expires: 1
        });

        Cookies.set('token', res.data.token, {
          secure: window.location.protocol === 'https:',
          sameSite: 'Strict',
          expires: 1
        });
        
        return res.data;
      } else {
        throw new Error(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      throw error;
    } finally {
      setLoader(false);
    }
  };

  const logout = async () => {
    setLoader(true);
    try {
      setAuthHeader(null);
      setUser(null);
      Cookies.remove('user');
      Cookies.remove('token');
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    } finally {
      setLoader(false);
    }
  };

  const authInfo = {
    user,
    register,
    login,
    logout,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
