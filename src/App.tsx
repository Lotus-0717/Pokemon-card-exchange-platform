import { auth } from "./config/firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserData from "./context";
import Header from "./components/Header/Header";
import Index from "./pages/Index";
import Store from "./pages/Store";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  console.log(auth);
  const [Data, setUserData] = useState({
    isLogin: false,
    userPhoto: '',
    userName: '',
    userEmail: '',
    userId: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        setUserData({
          isLogin: true,
          userPhoto: user.photoURL || '',
          userName: user.displayName || '',
          userEmail: user.email || '',
          userId: user.uid || ''
        });
      } else {
        // User is signed out.
        setUserData({
          isLogin: false,
          userPhoto: '',
          userName: '',
          userEmail: '',
          userId: ''
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <UserData.Provider value={{ Data, setUserData }}>
        <Header />
        <main className="pt-20 px-4 md:px-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
      </UserData.Provider>
    </Router>
  );
}

export default App;
