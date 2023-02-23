import "./App.css";
import Home from "./UserSide/Pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./AdminSide/Pages/Dashboard";



function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      
      <Home />
    </div>
  );
}

export default App;
