import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import MainPage from "../pages/MainPage";
import Terminal from "../pages/Terminal";
import Leaflet from "../pages/Leaflet";
import AGGridPage from "../pages/AGGridPage";
import Crud from "../pages/Crud";
import Todo from "../pages/Todo";
import Tree from "../pages/Tree";
import InnoTemplate from "../pages/InnoTemplate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true, 
        element: <MainPage/>
      },
      {
        path: "terminal",
        element: <Terminal/>
      },
      {
        path: "leaflet",
        element: <Leaflet/>,
      },
      {
        path: "aggrid",
        element: <AGGridPage/>
      },
      {
        path: "crud",
        element: <Crud/>
      },
      {
        path: "todo",
        element: <Todo/>
      },
      {
        path: "tree",
        element: <Tree/>
      },
      {
        path: "inno-template",
        element: <InnoTemplate/>
      },
    ]
  },
])