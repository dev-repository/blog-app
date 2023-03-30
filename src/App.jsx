import { Routes, Route, Outlet, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Search from "./pages/Search";

export default function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="write" element={<Write />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
  );
}