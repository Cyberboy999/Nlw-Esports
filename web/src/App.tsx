// imports necessarios para a aplicacao rodar

import { useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog'

import { Gamebanner } from "./components/Gamebanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

  //linkando o "game" ao seus devidos props. Ex: game.id
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

  //Chamado de informacoes para API 
  useEffect(() => {
    axios('http://localhost:3333/games').then(Response => {
      setGames(Response.data)
    })
  }, [])

  //retornando Logo, texto, banners e criacao de anuncio
  return (
    <div className='Max-w-[1344px] ml-28 mr-28 flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlwgradient bg-clip-text'>duo</span> esta aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'> 
        {games.map(game => {
          return (
            <Gamebanner 
            key={game.id} 
            title={game.title} 
            bannerUrl={game.bannerUrl} 
            adsCount={game._count.ads}/>
          )
        })}
        
  {/* Criando o modal para abrir uma tela sobreposta, para preenchimento do formulario */}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
