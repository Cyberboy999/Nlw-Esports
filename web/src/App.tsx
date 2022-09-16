// imports necessarios para a aplicacao rodar
import { DiscordLogo, GameController, MagnifyingGlassPlus } from "phosphor-react";
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { Gamebanner } from "./components/Gamebanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from "./components/form/imput";

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
    fetch('http://localhost:3333/games')
    .then(Response => Response.json())
    .then(data => {
      setGames(data)
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
        
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed">
            <Dialog.Content className="fixed bg-[#2a2636] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">Publique um anuncio</Dialog.Title>
                <form className="mt-8 flex flex-col gap-4">
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="game" className="font-semibold">Qual o game?</label>
                    <Input id="game" placeholder="Selecione o game que deseja jogar"></Input>
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="name">Seu nome ou nickname</label>
                    <Input id="name" placeholder="Digite seu nome ou nickname"></Input>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="yearsPlaying">joga a quantos anos?</label>
                      <Input type="number" id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="discord">Qual seu discord</label>
                      <Input type="text" placeholder="Usuario#0000" id="discord"></Input>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="weekDays">Quando costuma jogar?</label>

                      <div className="grid grid-cols-4 gap-2">
                        <button 
                        className="w-8 h-8 rounded bg-zinc-900" title="Domingo">D
                        </button>
                        <button 
                        className="w-8 h-8 rounded bg-zinc-900" title="Segunda">S
                        </button>
                        <button 
                        className="w-8 h-8 rounded bg-zinc-900" title="Terca">T
                        </button>
                        <button 
                        className="w-8 h-8 rounded bg-zinc-900" title="Quarta">Q
                        </button>
                        <button 
                        className="w-8 h-8 rounded bg-zinc-900" title="Quinta">Q
                        </button>
                        <button 
                        className="w-8 h-8 rounded bg-zinc-900" title="Sexta">S
                        </button>
                        <button 
                        className="w-8 h-8 rounded bg-zinc-900" title="Sabado">S
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="hourStart">Qual horario do dia?</label>
                      <div className="grid grid-cols gap-2"> 
                        <Input id="hourStart" type="time" placeholder="De"></Input>
                        <Input id="hourEnd" type="time" placeholder="Ate"></Input>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2 text-sm">
                    <Input type="checkbox" />
                    Costumo me conectar no chat de voz
                  </div>

                  <footer className="mt-4 flex justify-end gap-4">
                    <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600" type="button">Cancelar</Dialog.Close>
                    <button className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600" type="submit">
                      <GameController size={24}></GameController>
                      Encontrar duo
                    </button>
                  </footer>
                </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
    
  )
}

export default App
