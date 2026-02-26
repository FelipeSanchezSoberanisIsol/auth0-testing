import { Auth0Client } from "@auth0/auth0-spa-js";

export const auth0Client = new Auth0Client({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    scope: import.meta.env.VITE_AUTH0_SCOPE,
  },
  useRefreshTokens: true,
  cacheLocation: "localstorage",
});
