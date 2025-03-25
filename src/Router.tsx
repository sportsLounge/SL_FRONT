import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/tutee" Component={() => <Main />} />
      <Route path="/tutee/login" Component={() => <LoginPage />} />
    </Routes>
  );
}
