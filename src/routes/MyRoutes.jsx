import { Route, Routes } from "react-router";
import Template from "../templates/Template";
import MainPage from "../pages/Main";
import MediaPost from "../pages/MediaPost";
import MediaPostTemplate from "../templates/MediaPostTemplate";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route element={<MediaPostTemplate />}>
        <Route path="/media-post" element={<MediaPost />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
