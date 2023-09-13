import {Route, Routes} from "react-router";
import Template from "../templates/Template";
import MainPage from "../pages/Main";

const MyRoutes = () => {
    return (
        <Routes>
            <Route element={<Template />}>
                <Route path='/' element={<MainPage />}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes;
