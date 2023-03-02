import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { UserEmptyState } from "../../models/user.type";
import { createUser } from "../../redux/slices/user.slice";
import { fetchCharacter, apiUrl } from "../../services/data";


const Login: React.FC = () => {
    const dispatch = useDispatch();
    
    const getCharacter = async() => {
        let randomCharacter: number = Math.floor(Math.random() * 800);
        const result = await fetchCharacter(`${apiUrl}${randomCharacter}`);
        dispatch(createUser(result));
    };

    const handleLogin = async () => {
        await getCharacter();
    }

    return (
        <div className="flex justify-center">
            <div
                className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Login de prueba
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Utilizando Redux y Rick&Morty API
                </p>
                <button
                    onClick={handleLogin}
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    Entrar
                </button>
            </div>
        </div>
    )
}

export default Login