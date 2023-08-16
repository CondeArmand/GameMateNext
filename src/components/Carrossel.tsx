import Carousel from "nuka-carousel";

interface Game {
    id: number,
    cover: {
        image_id: string
    },
}

interface CarrosselProps {
    games: Game[]
}

export default function Carrossel({ games }: CarrosselProps) {

    function pickGameId(game: Game) {
        console.log('GAME ID:', game.id)
    }

    return (
        <>
            <Carousel cellAlign="left" slidesToShow={1}>
                {games.map((game: any) => (
                    <img
                        key={game.id}
                        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
                        alt={game.id}
                        onClick={() => pickGameId(game)}
                    />
                ))}
            </Carousel>
        </>
    )
}