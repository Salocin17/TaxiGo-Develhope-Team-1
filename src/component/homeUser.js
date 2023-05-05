import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import GoogleFonts from "google-fonts";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";

export function HomeUser() {
  React.useEffect(() => {
    GoogleFonts.add({
      Poppins: ["400", "700"],
    });
  }, []);

  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar />
        <div className="container-map"></div>
      </div>
    </div>
  );
}