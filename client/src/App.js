import SignUp from "./components/Signup/SignUp";
import Login from "./components/Login/Login";
import LandingPage from "./pages/landingPage/landingPage";
import HomePage from "./pages/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<HomePage />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<LandingPage />} />
    </Routes>
  );
}

export default App;
