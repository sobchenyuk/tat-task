import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error-page.tsx";
import {GameStart} from "../pages/game-start";
import {Game} from "../pages/game";
import {GameOver} from "../pages/game-over";
import {LayoutApp} from "../layout/layout-app";

const router = createBrowserRouter([
    {
        element: <LayoutApp />,
        children: [
            {
                path: "/",
                element: <GameStart />
            },
            {
                path: "/game",
                element: <Game />
            },
            {
                path: "/game-over",
                element: <GameOver />
            }
        ],
        errorElement: <ErrorPage />
    },
]);
export default router;
