import { Route, Routes } from "react-router-dom";

import { useContext } from "react";

import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import CompaniesPage from "./pages/CompaniesPage";

import AuthPage from "./pages/AuthPage";
import CompanyPage from "./pages/CompanyPage";

import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import OfferPage from "./pages/OfferPage";
import NotFound from "./pages/NotFound";
import AuthContext from "./components/context/auth-context";
import AccountPage from "./pages/AccountPage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <MainNavigation authCtx={authCtx} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="offers/:id" element={<OfferPage />} />
        <Route path="companies" element={<CompaniesPage />} />
        <Route path="companies/:id" element={<CompanyPage />} />
        {authCtx.accessLevel === 0 && (
          <>
            <Route path="register" element={<AuthPage register={true} />} />
            <Route path="login" element={<AuthPage login={true} />} />
          </>
        )}
        {authCtx.accessLevel !== 0 && (
          <>
            <Route path="profile" element={<AccountPage />} />
            <Route path="profile/:id" element={<ProfilePage />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
