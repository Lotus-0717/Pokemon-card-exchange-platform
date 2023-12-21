import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Index from "./pages/Index";
import Store from "./pages/Store";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20 pr-8 pl-8">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
