import Navbar from "./components/Navigation"
import Home from "./pages/Home"
import Footer from "./components/Footer"

import "./App.css"

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
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
      <Footer />
    </div>
  );
}

export default App;
