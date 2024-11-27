import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing';
import EVENTS from './pages/events'


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
    ]);
    return routes;
}