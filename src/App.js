import Header from "./components/Header";
import React from "react";
import CasesPage from "./pages/CasesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AwardsPage from "./pages/AwardsPage";
import LeadersPage from "./pages/LeadersPage";
import Nerd from "./pages/case/Nerd";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CasesPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/case/nerd" element={<Nerd />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
