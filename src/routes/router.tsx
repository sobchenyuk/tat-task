import {createBrowserRouter} from "react-router-dom";
// import App from "../App.tsx";
import ErrorPage from "../pages/error-page.tsx";
import {HomePage} from "../pages/home-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
]);
export default router;
