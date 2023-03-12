import "./App.css";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import Navbar from "./Components/navbar/Navbar";
import Home from './page/home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addpost from "./page/addPost/Addpost";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/addpost" element={<Addpost/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
