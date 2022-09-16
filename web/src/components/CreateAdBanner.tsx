//importacoes necessarias para rodar aplicacao
import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

//Criando componente para minimizar codigo escrito no app.tsx (Parte para criar e publicar um anuncio de game)
export function CreateAdBanner () {
    return (
        <div className='pt-1 bg-nlwgradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Nao encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anuncio para encontrar novos players!</span>
          </div>

          <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </Dialog.Trigger>
        </div>
      </div>
    )
}