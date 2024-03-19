import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login.jsx";
import { redirectToHome } from "./components/LoginForm.jsx";
import Home from "./routes/Home.jsx";
import Video from "./routes/Video.jsx";
import Shop from "./routes/Shop.jsx";
import Group from "./routes/Group.jsx";
import Game from "./routes/Game.jsx";
import { Provider } from "react-redux";
import facebookStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/marketplace",
        element: <Shop />,
      },
      {
        path: "/group",
        element: <Group />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={facebookStore}>
    <RouterProvider router={router} />
  </Provider>
);
