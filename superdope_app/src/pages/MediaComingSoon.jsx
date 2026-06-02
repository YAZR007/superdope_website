export default function MediaComingSoon() {
  return (
    <div className="relative flex flex-1 flex-col h-full w-full overflow-hidden items-center justify-center">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black rounded-3xl overflow-hidden">
        <img alt="DANKSTAR CLOUDS BACKGROUND" className="absolute inset-0 h-full w-full object-cover" src="https://github.com/YAZR007/superdope_website/blob/main/backgroundshop.jpg?raw=true" />
      </div>
      <div className="flicker relative z-10 flex flex-1 flex-col h-full w-full items-center justify-center gap-10 overflow-hidden shadow-[0_7px_10px_0_#00000070_inset]">
        <h1 className="text-white text-5xl md:text-8xl font-bold tracking-widest drop-shadow-lg animate-pulse">COMING SOON</h1>
        <div className="stars-fx"></div>
      </div>
    </div>
  );
}
