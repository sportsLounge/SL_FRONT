import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

export default function Router() {
  return (
    <Routes>
      <Route path="/PWA_DEMO" Component={() => <Main />} />
    </Routes>
  );
}
