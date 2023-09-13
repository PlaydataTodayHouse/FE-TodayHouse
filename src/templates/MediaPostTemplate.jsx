import MyHeader from "../components/MyHeader";
import Menubar from "../components/Menubar";
import { Outlet } from "react-router";
import MyFooter from "../components/MyFooter";
import MediaPostHeader from "../components/MediaPostHeader";

const MediaPostTemplate = () => {
  return (
    <>
      <MediaPostHeader />
      <Outlet />
    </>
  );
};
export default MediaPostTemplate;
