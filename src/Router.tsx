import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/to" Component={() => <p>HI</p>} />
    </Routes>
  );
}
