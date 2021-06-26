import React, { useContext } from "react";
import { auth } from "../../utils/firebase";
import { useAuth } from "../../context/AuthContext";
import { IconButton, Button } from "@material-ui/core";
import { FiPower } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {},
  logoutBtn: {
    position: "absolute",
    top: "0",
    color: "#bd3333",
    fontSize: "30px",
    left: "10px",
  },
  signInBtn: {
    position: "absolute",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "300",
    left: "20px",
    top: "10px",
    textTransform: "capitalize"
  },
}));
const ExpenseTracker = () => {
  const clasess = useStyles();
  const { user, signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px", fontWeight: "300" }}>
        Hello, {user ? user.displayName : "unknown user"}
      </h3>

      {user ? (
        <IconButton
          className={clasess.logoutBtn}
          onClick={() => handleSignOut()}
        >
          <FiPower />
        </IconButton>
      ) : (
        <Link to="/login">
          <Button className={clasess.signInBtn}>Sign in</Button>
        </Link>
      )}
    </div>
  );
};

export default ExpenseTracker;
