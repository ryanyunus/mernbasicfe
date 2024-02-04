import React from "react";

import { IG, IcFb, IcGh, IcTele, IcTw } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={IcTw} alt="ryan logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={IcFb} />
          <Icon img={IG} />
          <Icon img={IcTele} />
          <Icon img={IcFb} />
          <Icon img={IcTw} />
          <Icon img={IcGh} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @ 2023 ryan</p>
      </div>
    </div>
  );
};

export default Footer;
