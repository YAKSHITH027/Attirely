import "./App.css";
import Home from "./UserSide/Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./AdminSide/Pages/Dashboard";

import Products from "./AdminSide/Pages/Products";


import { AllRoutes } from "./lib/AllRoutes";
import Cart from "./UserSide/Pages/Cart/Cart";

function App() {
  return (
    <div className="App">

      {/* <Dashboard /> */}
    
      {/* <Home /> */}

  
<Cart/>

      {/* <AllRoutes /> */}

    </div>
  );
}

export default App;
