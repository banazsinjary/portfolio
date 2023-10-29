import "./App.css";
import NavBar from "./assets/components/NavBar.tsx";
import Landing from "./assets/components/Landing.tsx";
//import AboutMe from "./assets/components/AboutMe.tsx";
import Projects from "./assets/components/Projects.tsx";
import Footer from "./assets/components/Footer.tsx";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <Landing></Landing>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
