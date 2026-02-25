import { useGetPokemonByNameQuery } from "@/api";
import { useAuth0 } from "@auth0/auth0-react";

export const PrivatePage = () => {
  const { logout } = useAuth0();
  const { currentData } = useGetPokemonByNameQuery("pikachu");

  return (
    <div>
      <div>Private</div>
      <button onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173/" } })}>Logout</button>
      <div>{JSON.stringify(currentData)}</div>
    </div>
  );
};
