import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onHandleSignup = () => {
    navigate("/", {
      state: {
        comingFrom: "Signup",
      },
    });
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={() => onHandleSignup()}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
