import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import API from "./context/API";


function App() {
  return (
    <div className="all">
      <API>
        <Router>
          <Route path="/">
            <Header />
            <Menu />
            <Cart />
            <Footer />
          </Route>
        </Router>
      </API>

      <style jsx>{`
        
        .all{
          width: 100%;
          height: 100%;
          background: rgb(255, 182, 81);
          background: linear-gradient(180deg, rgb(255, 182, 81) 0%, rgba(254,203,137,1) 100%);}

        `}</style>
    </div>
  );
}

export default App;
