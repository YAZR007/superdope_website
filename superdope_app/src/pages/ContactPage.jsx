export default function ContactPage() {
  return (
    <div className="relative flex flex-1 flex-col h-full w-full overflow-hidden items-center justify-center">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black rounded-3xl overflow-hidden">
        <img alt="DANKSTAR CLOUDS BACKGROUND" className="absolute inset-0 h-full w-full object-cover" src="https://github.com/YAZR007/superdope_website/blob/main/backgroundshop.jpg?raw=true" />
      </div>
      <div className="flicker relative z-10 flex flex-1 flex-col h-full w-full items-center justify-center gap-10 overflow-hidden shadow-[0_7px_10px_0_#00000070_inset]">
        <h1 className="text-white text-5xl md:text-8xl font-bold tracking-widest drop-shadow-lg">CONTACT</h1>
        <a href="https://www.instagram.com/DANKSTARZCO" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white text-3xl md:text-5xl font-bold tracking-widest drop-shadow-lg animate-pulse">
          <img src="https://raw.githubusercontent.com/YAZR007/superdope_website/main/1000040247-removebg-preview.png" alt="Instagram" className="w-20 h-20 md:w-24 md:h-24" />
          <span>@DANKSTARZCO</span>
        </a>
      </div>
    </div>
  );
}