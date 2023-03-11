import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./component/Loader/Loader";
import Home from "./page/home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
        {/* <Loader/> */} 
      </BrowserRouter>
    </>
  );
}
export default App;
