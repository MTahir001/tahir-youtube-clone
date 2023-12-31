import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../redux/actions/auth.action";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(accessToken);
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="youtube logo"
        />
        <button onClick={handleLogin}>Login with google</button>
        <p>This project is made using Youtube data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
