import "./App.css";

import Navbar from "./components/Homepage/Navbar";
import TopSection from "./components/Homepage/TopSection";
import topRight from './image/nav-img.png';

function App() {
  return (
    <>

    <div className="flex justify-end  ">
    <img src={topRight} className="absolute -z-10 " alt=""  />
    </div>

    <Navbar className="z-50"></Navbar>

<TopSection></TopSection>
    </>
  );
}
  
export default App;
