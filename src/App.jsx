import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error from "./pages/Error";
import WriteDetail from "./pages/Write/WriteDetail";
import AdminPage from "./pages/Admin";

export default function App() {
  const [session, setState] = useState(null);

  let location = useLocation();

  useEffect(() => {
    const jsonString = localStorage.getItem("session");
    if (jsonString) {
      setState(JSON.parse(jsonString));
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="write/:id" element={<Write />} />
        <Route path="/write/writeDetail/:id" element={<WriteDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Route>
      {session?.userType === "관리자" ? (
        <Route path="/admin">
          <Route index element={<AdminPage />} />
        </Route>
      ) : null}
    </Routes>
  );
}
