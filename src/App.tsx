import { auth } from "./config/firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserData from "./context";
import Header from "./components/Header/Header";
import Index from "./pages/Index";
import Store from "./pages/Store";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  const [userData, setUserData] = useState({
    isLogin: auth.currentUser?.displayName ? true : false,
    userPhoto: auth.currentUser?.photoURL ? auth.currentUser?.photoURL : '',
    userName: auth.currentUser?.displayName ? auth.currentUser?.displayName : '',
    userEmail: auth.currentUser?.email ? auth.currentUser?.email : '',
    userId: auth.currentUser?.uid ? auth.currentUser?.uid : '',
  });

  return (
    <Router>
      <UserData.Provider value={{ userData, setUserData }}>
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
