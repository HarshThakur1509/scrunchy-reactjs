import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import logo from "../static/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../App";
import axios from "axios";

export const Nav = () => {
  const { auth, setAuth, admin, setAdmin } = useContext(LoginContext);
  const [log, setLog] = useState(null);

  const onLogout = async () => {
    try {
      await axios.get("http://localhost:3000/users/logout", {
        withCredentials: true,
      });
      localStorage.setItem("login", "false");
      // setAuth(false);
      setAuth(false);
      setAdmin(false);
    } catch (err) {
      console.log(err);
    }
  };
  // let auth = localStorage.getItem("login");

  const ShowAuth = () => {
    console.log("showauth " + auth);
    setAuth(localStorage.getItem("login") === "true" ? true : false);
    return auth ? (
      <button className="btn1" onClick={onLogout}>
        Logout
      </button>
    ) : (
      <div className="my-auto [&>*]:p-2">
        <Link to="/login">
          <span>login</span>
        </Link>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </div>
    );
  };

  const fetchAdminStatus = async () => {
    if (auth) {
      try {
        await axios.get("http://localhost:3000/admin/isadmin", {
          withCredentials: true,
        });
        setAdmin(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      setAdmin(false);
    }
  };

  useEffect(() => {
    setLog(ShowAuth);
    fetchAdminStatus();
  }, [auth]);

  return (
    <header className="Nav">
      <nav>
        <Link to="/">
          <span id="logo">
            <img src={logo} alt="Logo" />
          </span>
        </Link>
      </nav>
      <div className="nav-info">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        {admin && (
          <Link to="/admin">
            <span>Admin</span>
          </Link>
        )}
        {log}
      </div>
    </header>
  );
};
