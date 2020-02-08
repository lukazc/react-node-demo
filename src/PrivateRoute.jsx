import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, logout, ...rest }) {
  const token = useAuth();
  return (
    <Route {...rest}
      render={props => {
          return token ? (
            <Component {...props} logout={logout} />
          ) : (
            <Redirect to="/login" />
          )
      }
      }
    />
  );
}

export default PrivateRoute;