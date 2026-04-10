import { TransitionLink } from '../App';

export default function MenuPage() {
  return (
    <div className="relative flex flex-1 flex-col h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black rounded-3xl overflow-hidden">
        <img alt="SUPER DOPE CLOUDS BACKGROUND" className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-125" src="/assets/img/bg.png" />
      </div>
      
      <div className="flicker relative z-10 flex flex-1 flex-col h-full w-full overflow-y-auto shadow-[0_7px_10px_0_#00000070_inset] pt-12">
        <nav role="navigation" className="flex flex-1 w-full flex-col items-center justify-start pointer-events-auto text-white">
          <ul className="flex flex-col gap-[3vh] text-[4vh] tracking-widest md:gap-[2.5vh] md:text-3xl mt-10 font-bold drop-shadow-md items-center">
            <li className="uppercase transition-transform duration-100 hover:scale-125">
              <TransitionLink to="/menu#media" className="group relative flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-none absolute right-full mr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-stroke-2xs animate-blink text-yellow-300">&gt;</span>
                </div>
                <div className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">Media</div>
              </TransitionLink>
            </li>
            <li className="uppercase transition-transform duration-100 hover:scale-125">
              <TransitionLink to="/menu#locations" className="group relative flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-none absolute right-full mr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-stroke-2xs animate-blink text-yellow-300">&gt;</span>
                </div>
                <div className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">Locations</div>
              </TransitionLink>
            </li>
            <li className="uppercase transition-transform duration-100 hover:scale-125">
              <TransitionLink to="/events" className="group relative flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-none absolute right-full mr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-stroke-2xs animate-blink text-yellow-300">&gt;</span>
                </div>
                <div className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">Events</div>
              </TransitionLink>
            </li>
            <li className="uppercase transition-transform duration-100 hover:scale-125">
              <TransitionLink to="/menu#series" className="group relative flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-none absolute right-full mr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-stroke-2xs animate-blink text-yellow-300">&gt;</span>
                </div>
                <div className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">Shop</div>
              </TransitionLink>
            </li>
            <li className="uppercase transition-transform duration-100 hover:scale-125">
              <TransitionLink to="/collections/all" className="group relative flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-none absolute right-full mr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-stroke-2xs animate-blink text-yellow-300">&gt;</span>
                </div>
                <div className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">Merch</div>
              </TransitionLink>
            </li>
            <li className="uppercase transition-transform duration-100 hover:scale-125">
              <TransitionLink to="/rewards" className="group relative flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-none absolute right-full mr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-stroke-2xs animate-blink text-yellow-300">&gt;</span>
                </div>
                <div className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">Rewards</div>
              </TransitionLink>
            </li>
            <li className="uppercase transition-transform duration-100 hover:scale-125">
              <TransitionLink to="/contact" className="group relative flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-none absolute right-full mr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-stroke-2xs animate-blink text-yellow-300">&gt;</span>
                </div>
                <div className="text-stroke-2xs transition-colors duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">Contact</div>
              </TransitionLink>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center text-white pb-2">
          <TransitionLink to="/" className="group transition-all duration-300">
            <div className="flex flex-row items-center gap-4 text-xl text-yellow-400 group-hover:text-white mb-4 drop-shadow-md font-bold tracking-widest transition-colors duration-300">
              <div className="text-2xl pt-1">←</div><span className="text-stroke-xs-white group-hover:text-white">BACK TO MAIN</span>
            </div>
          </TransitionLink>
          <div className="text-stroke-xs-white text-sm text-white font-sans tracking-tight">© 2026 SUPER DOPE</div>
        </div>
      </div>
    </div>
  );
}
