import Left from "./components/Left";
import Right from "./components/Right";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/Left.css";
import "./styles/Right.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Left />
        <Right />
      </div>
      <Footer />
    </>
  );
};

export default App;
