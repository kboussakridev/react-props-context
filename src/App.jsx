import "./App.css";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import CompplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;
  const sections = [
    { id: "basic", label: "Props de base", icon: "📦" },
    { id: "children", label: "Props enfants", icon: "👶" },
    { id: "complex", label: "Props complexes", icon: "🧩" },
    { id: "ref", label: "Props avec Ref", icon: "🔗" },
    { id: "theme", label: "Sélecteur de thème", icon: "🎨" },
  ];
  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className="px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 hover:bg-blue-800 text-white"
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div
      className={`min-h-screen ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-8 ${isDark ? "bg-gray-900 text-amber-400" : "bg-white text-amber-700"}`}
        >
          <h1
            className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Comprendre les Props React
          </h1>
          <p>Un guide complet pour comprendre les Props en React</p>
        </header>
        <div id="basic" className="scroll-mt-200">
          <BasicProps />
        </div>
        <div id="children" className="scroll-mt-200">
          <ChildrenProps />
        </div>
        <div id="complex" className="scroll-mt-200">
          <CompplexProps />
        </div>
        <div id="ref" className="scroll-mt-200">
          <RefProps />
        </div>
        <div id="theme" className="scroll-mt-200">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
