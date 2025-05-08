const Card = ({ title, value, subtitle }) => {
    return (
        <div className="bg-[#F4EDF2] p-6 rounded-2xl shadow-lg w-60 text-black relative">
            {/* Círculo en la parte superior */}
            <div className="w-8 h-8 bg-[#E2D3DA] rounded-full absolute top-4 left-4"></div>

            {/* Contenido */}
            <h3 className="text-sm font-bold mt-6">{title}</h3>
            <p className="text-3xl font-bold mt-1">{value}</p>
            {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}

            {/* Botón */}
            <button className="mt-4 bg-[#592644] text-white px-4 py-2 rounded-lg text-sm">
                Ver detalles
            </button>
        </div>
    );
};

export default Card;
