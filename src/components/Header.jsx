import React from "react";

function Header() {
  return (
    <div className="Header">
      <div className="Header-img-box">
        <img className="Header-img" src="./pizza-image.png" alt="" />
      </div>
      <div className="header-text">
        <img className="king" src="./king2.svg" alt="" />
      </div>
      <div className="options">
        <span className="C1">Fast Delivery </span>
        <span className="C2">High Verity</span>
        <span className="C3">Best Quality</span>
      </div>

      <style jsx>{`
        .Header {
          width: 100%;
          height: 100vh;
          background-color: rgba(233, 255, 108, 0.2);
          padding-bottom: 2%;
          background-image: url("./bg.jpg");
          background-size: cover;
        }
        .Header::before {
          position: absolute;
          top: 0;
          right: 0;
          content: "";
          width: 80%;
          height: 100vh;
          background-color: rgba(160, 160, 160, 0.6);
          clip-path: polygon(74% 0, 100% 0%, 100% 100%, 0% 100%);
          padding-bottom: 2%;
          filter: blur(10px);
        }
        .Header-img-box {
          position: relative;
          left: -25%;
          width: 90vh;
          height: 90vh;
          display: flex;
          align-items: center;
          background-color: rgba(253, 151, 107, 0.9);
          border-radius: 10000vw;
          border: 3px dashed white;
        }
        .Header-img {
          position: relative;
          left: +3%;
          width: 90%;
          animation: pizza 20s linear infinite;
          filter: brightness(1.1);
        }
        .header-text {
          position: absolute;
          top: 0;
          right: 0%;
          display: flex;
          align-items: flex-start;
          width: 50vw;
          height: 100%;
          z-index: 5;
        }
        .king {
          width: 90%;
        }
        .options {
          position: absolute;
          top: 0;
          right: 2%;
          width: 50%;
          height: 85%;
          display: flex;
          align-items: flex-end;
          justify-content: space-evenly;
        }
        .options span {
          border-radius: 1000vw;
          border: #fd986b 5px solid;
          width: 13vw;
          height: 13vw;
          background-color: rgba(253, 170, 103, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 600;
          color: white;
          background: rgb(255, 255, 255);
          background: radial-gradient(
            circle,
            rgba(253, 170, 103, 0.9) 0%,
            rgba(255, 188, 133, 0.5) 100%
          );
        }

        @keyframes pizza {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @media only screen and (max-width: 950px) {
          .Header {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .Header-img-box {
            left: -50%;
            top: 5%;
            height: 60vh;
            width: 60vh;
          }
          .Header-img {
            left: +3%;
            width: 90%;
          }
          .header-text {
            top: 0;
            right: 0%;
            width: 70%;
            height: 100%;
            z-index: 5;
          }
          .king {
            width: 90%;
          }
          .options {
            top: 40%;
            right: 3%;
            width: 70%;
            height: 60%;
            flex-direction: column;
          }
          .options span {
            width: 16vw;
            height: 16vw;
            font-size: 1.2rem;
            border-radius: 80vw;
          }
        }
        @media only screen and (max-width: 450px) {
          .Header {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .Header-img-box {
            left: -55%;
            top: 5%;
            height: 50vh;
            width: 50vh;
          }
          .Header-img {
            left: +3%;
            width: 90%;
          }
          .header-text {
            top: 0;
            right: 0%;
            width: 90%;
            height: 100%;
            z-index: 5;
          }
          .king {
            width: 90%;
          }
          .options {
            top: 60%;
            right: 5%;
            width: 50%;
            height: 40%;
            flex-direction: column;
          }
          .options span {
            width: 30vw;
            height: 20vw;
            font-size: 1.2rem;
            border-radius: 8vw;
            text-align: center;
          }
        }
        @media only screen and (max-width: 360px) {
        }
      `}</style>
    </div>
  );
}

export default Header;
