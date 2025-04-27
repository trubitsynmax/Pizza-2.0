import { Header } from "./components/index"; //!Header component
import { HomePage, NotFoundPage, Basket } from "./pages/index"; //!home page, 404 page, basket page
import "./components/style.css"; //!styles
import { Route, Routes } from "react-router-dom"; //!react-router components

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
