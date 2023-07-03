import "tailwindcss/tailwind.css";
import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <div
        className="bg-indigo-600 w-full h-custom bg-no-repeat bg-cover bg-center font-montserrat"
        style={{
          backgroundImage: 'url("src/assets/background-header.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
      </div>
      <div className="mb-8">
        <About />
      </div>
      <div className="mt-8">
        <Services />
      </div>
    </div>
  );
  
}

export default App;
