import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={() => <Main />} />
      <Route path="/somepath1" Component={() => <p>Temp route1</p>} />
      <Route path="/somepath2" Component={() => <p>Temp route2</p>} />
    </Routes>
  );
}
