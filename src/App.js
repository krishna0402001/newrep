import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Pages/Login";
import Recruiter from "./Pages/Recruiter";
import Register from "./Pages/Register";
import Website from "./Pages/Website";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/api/register" element={<Register />} />
          <Route exact path="/api/recruiter" element={<Recruiter />} />
          <Route exact path="/api/website" element={<Website />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
