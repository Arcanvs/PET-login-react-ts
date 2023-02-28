const Login: React.FC = () => {
    const handleLogin = () => {
        console.log('login');
    }

    return (
        <div>
            Bienvenido
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}

export default Login