import React, { createContext, useState } from "react";

export const root = createContext();

function API({ children }) {
  const [filter, setfilter] = useState("all");
  const SETfilter = (i) => {
    setfilter(i);
  };

  const [cart, setcart] = useState([]);
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const count = cart.reduce((a, c) => a + c.qty, 0);

  const RESTARTcart = () => {
    setcart([]);
  };

  const SETorders = (p, q) => {
    const exist = cart.find((x) => x.id === p.id);

    if (exist) {
      if (q === 0) {
        setcart(cart.filter((x) => x.id !== p.id));
      } else if (q > 0) {
        setcart(cart.map((x) => (x.id === p.id ? { ...exist, qty: q } : x)));
      }
    } else {
      setcart([...cart, { ...p, qty: q }]);
    }
  };

  const fakeData = [
    {
      id: "h1",
      type: "hamburger",
      name: "معمولی",
      price: 20,
      image: require("../../assets/foods/h1.jpg"),
    },
    {
      id: "h2",
      type: "hamburger",
      name: "قارچ و پنیر",
      price: 25,
      image: require("../../assets/foods/h2.jpg"),
    },
    {
      id: "h3",
      type: "hamburger",
      name: "زغالی",
      price: 30,
      image: require("../../assets/foods/h3.jpg"),
    },
    {
      id: "h4",
      type: "hamburger",
      name: "دوبل",
      price: 35,
      image: require("../../assets/foods/h4.jpg"),
    },
    {
      id: "h5",
      type: "hamburger",
      name: "کینگ",
      price: 50,
      image: require("../../assets/foods/h5.jpg"),
    },

    {
      id: "p1",
      type: "pizza",
      name: "پپرونی مخصوص",
      price: 80,
      image: require("../../assets/foods/p1.jpg"),
    },
    {
      id: "p2",
      type: "pizza",
      name: "پپرونی",
      price: 65,
      image: require("../../assets/foods/p2.jpg"),
    },
    {
      id: "p3",
      type: "pizza",
      name: "سبزیجات",
      price: 70,
      image: require("../../assets/foods/p3.jpg"),
    },
    {
      id: "p4",
      type: "pizza",
      name: "مخصوص",
      price: 85,
      image: require("../../assets/foods/p4.jpg"),
    },
    {
      id: "p5",
      type: "pizza",
      name: "کینگ",
      price: 100,
      image: require("../../assets/foods/p5.jpg"),
    },

    {
      id: "d1",
      type: "drinks",
      name: "آب پورتقال",
      price: 15,
      image: require("../../assets/foods/d1.jpg"),
    },
    {
      id: "d2",
      type: "drinks",
      name: "لیموناد",
      price: 12,
      image: require("../../assets/foods/d2.jpg"),
    },
    {
      id: "d3",
      type: "drinks",
      name: "موهیتو",
      price: 5,
      image: require("../../assets/foods/d3.jpg"),
    },
  ];

  const [data, setdata] = useState(fakeData);
  const [types, settypes] = useState([
    { id: "t0", type: "all" },
    { id: "t1", type: "hamburger" },
    { id: "t2", type: "pizza" },
    { id: "t3", type: "drinks" },
  ]);
  return (
    <root.Provider
      value={{
        cart,
        RESTARTcart,
        total,
        count,
        data,
        types,
        filter,
        SETfilter,
        SETorders,
      }}
    >
      {children}
    </root.Provider>
  );
}

export default API;
