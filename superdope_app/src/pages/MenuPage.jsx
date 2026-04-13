
import { TransitionLink } from '../App';

export default function MenuPage() {
  return (
    <div className="relative flex flex-1 flex-col h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black rounded-3xl overflow-hidden">
        <img alt="SUPER DOPE CLOUDS BACKGROUND" className="absolute inset-0 h-full w-full object-cover brightness-200 saturate-[3]" src="/assets/img/bg.png" />
        <div className="absolute inset-0 bg-blue-300 opacity-30"></div>
      </div>
      
      <div className="flicker relative z-10 flex flex-1 flex-col h-full w-full overflow-y-auto shadow-[0_7px_10px_0_#00000070_inset] pt-12">
        <nav role="navigation" className="flex flex-1 w-full flex-col items-center justify-center pointer-events-auto text-white">
          <ul className="flex flex-col justify-center gap-8 text-[8vh] tracking-widest md:text-6xl font-bold drop-shadow-md items-center">
            <li data-text="Media" className="uppercase transition-transform duration-100 hover:scale-125 relative group">
              <TransitionLink to="/menu#media" className="transition-all duration-300">
                <div className="menu-item-focus group-hover:text-stroke-xs-white group-focus:text-stroke-xs-white text-stroke-2xs z-10" style={{gridArea: '1 / 1 / -1 / -1'}} data-glitched="1">Media</div>
              </TransitionLink>
            </li>
            <li data-text="Shop" className="uppercase transition-transform duration-100 hover:scale-125 relative group">
              <TransitionLink to="/menu#series" className="transition-all duration-300">
                <div className="menu-item-focus group-hover:text-stroke-xs-white group-focus:text-stroke-xs-white text-stroke-2xs z-10" style={{gridArea: '1 / 1 / -1 / -1'}} data-glitched="1">Shop</div>
              </TransitionLink>
            </li>
            <li data-text="Merch" className="uppercase transition-transform duration-100 hover:scale-125 relative group">
              <TransitionLink to="/collections/all" className="transition-all duration-300">
                <div className="menu-item-focus group-hover:text-stroke-xs-white group-focus:text-stroke-xs-white text-stroke-2xs z-10" style={{gridArea: '1 / 1 / -1 / -1'}} data-glitch="1">Merch</div>
              </TransitionLink>
            </li>
            <li data-text="Contact" className="uppercase transition-transform duration-100 hover:scale-125 relative group">
              <TransitionLink to="/contact" className="transition-all duration-300">
                <div className="menu-item-focus group-hover:text-stroke-xs-white group-focus:text-stroke-xs-white text-stroke-2xs z-10" style={{gridArea: '1 / 1 / -1 / -1'}} data-glitch="1">Contact</div>
              </TransitionLink>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center text-white pb-2">
          <div className="text-stroke-xs-white pb-2 text-2xl text-black md:pb-4">© 2026 DANKSTARS</div>
        </div>
      </div>
    </div>
  );
}
