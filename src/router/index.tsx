import { HomePage } from "@/app/page";
import { PrivatePage } from "@/app/private/page";
import { PublicPage } from "@/app/public/page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/public", element: <PublicPage /> },
  { path: "/private", element: <PrivatePage /> },
]);
