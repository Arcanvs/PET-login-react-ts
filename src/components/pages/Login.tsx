import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { UserEmptyState } from "../../models/user.type";
import { createUser } from "../../redux/slices/user.slice";
import { fetchCharacter, apiUrl } from "../../services/data";


const Login: React.FC = () => {
    const dispatch = useDispatch();
    
    const getCharacter = async() => {
        const result = await fetchCharacter(apiUrl);
        dispatch(createUser(result));
    };

    const handleLogin = async () => {
        await getCharacter();
    }

    return (
        <div>
            Bienvenido
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}

export default Login