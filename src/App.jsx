import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error from "./pages/Error";
import AdminPage from "./pages/Admin";
import WriteForm2 from "./pages/Post";
import Detail2 from "./pages/Post/PostDetail";

export default function App() {
  const [session, setState] = useState(null);

  let location = useLocation();

  useEffect(() => {
    const jsonString = localStorage.getItem("session");
    if (jsonString) {
      setState(JSON.parse(jsonString));
    }
  }, [location]);
  2;

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="write" element={<WriteForm2 />} />
        <Route path="update/:id" element={<WriteForm2 />} />
        <Route path="post/:id" element={<Detail2 />} />
        {/* 업글전  */}
        {/* <Route path="write2" element={<Write />} /> */}
        {/* <Route path="write2/:id" element={<Write />} /> */}
        {/* <Route path="/write/writeDetail2/:id" element={<WriteDetail />} /> */}
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
