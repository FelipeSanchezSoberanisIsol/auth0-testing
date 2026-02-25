import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthCallbackPage = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading || !isAuthenticated) return;
    const returnTo = localStorage.getItem("returnTo");
    localStorage.removeItem("returnTo");
    if (!returnTo) {
      navigate("/");
      return;
    }
    const url = new URL(returnTo);
    navigate({ pathname: url.pathname, search: url.search });
  }, [isLoading, isAuthenticated, navigate]);

  return <div>Loading...</div>;
};
