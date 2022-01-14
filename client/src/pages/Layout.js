import {  Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"


export default function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">
        <Outlet className="outlet"/>
      </div>
    </div>
  );
}

