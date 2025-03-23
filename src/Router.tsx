import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LoginPage from "./components/customs/LoginPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/tutee" Component={() => <Main />} />
      <Route path="/tutee/login" Component={() => <LoginPage />} />
      <Route path="/somepath2" Component={() => <p>Temp route2</p>} />
    </Routes>
  );
}
