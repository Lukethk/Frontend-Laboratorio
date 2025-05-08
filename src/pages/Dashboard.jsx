import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";

const API_URL = "https://tuapi.com/datos";

const Card = ({ title, value, subtitle, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer flex flex-col justify-between p-4 bg-[#f5ebf0] rounded-2xl shadow-md w-60 h-40 transition-transform hover:scale-105">
            <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-xs text-gray-600">{subtitle}</p>
        </div>
    );
};

const Modal = ({ show, onClose, title, content }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md">
            <div className="bg-white p-8 rounded-3xl shadow-1xl w-[500px] h-[50vh] max-h-[80vh] overflow-y-auto border border-gray-300 flex flex-col">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-4 text-gray-700">{content}</p>

                <div className="mt-auto flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};



const AlertsTable = ({ alerts, error, reload }) => {
    if (error) {
        return (
            <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-3 rounded-md text-center">
                <p>Error al cargar los datos. Intenta nuevamente.</p>
                <button
                    onClick={reload}
                    className="mt-2 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition">
                    Reintentar
                </button>
            </div>
        );
    }

    return (
        <table className="w-full mt-4 border-t text-sm text-left">
            <tbody>
            {alerts.map((alerta, index) => (
                <tr key={index} className="border-b">
                    <td className="py-2 px-4">{alerta.nombre}</td>
                    <td className="py-2 px-4">Cantidad: {alerta.cantidad} unidades</td>
                    <td className="py-2 px-4">Nivel mínimo: {alerta.minimo} unidades</td>
                    <td className="py-2 px-4">{alerta.laboratorio}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", content: "" });

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Error al obtener los datos.");
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalOpen(true);
    };

    return (
        <div className="flex relative">
            <Sidebar />
            <main className="flex-1 p-6 bg-white ml-8 relative">
                <h2 className="text-2xl font-bold mb-4">Vista general del inventario</h2>

                <div className="flex space-x-8 mt-10">
                    <Card
                        title="TOTAL INSUMOS"
                        value={data?.totalInsumos || "-"}
                        subtitle="Insumos del laboratorio"
                        onClick={() => openModal("Total Insumos", "Aquí va la información detallada de los insumos.")}
                    />

                    <Card
                        title="STOCK CRÍTICO"
                        value={data?.stockCritico || "-"}
                        subtitle="Requieren atención inmediata"
                        onClick={() => openModal("Stock Crítico", "Lista de insumos con stock bajo.")}
                    />

                    <Card
                        title="CONSUMO SEMESTRAL"
                        value={data?.consumoSemestral || "-"}
                        subtitle="Reporte del consumo de insumos"
                        onClick={() => openModal("Consumo Semestral", "Reporte del consumo de insumos en el último semestre.")}
                    />
                </div>

                <h3 className="text-lg font-bold mt-16">Alertas y notificaciones</h3>
                <AlertsTable alerts={data?.alertas || []} error={error} reload={fetchData} />

                <h3 className="text-lg font-bold mt-12">Consumo de insumos</h3>
                <div
                    className="w-90 h-30 mt-6 p-4 bg-[#f5ebf0] rounded-2xl shadow-md w-1/3 cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => openModal("Consumo de Insumos", "Aquí verás un análisis del consumo de insumos en los últimos meses.")}>
                    <h4 className="text-sm font-semibold text-gray-700">Insumos utilizados</h4>
                    <p className="text-xs text-gray-600">Reporte de insumos utilizados</p>
                </div>


                <Modal
                    show={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={modalContent.title}
                    content={modalContent.content}
                />
            </main>
        </div>
    );
};

export default Dashboard;
