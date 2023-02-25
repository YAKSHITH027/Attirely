import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AllRoutes } from "./lib/AllRoutes";
import Dummy from "./Hooks/dummy";

function App() {
  return (
    <div className="App">
      <Dummy />
      <AllRoutes />
    </div>
  );
}

export default App;
