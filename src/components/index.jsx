import React from "react";
import "../App.css";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div sx={{ display: "flex",
      flexDirection: "column",
      minHeight: "100vh"}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
