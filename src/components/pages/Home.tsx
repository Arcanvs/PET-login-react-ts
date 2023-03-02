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
        <div>
            img-url: {img}
            name: {name}
            <button onClick={handleLogout}>Salir</button>
        </div>
    )
}

export default Home