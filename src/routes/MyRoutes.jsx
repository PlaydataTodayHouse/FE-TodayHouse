import { Route, Routes } from "react-router";
import Template from "../templates/Template";
import MainPage from "../pages/Main";
import MediaPost from "../pages/MediaPost";
import MediaPostTemplate from "../templates/MediaPostTemplate";
import ShoppingPage from "../pages/Shopping";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import PromotionApprove from "../pages/PromotionApprove";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/promotionApprove" element={<PromotionApprove />} />
      <Route element={<Template />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
      </Route>
      <Route element={<MediaPostTemplate />}>
        <Route path="/media-post" element={<MediaPost />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
