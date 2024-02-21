import Navbar from "./component/Navebar";
import MainHeader from "./component/MainHeader";
import About from "./component/About";
import Projects from "./component/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <MainHeader />
      <About />
      <Projects />
    </>
  );
}
