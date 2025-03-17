import { Header } from "./components/index";
import { HomePage, NotFoundPage, Basket } from "./pages/index";
import "./components/style.css";
import { Route, Routes } from "react-router-dom";

function App() {
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
}

export default App;
