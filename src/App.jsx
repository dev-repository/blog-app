import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./routes/Home";


export default function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
  );
}
