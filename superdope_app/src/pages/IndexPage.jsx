import { TransitionLink } from '../App';

export default function IndexPage() {
  return (
    <div className="relative flex flex-1 flex-col h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black rounded-3xl overflow-hidden">
        <img alt="DANKSTAR CLOUDS BACKGROUND" className="absolute inset-0 h-full w-full object-cover" src="https://github.com/YAZR007/superdope_website/blob/main/backgroundshop.jpg?raw=true" />
      </div>

      <div className="flicker relative z-10 flex flex-1 flex-col h-full w-full items-center justify-center gap-4 sm:gap-6 md:gap-10 overflow-hidden shadow-[0_7px_10px_0_#00000070_inset]">
        <img alt="DANKSTAR" className="my-4 sm:my-6 md:my-8 w-3/4 max-w-lg sm:max-w-xl md:max-w-[600px] object-contain" src="https://raw.githubusercontent.com/YAZR007/superdope_website/main/1000040801-removebg-preview.png" />
        <div className="mb-3 sm:mb-4 md:mb-6 flex flex-col items-center gap-2 sm:gap-3">
          <div className="text-white text-lg sm:text-3xl md:text-5xl font-bold tracking-widest drop-shadow-lg flex items-center justify-center gap-2">
            <TransitionLink to="/menu" className="group transition-all duration-300 flex items-center justify-center gap-2">
              <span className="text-stroke-2xs -mr-2 animate-blink transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">&gt;</span>
              <strong className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">PRESS START</strong>
            </TransitionLink>
          </div>
          <div className="text-base sm:text-xl md:text-3xl mt-1 sm:mt-2 drop-shadow-md">
            <strong className="text-stroke-2xs text-yellow-200">スタートを押す</strong>
          </div>
        </div>

        <div className="text-stroke-xs-white text-xs sm:text-sm text-white absolute bottom-4 sm:bottom-5 md:bottom-6">© 2026 DANKSTAR</div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="stars-fx"></div>
        </div>
      </div>
    </div>
  );
}
