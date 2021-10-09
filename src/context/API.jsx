import React, { createContext, useState } from "react";

export const root = createContext();

function API({ children }) {
  const [cart, setcart] = useState([]);
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);

  const RESTARTcart = () => {
    setcart([]);
  };

  const ADDorders = (p) => {
    const exist = cart.find((x) => x.id === p.id);
    if (exist) {
      if (exist.qty <= 9) {
        setcart(
          cart.map((x) =>
            x.id === p.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
      }
    } else {
      setcart([...cart, { ...p, qty: 1 }]);
    }
  };

  const DELorders = (p) => {
    const exist = cart.find((x) => x.id === p.id);
    if (exist.qty === 1) {
      setcart(cart.filter((x) => x.id !== p.id));
    } else {
      setcart(
        cart.map((x) => (x.id === p.id ? { ...exist, qty: exist.qty - 1 } : x))
      );
    }
  };

  const fakeData = [
    {
      id: "h1",
      type: "hamburger",
      name: "معمولی",
      price: 20,
    },
    {
      id: "h2",
      type: "hamburger",
      name: "قارچ و پنیر",
      price: 25,
    },
    {
      id: "h3",
      type: "hamburger",
      name: "زغالی",
      price: 30,
    },
    {
      id: "h4",
      type: "hamburger",
      name: "دوبل",
      price: 35,
    },
    {
      id: "h5",
      type: "hamburger",
      name: "کینگ",
      price: 50,
    },

    {
      id: "p1",
      type: "pizza",
      name: "پپرونی مخصوص",
      price: 80,
    },
    {
      id: "p2",
      type: "pizza",
      name: "پپرونی",
      price: 65,
    },
    {
      id: "p3",
      type: "pizza",
      name: "سبزیجات",
      price: 70,
    },
    {
      id: "p4",
      type: "pizza",
      name: "مخصوص",
      price: 85,
    },
    {
      id: "p5",
      type: "pizza",
      name: "کینگ",
      price: 100,
    },

    {
      id: "d1",
      type: "drinks",
      name: "آب پورتقال",
      price: 15,
    },
    {
      id: "d2",
      type: "drinks",
      name: "لیموناد",
      price: 12,
    },
    {
      id: "d3",
      type: "drinks",
      name: "موهیتو",
      price: 5,
    },
  ];

  const [data, setdata] = useState(fakeData);
  const [types, settypes] = useState(["hamburger", "pizza", "drinks"]);
  return (
    <div>
      <root.Provider
        value={{ cart, ADDorders, DELorders, RESTARTcart, total, data, types }}
      >
        {children}
      </root.Provider>
    </div>
  );
}

export default API;
