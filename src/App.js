import Navbar from "./Navigation"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import "./App.css"

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/projects":
      Component = Projects
      break
    case "/resume":
      Component = Resume
      break
    default:
      Component = Home
  }

  return (
    <div>
      <Navbar />
      <div>
        <Component />
      </div>
    </div>
  );
}

export default App;
