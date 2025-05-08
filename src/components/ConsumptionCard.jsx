const ConsumptionCard = () => {
    return (
        <div className="bg-[#F4EDF2] p-6 rounded-2xl shadow-lg w-[360px]">
            <h4 className="text-lg font-bold">Insumos utilizados</h4>
            <p className="text-sm text-gray-600">Reporte de insumos utilizados</p>

            <button className="mt-4 bg-[#E2D3DA] text-[#592644] px-4 py-2 rounded-lg text-sm">
                Ver detalles
            </button>
        </div>
    );
};

export default ConsumptionCard;
