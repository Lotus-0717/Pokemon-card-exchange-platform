
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Index from "./pages/Index";
import Store from "./pages/Store";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { SwiperContextProvider } from './Context';

function App() {
  return (
    <Router>
      <SwiperContextProvider>
        <Header />
        <main className="pt-20 pr-8 pl-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
      </SwiperContextProvider>
    </Router>
  );
}

export default App;
