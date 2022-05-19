import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import CompaniesPage from "./pages/CompaniesPage";

import AuthPage from "./pages/AuthPage";
import CompanyPage from "./pages/CompanyPage";

import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import OfferPage from "./pages/OfferPage";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="offer/:id" element={<OfferPage />} />
        <Route path="companies" element={<CompaniesPage />} />
        <Route path="companies/:id" element={<CompanyPage />} />
        <Route path="register" element={<AuthPage register={true} />} />
        <Route path="login" element={<AuthPage login={true} />} />
        <Route path="profile" element={<EditProfilePage />} />
        <Route path="profile/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
