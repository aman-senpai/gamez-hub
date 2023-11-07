import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "games/:id", element: <GameDetailPage /> },
        ],
    },
]);

export default router;
