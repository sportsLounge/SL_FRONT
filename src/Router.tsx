import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

export default function Router() {
  return (
    <Routes>
      <Route path="/sports_lounge" Component={() => <Main />} />
    </Routes>
  );
}
