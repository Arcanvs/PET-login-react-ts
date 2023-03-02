import { useSelector } from 'react-redux';
import { AppStore } from './redux/store';
import { Home, Login } from "./components/pages";

function App() {
  const user = useSelector((state: AppStore) => state.user);
  return (
    <div className="App">
      <div className="flex items-center justify-center h-screen">
        {user.name ? <Home img={user.image} name={user.name} /> : <Login />}
      </div>
    </div>
  )
}

export default App
