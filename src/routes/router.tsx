import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../pages/error-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
]);
export default router;
