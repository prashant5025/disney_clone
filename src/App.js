import About from "./components/About";
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
    </div>
  );
}

export default App;
