import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_page from "./pages/home_page";
import Login_page from "./pages/login_page";
import Hackathon_page from "./pages/hackathon_page";
import SignUp_page from "./pages/signup_page";
import TeamForm from "./pages/team_create_form";
import TeamRegForm from "./pages/team_registered_form";
import AddMem from "./pages/add_mem";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/HackedIn/v1/home" element={<Home_page />} />
          <Route path="/HackedIn/v1/login" element={<Login_page />} />
          <Route path="/HackedIn/v1/hackathon" element={<Hackathon_page />} />
          <Route path="/HackedIn/v1/signup" element={<SignUp_page />} />
          <Route path="/HackedIn/v1/team" element={<TeamForm />} />
          <Route path="/HackedIn/v1/team_created" element={<TeamRegForm />} />
          <Route path="/HackedIn/v1/new_members" element={<AddMem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;