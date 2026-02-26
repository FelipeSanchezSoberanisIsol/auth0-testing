import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "@/router";
import { RouterProvider } from "react-router/dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { auth0Client } from "./auth0/auth0-client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      existingClient={auth0Client}
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </StrictMode>,
);
