import { MagnifyingGlassPlus } from "phosphor-react";
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className='Max-w-[1344px] mr-7 ml-7 flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlwgradient bg-clip-text'>duo</span> esta aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'> 
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Wow</strong>
            <span className='text-zinc-300 text-sm block mt-1'>1 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>8 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>2 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Csgo</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex</strong>
            <span className='text-zinc-300 text-sm block mt-1'>3 anuncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlwgradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Nao encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anuncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>
      </div>

    </div>
    
  )
}

export default App
