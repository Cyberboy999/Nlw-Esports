//linkando props ao seus props. Ex: props.title
interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

//Simplificando codigo escrito em app.tsx para nao repetir 6 vezes, 1 em cada banner de jogo
export function Gamebanner(props: GameBannerProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={props.bannerUrl} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>{props.title}</strong>
            <span className='text-zinc-300 text-sm block mt-1'>{props.adsCount} anuncio(s) </span>
          </div>
        </a>
    )
}