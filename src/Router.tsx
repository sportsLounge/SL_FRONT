import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import RedirectionPage from "./components/RedirectionPage";
import CanvasClass from "./components/R3F_Class/CanvasClass";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={CanvasClass} />
      <Route path="/main" element={<Main />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/redirection" element={<RedirectionPage />} />
    </Routes>
  );
}
