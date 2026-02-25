import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Auth0Client } from "@auth0/auth0-spa-js";

const auth0Client = new Auth0Client({
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

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://2871ff18-6438-474a-811b-24b11ab2da3f.mock.pstmn.io/api/v2",
    prepareHeaders: async (headers) => {
      let token;
      try {
        token = await auth0Client.getTokenSilently();
        if (!token) throw new Error("no access token");
      } catch (error) {
        console.error(error);
        await auth0Client.logout({ logoutParams: { returnTo: "http://localhost:5173/" } });
      }

      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getPokemonByName: builder.query<unknown, string>({ query: (name) => `/pokemon/${name}` }),
  }),
});

export const { useGetPokemonByNameQuery } = api;
