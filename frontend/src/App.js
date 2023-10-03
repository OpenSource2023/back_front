import "./App.css";
//import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import HOME from "./components/home";
import Login from "./components/Login";
import Guide from "./components/Guide";
import Service from "./components/Service";
import Register from "./components/Register";
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <Routes>
      <Route path="home" element={<HOME />} />
      <Route path="service" element={<Service />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="guide" element={<Guide />} />
      <Route path="*" element={<HOME />} />
 
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
