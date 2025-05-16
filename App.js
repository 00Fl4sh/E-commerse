import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes/>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
