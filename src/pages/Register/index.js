import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Gap height={15} />
        <Input label="Full Name" placeholder="Fullname" />
        <Gap height={15} />
        <Input label="Email" placeholder="Email" />
        <Gap height={15} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Register" onClick={() => navigate("/login")} />
        {/* <Button
          title="Register"
          style={{ fontSize: "20px", padding: "16px" }}
        /> */}
        <Gap height={40} />
        <Link title="Kembali ke Login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Register;
