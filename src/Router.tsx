import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

export default function Router() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/sports_lounge" Component={() => <Main />} />
=======
      <Route path="/" Component={() => <Main />} />
      <Route path="/somepath1" Component={() => <p>Temp route1</p>} />
      <Route path="/somepath2" Component={() => <p>Temp route2</p>} />
>>>>>>> 8d7f15a116af7ecab3634657f37a88657243462e
    </Routes>
  );
}
