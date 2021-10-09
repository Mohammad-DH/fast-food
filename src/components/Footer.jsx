import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-social">
          <img src="./facebook.svg" alt="" />
          <img src="./instagram.svg" alt="" />
          <img src="./tiktok.svg" alt="" />
          <img src="./Twitter.svg" alt="" />
        </div>
        <div className="footer-brand">
          <h1>king</h1>
          <h3>fast food</h3>
        </div>
        <div className="footer-phone">
          <h5>71231555 : پشتیبانی</h5>
          <h5>71231555 : سفارش</h5>
        </div>
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 200%;
          border-top: 1px solid white;
          background-color: rgba(235, 190, 190, 0.3);
        }
        .footer-box {
          width: 98%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-social {
          width: 20vw;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: #fec67c;
          padding: 0.5rem 0;
          border: none;
          border-radius: 500vw;
          border: 1px solid rgb(255, 255, 255);
        }
        .footer-social img {
          width: 2vw;
          height: 2vw;
          background-color: #f9bb97;
          border: 1px solid rgb(255, 255, 255);
          padding: 0.5rem;
          border-radius: 100vw;
          cursor: pointer;
        }
        .footer-brand {
          width: 40%;
          padding-top: 0.8%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .footer-brand h1 {
          font-size: 5vw;
          font-weight: 500;
        }
        .footer-brand h3 {
          font-size: 2.5vw;
        }
        .footer-phone {
          width: 20%;
          font-size: 1.4vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        @media only screen and (max-width: 868px) {
          .footer-brand {
            display: none;
          }
          .footer-phone {
            font-size: 2.5vw;
          }
          .footer-social {
            width: 40vw;
          }
          .footer-social img {
            width: 4vw;
            height: 4vw;
          }
        }
        @media only screen and (max-width: 450px) {
          .footer-social span {
            width: 1.5rem;
            height: 1.5rem;
          }
          .footer-brand {
            display: none;
          }
          .footer-phone {
            width: 35%;
          }
          .footer-social {
            width: 50vw;
          }
          .footer-phone {
            font-size: 4vw;
          }
        }
      `}</style>
    </div>
  );
}

export default Footer;
