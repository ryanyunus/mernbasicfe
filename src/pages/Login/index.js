import React from "react";
// import "./login.scss";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Gap height={15} />
        <Input label="Email" placeholder="Email" />
        <Gap height={15} />
        <Input label="Password" placeholder="Password" />
        <Gap height={40} />
        <Button title="Login" onClick={() => navigate("/")} />
        <Gap heigh={100} />
        <Link
          title="Belum punya akun, silahkan daftar"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
