import { MagnifyingGlassPlus } from "phosphor-react";
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { Gamebanner } from "./components/Gamebanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(Response => Response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='Max-w-[1344px] ml-28 mr-28 flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlwgradient bg-clip-text'>duo</span> esta aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'> 
        {games.map(game => {
          return (
            <Gamebanner bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
          )
        })}

      </div>

      <CreateAdBanner />
    </div>
    
  )
}

export default App
