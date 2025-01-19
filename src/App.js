import Navbar from "./Navigation"
import Home from "./components/pages/Home"

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
    </div>
  );
}

export default App;
