import "./App.css";
import Home from "./UserSide/Pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./AdminSide/Pages/Dashboard";
import { AllRoutes } from "./lib/AllRoutes";


function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Home />
      <AllRoutes/>
      
    </div>
  );

}

export default App;
