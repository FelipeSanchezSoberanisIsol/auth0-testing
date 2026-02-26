import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth0Client } from "@/auth0/auth0-client";

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
