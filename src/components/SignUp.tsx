import { FunctionComponent } from "react";
import "./SignUp.css";

export type SignUpType = {
  className?: string;
};

const SignUp: FunctionComponent<SignUpType> = ({ className = "" }) => {
  return (
    <div className={`sign-up ${className}`}>
      <section className="container">
        <img className="element-icon" alt="" src="/element.svg" />
        <div className="container-inner">
          <div className="heading-parent">
            <b className="way-to-go">{`Way to go, you just earned 10 points! `}</b>
            <div className="frame-wrapper">
              <div className="elements-container-parent">
                <div className="elements-container">
                  <img className="user-name-icon" alt="" src="/user-name.svg" />
                  <div className="inner-container">
                    <img
                      className="inner-container-child"
                      alt=""
                      src="/vector-11.svg"
                    />
                    <div className="link">
                      <div className="link-parent">
                        <a className="link1">Return to Dashboard</a>
                        <div className="connector" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-box">
                  The longer the study, the more points you earn. Reach 200pts
                  to unlock additional rewards.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bonus-get-10-points-now-by-si-parent">
          <p className="bonus-get-10-container">
            <b>{`Bonus: `}</b>
            <span>
              Get 10 points now by simply taking 5min to complete your Kinetic
              Profile!
            </span>
          </p>
          <div className="button-wrapper">
            <div className="button">
              <button className="btn">Finish Profile for 10 points</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;