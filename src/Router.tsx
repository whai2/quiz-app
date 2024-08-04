import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Quiz from "@/pages/Quiz";
import Result from "@/pages/Result";
import IncorrectNote from "@/pages/IncorrectNote";

import routes from "@/constants/routes";

const router = createBrowserRouter([
  {
    path: "",
    // element: <MainLayout />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.quiz,
        element: <Quiz />,
      },
      {
        path: routes.result,
        element: <Result />,
      },
      {
        path: routes.incorrectNote,
        element: <IncorrectNote />,
      },
    ],
  },
]);

export default router;