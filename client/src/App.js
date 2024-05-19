import SignUp from "./components/Signup/SignUp";
import Login from "./components/Login/Login";
import LandingPage from "./pages/landingPage/landingPage";
import HomePage from "./pages/HomePage/Homepage";
import ProfilePage from "./pages/Profile/ProfilePage";
import EditForm from "./components/EditForm/EditForm";
import { Route, Routes } from "react-router-dom";
function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<HomePage />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/editForm" element={<EditForm />} />
    </Routes>
  );
}

export default App;
