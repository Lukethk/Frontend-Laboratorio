import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className="w-60 min-h-screen bg-[#59264426] p-6 shadow-lg">
            <h2 className="font-bold text-xx text-[#592644] mb-8">Gestión De Laboratorio</h2>
            <nav className="flex flex-col space-y-3">
                <button
                    onClick={() => navigate("/dashboard")}
                    className={`text-left p-3 rounded-2xl transition-all duration-300 ease-in-out shadow-md ${
                        location.pathname === "/dashboard"
                            ? "bg-[#4b1f3d] text-white hover:bg-[#a06080]"
                            : "hover:bg-[#d8a4b8] hover:shadow-lg"
                    }`}
                >
                    Dashboard
                </button>
                <button
                    onClick={() => navigate("/supplies")}
                    className={`text-left p-3 rounded-2xl transition-all duration-300 ease-in-out shadow-md ${
                        location.pathname === "/supplies"
                            ? "bg-[#4b1f3d] text-white hover:bg-[#a06080]"
                            : "hover:bg-[#d8a4b8] hover:shadow-lg"
                    }`}
                >
                    Suministros
                </button>
                <button
                    onClick={() => navigate("/reportes")}
                    className={`text-left p-3 rounded-2xl transition-all duration-300 ease-in-out shadow-md ${
                        location.pathname === "/reportes"
                            ? "bg-[#4b1f3d] text-white hover:bg-[#a06080]"
                            : "hover:bg-[#d8a4b8] hover:shadow-lg"
                    }`}
                >
                    Reportes
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
