// MainApp.js

import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./mainapp.scss";
export default function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
