import HomePage from "./pages/HomePage";
import { Header } from "./components/index";
import "./components/style.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
