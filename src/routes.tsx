import { createBrowserRouter } from "react-router";

import { RootLayout } from "@/components/layout/RootLayout";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Tech } from "./pages/Tech";

// BASE_URL is "/" at the root and "/repo/" when hosted on GitHub project pages.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "tech", element: <Tech /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename },
);
