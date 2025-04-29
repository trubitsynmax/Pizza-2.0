import Header from "./components/header/Header";
import { HomePage, NotFoundPage, Basket } from "./pages/index";
import "./components/style.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

const App = React.memo(() => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
});

export default App;
