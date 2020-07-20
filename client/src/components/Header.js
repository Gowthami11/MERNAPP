import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./payments";
const Header = () => {
  const { auth } = useSelector((state) => state);
  console.log("auth in header,auth", auth, Object.entries(auth).length);

  const renderContent = () => {
    console.log("auth", auth, auth.auth);

    switch (auth.auth) {
      case "": {
        return;
      }
      case false: {
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      }

      default: {
        return [
          <li key={1}>
            <Payments />
          </li>,
          <li key={3}>
            {"  "} Credits:{auth.auth.data.credits}
          </li>,
          <li key={2}>
            <a href="/api/logout">logout</a>
          </li>,
        ];
      }
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth.auth ? "/surveys" : "/"}>Emaily</Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
