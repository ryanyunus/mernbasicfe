// AppRoutes.js

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import MainApp from "../../pages/MainApp";
import CreateBlog from "../../pages/CreateBlog";
import DetailBlog from "../../pages/DetailBlog";
import { Home, Login, Register } from "../../pages";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="detail-blog" element={<DetailBlog />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
