import { Routes, Route, Outlet, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error from "./pages/Error";
import WriteDetail from "./pages/Write/WriteDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="Register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="write" element={<Write />} />
        <Route path="write/:id" element={<Write />} />
        <Route path="/write/writeDetail/:id" element={<WriteDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}