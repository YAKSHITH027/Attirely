import "./App.css";
import Home from "./UserSide/Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./AdminSide/Pages/Dashboard";

import Products from "./UserSide/Pages/Products/Products";
import Cart from "./UserSide/Pages/Cart/Cart";


import { AllRoutes } from "./lib/AllRoutes";




function App() {
  return (
    <div className="App">

      {/* <Dashboard /> */}
      {/* <Home /> */}
     
  



      <Home />
      <AllRoutes/>
      

    </div>
  );
}

export default App;
