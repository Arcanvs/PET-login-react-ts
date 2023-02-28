type Props = {
    img: string;
    name: string;
}

const Home: React.FC<Props> = ({img, name}) => {
  return (
    <div>
        img-url: {img}
        name: {name}
    </div>
  )
}

export default Home