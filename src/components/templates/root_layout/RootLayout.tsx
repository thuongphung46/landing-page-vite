import React from "react";
import NavBarMenu from "../../Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { FooterCecond } from "../../../atoms/footer_second";

const RootLayout = () => {
  const auth = true;
  if (auth) {
    return (
      <div
        className={"main-app"}
        style={{
          // display: "flex",
          flex: 1,
          // height: "100vh",
          // flexDirection: "row",
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
        <FooterCecond />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default RootLayout;
