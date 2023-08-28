// pages/SearchPage.tsx
import React from 'react';
// import GameCard from '../components/GameCard';
import SimpleCard from '../components/SimpleCard';


const games = [
  {
    id: 1,
    title: 'Grand Theft Auto: Vice City The Definitive Edition',
    company: 'Rockstar North',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co65yz.png',
    
  },
  {
    id: 2,
    title: 'Dragon Ball Z: Budokai Tenkaichi 3',
    company: 'Spike',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r52.png',
  },
  {
    id: 3,
    title: 'The Legend of Zelda: Breath of the Wild',
    company: 'Nintendo',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1n6b.png',
  },
    {
    id: 4,
    title: 'Midnight Club 3: DUB Edition Remix',
    company: 'Rockstar',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1hgi.png',
    },
    {
        id: 5,
        title: 'Grand Theft Auto V',
        company: 'Rockstar Games',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co66qs.png',
      },
      {
        id: 6,
        title: 'Manhunt 2',
        company: 'Rockstar Toronto',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2lcs.png',
      },
      {
        id: 7,
        title: 'FIFA Street 2',
        company: 'EA Canada',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6nmx.png',
      },
        {
        id: 8,
        title: 'Counter-Strike: Source',
        company: 'Valve',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1txv.png',
        },
  // Add more game objects as needed
];

const SearchPage: React.FC = () => {
    return (
      <div className="flex flex-col min-h-screen bg-blue-jeans-50">
        <div className="flex flex-wrap justify-center md:justify-start md:overflow-x-auto overflow-y-auto m-0 p-0 ">
          {games.map((game) => (
            <SimpleCard key={game.id} game={game} />
          ))}
        </div>
        <div className='h-16'></div>
      </div>
    );
};
  
  
  export default SearchPage;
