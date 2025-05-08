import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Supplies = () => {
    const allSupplies = [
        { codigo: "8246", nombre: "Jumpers MM", categoria: "Conectores", cantidad: 125, estado: "Disponible", fecha: "2025-10-15" },
        { codigo: "0587", nombre: "Jumpers MH", categoria: "Conectores", cantidad: 45, estado: "Stock Bajo", fecha: "2025-10-12" },
        { codigo: "5472", nombre: "Jumpers HH", categoria: "Conectores", cantidad: 0, estado: "Sin stock", fecha: "2025-10-10" },
        { codigo: "2986", nombre: "Arduino", categoria: "Micro Controlador", cantidad: 0, estado: "Sin stock", fecha: "2025-10-08" },
        { codigo: "1567", nombre: "ESP-32", categoria: "Micro Controlador", cantidad: 120, estado: "Disponible", fecha: "2025-10-05" },
        { codigo: "3458", nombre: "Soldador", categoria: "Herramienta", cantidad: 43, estado: "Disponible", fecha: "2025-10-01" }
    ];

    const [filter, setFilter] = useState("Todos");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [newSupply, setNewSupply] = useState({ nombre: "", categoria: "", cantidad: "", estado: "Disponible" });

    const filteredSupplies = allSupplies.filter(supply => {
        if (filter === "Todos") return true;
        return supply.estado === filter;
    });

    const handleChange = (e) => {
        setNewSupply({ ...newSupply, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex h-screen">
            <button
                className="absolute top-4 left-4 z-50 p-2 bg-[#592644] text-white rounded-md md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                ☰
            </button>

            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform transform md:relative md:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:block`}>
                <Sidebar />
            </div>

            <div className="flex-1 p-4 bg-white ml-0 md:ml-3">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="text-xl md:text-2xl font-bold text-black text-center md:text-left">
                        Gestión de Suministros
                    </h2>
                    <button onClick={() => setModalOpen(true)} className="w-full md:w-40 p-2 bg-[#592644] text-white rounded-2xl hover:bg-[#4b1f3d] transition">
                        Agregar
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap justify-center md:justify-start space-x-2 border-b pb-2">
                    {["Todos", "Stock Bajo", "Sin stock"].map(option => (
                        <button
                            key={option}
                            className={`text-sm font-medium relative px-2 transition-all duration-200 ${
                                filter === option ? "text-black font-semibold scale-105" : "text-gray-500 hover:text-black hover:scale-105"
                            }`}
                            onClick={() => setFilter(option)}
                        >
                            {option}
                            {filter === option && (
                                <div className="absolute left-0 right-0 h-[2px] bg-black bottom-[-2px] transition-all duration-200"></div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="bg-white p-4 rounded-lg shadow mt-4 overflow-x-auto">
                    <table className="w-full min-w-[700px] border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">CÓDIGO</th>
                            <th className="border p-2">NOMBRE</th>
                            <th className="border p-2">CATEGORÍA</th>
                            <th className="border p-2">CANTIDAD</th>
                            <th className="border p-2">ESTADO</th>
                            <th className="border p-2">ÚLTIMA ACTUALIZACIÓN</th>
                            <th className="border p-2">ACCIONES</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredSupplies.map((supply, index) => (
                            <tr key={index} className="text-center border">
                                <td className="border p-2">{supply.codigo}</td>
                                <td className="border p-2">{supply.nombre}</td>
                                <td className="border p-2">{supply.categoria}</td>
                                <td className="border p-2">{supply.cantidad} unidades</td>
                                <td className="border p-2">{supply.estado}</td>
                                <td className="border p-2">{supply.fecha}</td>
                                <td className="border p-2 flex justify-center space-x-2">
                                    <button className="p-2 bg-[#592644] text-white rounded hover:bg-[#59264426] transition">
                                        <PencilIcon className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 bg-[#592644] text-white rounded hover:bg-[#59264426] transition">
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#59264426] z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-black">Agregar Suministro</h2>
                            <button onClick={() => setModalOpen(false)}>
                                <XMarkIcon className="w-6 h-6 text-gray-700 hover:text-red-500 transition" />
                            </button>
                        </div>
                        <input className="w-full border p-2 rounded mb-2" type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
                        <input className="w-full border p-2 rounded mb-2" type="text" name="categoria" placeholder="Categoría" onChange={handleChange} />
                        <input className="w-full border p-2 rounded mb-2" type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} />
                        <button className="w-full p-2 bg-[#592644] text-white rounded mt-4">Guardar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Supplies;
