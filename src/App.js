import "./App.css";
import Home from "./UserSide/Pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./AdminSide/Pages/Dashboard";
import Cart from "../src/UserSide/Pages/Cart/Cart"


function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
    
      {/* <Home /> */}
      <Cart/>
  
    </div>
  );

}

export default App;
