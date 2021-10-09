import React, { useContext, useState } from "react";

import { root } from "../context/API";

function Menu() {
  const { ADDorders, data, types } = useContext(root);
  const [state, setstate] = useState("hamburger");

  return (
    <div className="Menu-main">
      <div className="menu-box">
        <div className="menu-section-L">
          {data.map((el) => {
            if (el.type === state) {
              return (
                <div
                  className="list-card"
                  style={{
                    background: `url(./foods/${el.id}.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="card-info">
                    <h3>{el.name}</h3>
                    <h3>{el.price.toFixed(3)} تومان</h3>
                  </div>
                  <div onClick={() => ADDorders(el)} className="card-add-btn">
                    <img src="./plus.svg" alt="" />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="menu-section-R">
          {types.map((el) => {
            return (
              <div
                onClick={() => {
                  setstate(el);
                }}
                className={state === el ? "R-list R-list-active" : "R-list"}
              >
                <img src={`./${el}.png`} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .Menu-main {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
        }
        .menu-box {
          width: 95%;
          height: 97%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(253, 143, 109, 0.8);
          border-radius: 5rem;
          border: 3px solid white;
        }
        .menu-section-L {
          height: 97%;
          width: 88%;
          background: rgba(255, 232, 225, 0.8);
          overflow-y: auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
          border-radius: 4rem 8px 8px 4rem;
        }
        .list-card {
          position: relative;
          width: 20vw;
          height: 30vw;
          margin: 4% 2%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: flex-end;
          border-radius: 1rem;
          overflow: hidden;
          font-size: 120%;
          border: 3px solid rgb(210, 210, 210);
        }
        .card-info {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          height: 15%;
          width: 90%;
          background-color: rgba(255, 255, 255, 0.7);
          padding: 3% 0;
          margin-top: 6%;
          margin-bottom: 2%;
          border-radius: 1rem;
        }
        .card-add-btn {
          margin-bottom: 4%;
          height: 10%;
          width: 16%;
          border-radius: 10000vw;
          background-color: yellowgreen;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.3s linear;
          transition-delay: 0.1s;
        }
        .card-add-btn:hover {
          transform: translateY(9px);
          background-color: rgb(107, 205, 50);
        }
        .card-add-btn img {
          height: 60%;
          width: 60%;
        }
        .menu-section-R {
          height: 97%;
          width: 10%;
          overflow-y: auto;
          direction: rtl;
          scrollbar-width: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          border-radius: 0 5rem 5rem 0;
        }

        .menu-section-R::-webkit-scrollbar,
        .menu-section-L::-webkit-scrollbar {
          background: transparent;
          border-radius: 500px;
          width: 10px;
        }
        .menu-section-R::-webkit-scrollbar-thumb,
        .menu-section-L::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 5px;
          height: 5px;
        }
        .R-list {
          width: 60%;
          height: 12%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          transition: all 0.3s linear;
          border-radius: 100rem;
        }
        .R-list-active {
          background: rgba(255, 255, 255, 0.4);
        }
        .R-list img {
          padding: 10% 0;
          width: 80%;
        }

        @media only screen and (max-width: 868px) {
          .menu-box {
            flex-direction: column-reverse;
            border-radius: 1rem;
          }
          .menu-section-R {
            width: 97%;
            height: 10%;
            flex-direction: row;
            overflow-y: hidden;
            overflow-x: auto;
          }
          .R-list {
            width: 11%;
            height: 85%;
          }
          .menu-section-L {
            padding: 3% 0;
            border-radius: 1rem;
            display: grid;
            height: 81%;
            width: 96%;
          }
          .list-card {
            width: 53vw;
            height: 79vw;
            font-size: 130%;
          }
          .card-info {
            height: 15%;
          }
          .card-add-btn {
            margin-bottom: 3%;
            height: 3rem;
            width: 3rem;
          }
          .card-add-btn:hover {
            transform: translateY(0px);
            background-color: yellowgreen;
          }

          .menu-section-R::-webkit-scrollbar,
          .menu-section-L::-webkit-scrollbar {
            width: 5px;
          }
          .menu-section-R::-webkit-scrollbar-thumb,
          .menu-section-L::-webkit-scrollbar-thumb {
            height: 5px;
          }
        }
        @media only screen and (max-width: 450px) {
          .R-list {
            width: 15%;
            height: 75%;
          }
          .menu-section-L {
            height: 84%;
            width: 94%;
          }
          .list-card {
            font-size: 100%;
          }
          .card-info {
            height: 20%;
          }
          .card-add-btn {
            margin-bottom: 6%;
          }
        }
        @media only screen and (max-width: 360px) {
          .list-card {
            font-size: 90%;
          }
          .card-add-btn {
            height: 2rem;
            width: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Menu;
