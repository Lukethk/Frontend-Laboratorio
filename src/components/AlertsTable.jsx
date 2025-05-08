const AlertsTable = () => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-bold">Alertas y notificaciones</h3>
            <table className="w-full mt-2 border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">Insumo</th>
                    <th className="border p-2">Cantidad</th>
                    <th className="border p-2">Nivel Mínimo</th>
                    <th className="border p-2">Laboratorio</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border p-2">Jumpers MM</td>
                    <td className="border p-2">5 unidades</td>
                    <td className="border p-2">20 unidades</td>
                    <td className="border p-2">Laboratorio ISI</td>
                </tr>
                <tr>
                    <td className="border p-2">Estano</td>
                    <td className="border p-2">5 metros</td>
                    <td className="border p-2">25 metros</td>
                    <td className="border p-2">Laboratorio IBM</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AlertsTable;
