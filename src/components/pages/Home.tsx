import { useDispatch } from 'react-redux';
import { resetUser } from '../../redux/slices/user.slice';

type Props = {
    img: string;
    name: string;
}

const Home: React.FC<Props> = ({img, name}) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(resetUser());
    }
    return (
        <div className="flex justify-center">
            <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <img
                    className="rounded-t-lg"
                    src={img}
                    alt={name} />
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {name}
                    </h5>
                    <button 
                        onClick={handleLogout}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        salir
                    </button>
                </div>
            </div>
        </div>    
    )
}

export default Home