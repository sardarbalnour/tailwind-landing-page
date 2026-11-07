import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-text-primary overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Features */}
        <Features />
        {/* Courses */}
        <Courses />
      </main>
    </div>
  );
}

export default App;
