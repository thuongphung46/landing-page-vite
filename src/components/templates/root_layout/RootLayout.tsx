import React from "react";
import NavBarMenu from "../../Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { FooterCecond } from "../../../components/atoms/footer_second";
import { Footer } from "../../../components";

const RootLayout = () => {
  const auth = true;
  if (auth) {
    return (
      <div
        className={"main-app"}
        style={{
          flex: 1,
        }}
      >
        <NavBarMenu />
        <div
          id={"main-view"}
          className={`w-full`}
          style={{
            height: "100%",
            flex: 1,
            overflow: "auto",
          }}
        >
          <Outlet />
        </div>
        <Footer />
        <FooterCecond />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default RootLayout;
