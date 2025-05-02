import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import RedirectionPage from "./components/RedirectionPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/redirection" element={<RedirectionPage />} />
    </Routes>
  );
}
