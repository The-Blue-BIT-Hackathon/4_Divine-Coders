import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path="/" exact element={<Login/>}></Route>
          <Route  path="/signup" exact element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
