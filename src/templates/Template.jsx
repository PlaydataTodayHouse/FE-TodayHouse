import MyHeader from "../components/MyHeader";
import { Outlet } from "react-router";
import MyFooter from "../components/MyFooter";
import Menubar from "../components/Menubar";

const Template = () => {
  return (
    <>
      <MyHeader />
      <Menubar />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default Template;
