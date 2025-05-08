import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";

const API_URL = "https://tuapi.com/insumos"; // Reemplázalo con la URL real de tu API

const Reportes = () => {
    const [insumos, setInsumos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Error al obtener los insumos.");
            const data = await response.json();
            setInsumos(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-[#f8f5f7]">
                <h1 className="text-2xl font-bold">Reportes disponibles</h1>

                {/* Tarjeta de Atención Requerida */}
                <div className="bg-[#59264426] p-4 rounded-2xl mt-6 w-[25%] h-[30%] flex flex-col justify-end">
                    <h2 className="text-2xl font-bold">Atención Requerida</h2>
                    <p className="text-lg text-gray-600">Items Críticos</p>
                    <p className="text-sm text-gray-500">Suministros con disponibilidad baja al 15%</p>
                </div>

                <h2 className="mt-6 font-bold text-lg">Insumos Actuales</h2>

                {/* Tabla de Insumos */}
                <div className="bg-white p-4 rounded-lg shadow mt-5">
                    <h3 className="font-semibold">Insumos disponibles</h3>

                    {loading ? (
                        <p className="text-gray-600 mt-4">Cargando insumos...</p>
                    ) : error ? (
                        <div className="text-red-600 mt-4">
                            <p>Error al cargar los insumos: {error}</p>
                            <button
                                onClick={fetchData}
                                className="mt-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                            >
                                Reintentar
                            </button>
                        </div>
                    ) : (
                        <table className="w-full mt-4 border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-100 border-b border-gray-200">
                                <th className="border p-2">Item ID</th>
                                <th className="border p-2">Nombre</th>
                                <th className="border p-2">Categoría</th>
                                <th className="border p-2">Actual %</th>
                                <th className="border p-2">Usado</th>
                            </tr>
                            </thead>
                            <tbody>
                            {insumos.map((item) => (
                                <tr key={item.id} className="text-center border">
                                    <td className="border p-2">{item.id}</td>
                                    <td className="border p-2">{item.nombre}</td>
                                    <td className="border p-2">{item.categoria}</td>
                                    <td className="border p-2">{item.actual}%</td>
                                    <td className="border p-2">{item.usado}%</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <button className="mt-4 bg-[#592644] text-white p-3 rounded-2xl hover:bg-[#4b1f3d]">
                    Generar Reporte PDF
                </button>
            </div>
        </div>
    );
};

export default Reportes;
