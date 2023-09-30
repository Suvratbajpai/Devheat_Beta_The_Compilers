import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_page from "./pages/home_page";
import Login_page from "./pages/login_page";
import Hackathon_page from "./pages/hackathon_page";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home_page />} />
                    <Route path="/login" element={<Login_page />} />
                    <Route path="/hackathon" element={<Hackathon_page />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
