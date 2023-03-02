import { useSelector } from 'react-redux';
import { AppStore } from './redux/store';
import { Home, Login } from "./components/pages";

function App() {
  const user = useSelector((state: AppStore) => state.user);
  return (
    <div className="App">
      <span>{JSON.stringify(user)}</span>
      <Login />
    </div>
  )
}

export default App
