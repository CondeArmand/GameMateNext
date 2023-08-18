import React from "react";
import Carousel from "nuka-carousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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
        console.log('GAME ID:', game.id);
    }

    const responsiveSlidesToShow = {
        small: 2,
        medium: 3,
        large: 4
    };

    const initialSlideIndex = Math.floor(games.length / 2); // Calcula o índice do slide central

    return (
        <Carousel
            
            cellAlign="center"
            cellSpacing={20}
            autoplay={true}
            wrapAround={true}
            renderBottomCenterControls={null}
            slidesToShow={responsiveSlidesToShow.medium}
            
            slideIndex={initialSlideIndex} // Define o índice inicial para o slide central
            renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide}><ArrowBackIosIcon className='text-white' sx={{fontSize: 35}}/></button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide}><ArrowForwardIosIcon className="text-white" sx={{fontSize: 35} }/></button>
            )}
        >
            {games.map((game: Game) => (
                <div className="carousel-card" key={game.id}>
                    <img
                        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
                        alt={game.id.toString()}
                        onClick={() => pickGameId(game)}
                        className="cursor-pointer"
                    />
                </div>
            ))}
        </Carousel>
    );
}
