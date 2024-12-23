import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing';
import EVENTS from './pages/events'
import PANEL from './pages/adminPanel'
import BLOG from './pages/blogpanel'

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
    ]);
    return routes;
}