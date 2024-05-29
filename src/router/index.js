import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Main from "@/pages/Layout/Main";
import P404 from "@/pages/404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: "main",
                element: <Main />
            },
        ]
    },
    {
        path: "*",
        element: <P404 />
    },
])

export default router;