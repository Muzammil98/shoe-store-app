import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IconButton, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {},

  homeBtn: {
    position: "absolute",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "300",
    left: "20px",
    top: "10px",
    textTransform: "capitalize",
  },
}));
const Login = () => {
  const { user, googleSignIn, githubSignIn } = useAuth();
  const classes = useStyles();
  const handleSignIn = (provider) => {
    if (provider === "google") {
      googleSignIn()
        .then(() => {})
        .catch((error) => {
          alert(error.message);
          console.error(error);
        });
    } else {
      githubSignIn()
        .then(() => {})
        .catch((error) => {
          alert(error.message);
          console.error(error);
        });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ marginBottom: "10px", fontWeight: "300" }}>
        To login please continue with
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button
          primary
          variant="contained"
          endIcon={<FcGoogle />}
          style={{
            color: "#FFF",
            background: "#474265",
            marginBottom: "5px",
          }}
          onClick={() => handleSignIn("google")}
        >
          google
        </Button>
        <Button
          primary
          variant="contained"
          endIcon={<FaGithub />}
          style={{
            color: "#FFF",
            background: "#474265",
            marginBottom: "5px",
          }}
          onClick={() => handleSignIn("github")}
        >
          github
        </Button>
        <Link to="/">
          <Button className={classes.homeBtn}>Store</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
