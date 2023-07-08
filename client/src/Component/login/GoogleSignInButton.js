import React from "react";
import googleLogo from "./google-logo.png";

const GoogleSignInButton = () => {
  return (
    <button className="google-sign-in-button">
      <img src={googleLogo} height="10" width="10" alt="Google Logo" className="google-logo" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
