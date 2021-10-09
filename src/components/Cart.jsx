import React, { useContext } from "react";

import { root } from "../context/API";

function Cart() {
  const { cart, DELorders, ADDorders, RESTARTcart, total } = useContext(root);
  return (
    <div className="cart">
      <div className="main-cart">
        <div className="cart-list">
          {cart.map((x) => {
            return (
              <div className="cart-item">
                <img
                  className="cart-item-image"
                  src={`./${x.type}.png`}
                  alt=""
                />
                <div className="cart-item-box">
                  <h3 className="cart-item-name">{x.name}</h3>
                  <div className="cart-item-info">
                    <div className="cart-item-qty">
                      <img
                        className="cart-item-qty-img "
                        onClick={() => ADDorders(x)}
                        src="./plus.svg"
                        alt="plus btn"
                      />
                      <span className="cart-item-qty-num">{x.qty}</span>

                      <img
                        className="cart-item-qty-img"
                        onClick={() => DELorders(x)}
                        src="./min.svg"
                        alt="min btn"
                      />
                    </div>
                    <span className="cart-price">{x.price.toFixed(3)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-pay">
          <div className="cart-pay-price">
            <span>مجموع خرید شما</span>
            <div>
              <span>{total.toFixed(3)}</span>
              <span>تومان</span>
            </div>
          </div>
          <div className="cart-pay-off">
            <div className="cart-pay-off-box">
              <span>کد تخفیف</span>
              <input type="text" />
            </div>
          </div>
          <div
            className="cart-pay-btn"
            onClick={() => {
              if (cart.length !== 0) {
                window.alert(
                  "now you should think that it's has been done !!!(sorry no backend)"
                );
                RESTARTcart();
              } else {
                window.alert("cart is empty ");
              }
            }}
          >
            <span>پرداخت</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .main-cart {
          width: 100%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        .cart-list {
          width: 40%;
          height: 90%;
          background-color: rgba(255, 232, 225, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          border-radius: 1rem;
          overflow-y: auto;
          border: 2px solid white;
        }
        .cart-item {
          width: 95%;
          height: 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 1rem;
          padding: 1%;
          margin: 2% 0;
          background-color: rgba(226, 226, 226, 0.4);
          font-size: 100%;
        }
        .cart-item-image {
          width: 10%;
          border-radius: 1rem;
          background-color: rgba(255, 255, 255, 0.7);
        }
        .cart-item-box {
          width: 79%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 1rem;
          padding: 0 3%;
          background-color: rgba(255, 255, 255, 0.7);
        }
        .cart-item-name {
          width: 50%;
        }
        .cart-item-info {
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cart-item-qty {
          width: 40%;
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          border: 1px solid rgb(0, 0, 0);
          background-color: black;
          border-radius: 1rem;
          overflow: hidden;
        }
        .cart-item-qty-img {
          width: 20%;
          height: 100%;
          padding: 0 6%;
        }
        .cart-item-qty-num {
          border: 2px solid rgb(255, 255, 255);
          color: white;
          border-radius: 1000vw;
          width: 1.75rem;
          height: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart-pay {
          width: 40%;
          height: 90%;
          background-color: rgba(255, 232, 225, 0.4);
          text-align: center;
          font-size: 130%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: flex-start;
          border-radius: 1rem;
          border: 2px solid white;
        }
        .cart-pay-price {
          background-color: rgb(255, 255, 255);
          width: 90%;
          height: 10%;
          margin: 4% 2%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-evenly;
          border-radius: 1rem;
        }
        .cart-pay-price div {
          width: 30%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-evenly;
        }
        .cart-pay-off {
          width: 90%;
          height: 10%;
          background-color: rgb(255, 255, 255);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
        }
        .cart-pay-off-box {
          width: 96%;
          height: 100%;
          padding: 0 2%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          border-radius: 1rem;
          background-color: rgba(214, 197, 176, 0.5);
        }
        .cart-pay-off-box span {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          word-break: keep-all;
          background-color: #9acd32;
          color: rgb(0, 0, 0);
          padding: 1% 0%;
          border-radius: 1rem;
          cursor: pointer;
        }
        .cart-pay-off-box input {
          border-radius: 1rem;
          border: none;
          outline: none;
          height: 70%;
          padding: 0 2%;
          font-size: 100%;
          width: 65%;
        }
        .cart-pay-btn {
          margin-top: auto;
          margin-bottom: 5%;
          width: 35%;
          background-color: #9acd32;
          padding: 2% 0;
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.2s linear;
          border: 3px solid white;
        }

        .cart-pay-btn:hover {
          background-color: #aee04a;
        }

        @media only screen and (max-width: 868px) {
          .main-cart {
            flex-direction: column;
          }
          .cart-list,
          .cart-pay {
            width: 80%;
            height: 45%;
          }
          .cart-pay {
            font-size: 120%;
          }
          .cart-item,
          .cart-pay-off,
          .cart-pay-price {
            height: 15%;
          }
          .cart-item-qty {
            width: 50%;
          }
        }
        @media only screen and (max-width: 450px) {
          .cart-pay {
            font-size: 110%;
          }
          .cart-item-info {
            width: 55%;
          }
          .cart-item-qty {
            width: 50%;
          }
          .cart-pay-off-box span {
            font-size: 1rem;
            padding: 2%;
          }
        }
        @media only screen and (max-width: 360px) {
          .cart-pay {
            font-size: 100%;
          }
          .cart-pay-off-box span {
            font-size: 0.9rem;
          }
          .cart-item,
          .cart-pay-off,
          .cart-pay-price {
            height: 20%;
          }
          .cart-item-info {
            width: 60%;
          }
          .cart-item-qty {
            width: 50%;
            font-size: 90%;
          }
        }
      `}</style>
    </div>
  );
}

export default Cart;
