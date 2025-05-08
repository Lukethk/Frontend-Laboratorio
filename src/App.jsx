import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Supplies from "./pages/Supplies.jsx";
import Reportes from "./pages/Reportes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/supplies" element={<Supplies />} />
                <Route path="/reportes" element={<Reportes />} />
            </Routes>
        </Router>
    );
}

export default App;
