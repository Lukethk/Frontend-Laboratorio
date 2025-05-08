import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray   -100">
            <div className="w-full max-w-md p-8">

                <h2 className="text-2xl font-bold text-[#592644] text-center">
                    Inventario de Laboratorio
                </h2>
                <p className="text-center text-gray-600">
                    Inicio sesión con su cuenta
                </p>

                <div className="mt-6 p-5 bg-[#59264426] rounded-2xl h-38 flex flex-col justify-end pb-8">
                    <h4 className="text-lg font-semibold text">Iniciar Sesión</h4>
                    <p className="text-sm text-gray-600">
                        Ingrese su correo de docente Universitario
                    </p>
                </div>


                <div className="mt-6">
                    <label className="block text font-semibold">Correo</label>
                    <input
                        type="email"
                        placeholder="Ingrese su correo"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#592644]"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text font-semibold">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingrese su contraseña"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#592644]"
                    />
                </div>

                <button
                    className="w-full mt-6 p-3 bg-[#592644] text-white font-bold rounded-3xl hover:bg-[#4b1f3d] transition"
                    onClick={() => navigate("/Dashboard")}
                >
                    Iniciar sesión
                </button>
            </div>
        </div>
    );
};

export default Login;
