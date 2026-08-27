import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service"
import Projects from "./components/Projects"
import Career from "./components/Career"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Projects/>
      <Career/>
      <Contact/>

      <main className="pt-20">
       
      </main>
    </div>
  );
}

export default App;