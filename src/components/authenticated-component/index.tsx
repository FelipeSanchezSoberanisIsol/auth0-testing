import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, type JSX } from "react";

export const AuthenticatedComponent = ({ element }: { element: JSX.Element }) => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated) return;

    localStorage.setItem("returnTo", window.location.href);
    loginWithRedirect();
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading || !isAuthenticated) return <div>Loading...</div>;

  return element;
};
