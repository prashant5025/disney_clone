import About from "./components/About";
import AllinOne from "./components/AllinOne";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About/>
      <Support/>
      <AllinOne/>
    </div>
  );
}

export default App;
