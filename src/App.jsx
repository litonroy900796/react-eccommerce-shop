import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { ShopContext } from "./context";
import { useReducer } from "react";
import { initialState, shopReducer } from "./reducers/ShopReducer";

function App() {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  return (
    <div className="bg-white font-satoshi">
      <ShopContext.Provider value={{ state, dispatch }}>
        <Header />
        <Home />
        <Footer />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
