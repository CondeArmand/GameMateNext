'use client'

import Header from '../components/Header';
import FooterNavbar from '../components/FooterNavbar';
import Carrossel from '@/components/Carrossel';
import { getLatestGameInfo } from '@/utils/igdb/Request';

interface Game {
    id: number,
    cover: {
        image_id: string
    },
}

interface MainPageProps {
    gamesData: Game[]
}

export default function MainPage({gamesData}: MainPageProps) {

    
 
    return (
        <div className=''>
            <Header></Header>
            <div className=''>
                <Carrossel games={gamesData}></Carrossel>
            </div>
            <FooterNavbar></FooterNavbar>
        </div>
    )
}

export async function getServerSideProps() {
    const gameInfo =  await getLatestGameInfo();

    return {
        props: {
            gamesData: gameInfo
        }
    }
}