import { TransitionLink } from '../App';

export default function IndexPage() {
  return (
    <div className="relative flex flex-1 flex-col h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black rounded-3xl overflow-hidden">
        <img alt="SUPER DOPE CLOUDS BACKGROUND" className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-125" src="/assets/img/bg.png" />
      </div>
      
      <div className="flicker relative z-10 flex flex-1 flex-col h-full w-full items-center justify-center gap-10 overflow-hidden shadow-[0_7px_10px_0_#00000070_inset]">
        <img alt="SUPER DOPE" className="my-8 h-[24vh] w-auto max-w-[90%] object-contain md:h-[30vh]" src="https://raw.githubusercontent.com/YAZR007/superdope_website/main/RAINBOWLOGO-removebg-preview.png" />
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="text-white text-3xl md:text-5xl font-bold tracking-widest drop-shadow-lg flex items-center justify-center gap-2">
            <TransitionLink to="/menu" className="group transition-all duration-300 flex items-center justify-center gap-2">
              <span className="text-stroke-2xs -mr-2 animate-blink transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">&gt;</span>
              <strong className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]"> PRESS START</strong>
            </TransitionLink>
          </div>
          <div className="text-xl md:text-3xl mt-2 drop-shadow-md">
            <strong className="text-stroke-2xs text-yellow-200">スタートを押す</strong>
          </div>
        </div>
        
        <div className="text-stroke-xs-white text-sm text-white absolute bottom-6">© 2026 SUPER DOPE</div>
        
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="stars-fx"></div>
        </div>
      </div>
    </div>
  );
}
