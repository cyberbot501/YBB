import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing';
import EVENTS from './pages/events'
import PANEL from './pages/adminPanel'
import BLOG from './pages/blogpanel'
import BLOGr from './pages/blog'
import LOGINEVENT from "./pages/login"
import LOGINB from "./pages/loginb"
import PostPage from "./pages/seeblog"
export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <LANDINGPAGE />,
            index: true,
          },

          {
            path: "events",
            element: <EVENTS />,
            index: true,
          },

          {
            path: "panel",
            element: <PANEL />,
            index: true,
          },
          {
            path: "blogpanel",
            element: <BLOG />,
            index: true,
          },
          {
            path: "blog",
            element: <BLOGr />,
            index: true,
          },
          {
            path: "loginevent",
            element: <LOGINEVENT />,
            index: true,
          },
          {
            path: "loginblog",
            element: <LOGINB />,
            index: true,
          },

          {
            path: "post/:slug" ,
            element: <PostPage />,
            index: true,
          },
    ]);
    return routes;}
