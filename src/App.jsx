import "./App.css";
import Category from "./components/elements/Category";
import DealsToday from "./components/elements/DealsToday";
import SupportHome from "./components/elements/SupportHome";
import NavBar from "./components/navbar/NavBar";
import NavMobile from "./components/navbar/NavMobile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavMobile />
      <Category />
      <img src="banner.jpeg" alt="banner" className="w-screen" />
      <DealsToday />
      <SupportHome />
    </div>
  );
}

export default App;
