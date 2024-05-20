import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Topper from "./components/Topper.jsx";
import Home from "./components/Home.jsx";
import background from "../src/img/image.png";
import Second from "./components/Second.jsx";
import Long from "./components/Long.jsx";
import Industrialapplication from "./components/Industrialapplication.jsx";
import Wasteapplication from "./components/Wasteapplication.jsx";
import Founder from "./components/Founder.jsx";
import Footer from "./components/Footer.jsx";
import Blogs from "./components/Blogs.jsx";
import blogspage from "./components/Blogspage.jsx";
import Blogspage from "./components/Blogspage.jsx";
function App() {
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Topper />
        <Nav />
        <Home />
      </div>
      <Second />
      <Long />
      <Industrialapplication />
      <Wasteapplication />
      <Founder />
      <Footer />
      <div
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Topper />
        <Nav />
        <Blogs />
      </div>
      <Blogspage />
    </>
  );
}

export default App;
