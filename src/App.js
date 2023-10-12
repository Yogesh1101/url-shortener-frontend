import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

// This the Main App Component

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavBar />
      {/* All Required Routes path are assigned */}
      {/* This container is used to display the diff. types of pages loading using router */}
      {/* All components all called when the link is clicked in the NavBar Component */}

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;
