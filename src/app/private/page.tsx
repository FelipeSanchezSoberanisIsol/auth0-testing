import { useAuth0 } from "@auth0/auth0-react";

export const PrivatePage = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <div>Private</div>
      <button onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173/" } })}>Logout</button>
    </div>
  );
};
