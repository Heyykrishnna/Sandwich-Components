export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto mt-4 w-full max-w-384 px-4 pb-8 pt-24 sm:px-6 lg:px-8"
    >
      <div className="bg-[linear-gradient(180deg,rgba(19,19,22,0.97),rgba(9,9,10,0.99)),rgba(11,11,12,0.94)] border border-line shadow-[0_30px_80px_var(--shadow),inset_0_1px_0_rgba(255,255,255,0.04)] relative before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] before:bg-size-[62px_62px] before:opacity-[0.36] overflow-hidden rounded-[2.4rem] px-6 py-8 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,115,0,0.18),transparent_26%),radial-gradient(circle_at_82%_86%,rgba(255,94,0,0.2),transparent_24%),linear-gradient(180deg,rgba(255,150,40,0.04),transparent_24%,transparent_76%,rgba(255,95,0,0.04))] blur-3xl opacity-40" />
        <div className="pointer-events-none absolute bottom-[34%] left-[-4%] top-0 w-[36%] opacity-[0.4] blur-xl bg-[linear-gradient(180deg,rgba(255,140,24,0.14),transparent_72%),repeating-linear-gradient(90deg,rgba(255,113,20,0.8)_0_18px,rgba(255,113,20,0.06)_18px_46px)] mask-[radial-gradient(100%_100%_at_top_left,black_10%,transparent_80%)]" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-3%] top-[28%] w-[36%] opacity-[0.4] blur-xl bg-[linear-gradient(0deg,rgba(255,140,24,0.18),transparent_78%),repeating-linear-gradient(90deg,rgba(255,113,20,0.86)_0_18px,rgba(255,113,20,0.06)_18px_46px)] mask-[radial-gradient(100%_100%_at_top_left,black_10%,transparent_80%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent),linear-gradient(180deg,rgba(242,92,22,0.02),transparent_36%)]" />

        <div className="relative z-10 flex min-h-[78vh] flex-col justify-center">
          <div className="relative mx-auto flex flex-col lg:flex-row w-full flex-1 max-w-7xl items-center justify-between gap-12 py-18 sm:py-22 lg:py-24">
            
            {/* Left side text content */}
            <div className="flex flex-col items-start text-left max-w-2xl w-full">
              <h1
                data-hero-item
                className="text-[4rem] font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-[5rem] lg:text-[6.4rem]"
              >
                Think. <span className="font-serif italic font-normal text-accent">Design.</span> Develop.
              </h1>
              
              <p
                data-hero-item
                className="mt-8 text-[#ece6db]/82 max-w-lg text-lg leading-8 sm:text-xl"
              >
                There is no room for shortcuts when building a great digital
                experience. Everything starts with thorough research and
                iterative experimentation.
              </p>

              <div data-hero-item className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-accent px-9 py-4 text-base animate-all hover:bg-accent/80 font-semibold text-black"
                >
                  Explore Sandwiches
                </a>
              </div>
            </div>

            {/* Right side code reference */}
            <div data-hero-item className="relative mt-16 lg:mt-0 w-full max-w-xl flex items-center justify-center lg:justify-end perspective-[1000px]x]">
              <div className="relative w-full rounded-2xl border border-white/10 bg-[#16161a]/90 backdrop-blur-2xl shadow-2xl overflow-hidden transform-[rotateY(-10deg)_rotateX(5deg)] transition-transform duration-500 hover:transform-[rotate(0)]`]">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/20"></div>
                    <div className="h-3 w-3 rounded-full bg-white/20"></div>
                    <div className="h-3 w-3 rounded-full bg-white/20"></div>
                  </div>
                  <div className="text-xs font-medium text-white/40 tracking-wider">ColorBends.tsx</div>
                  <div className="w-9"></div> {/* Spacer for centering */}
                </div>
                
                {/* Code Body */}
                <div className="p-6 sm:p-8 text-[15px] font-mono text-white/80 overflow-x-auto leading-relaxed">
                  <p><span className="text-pink-400">import</span> {'{'} <span className="text-blue-300">ColorBends</span> {'}'} <span className="text-pink-400">from</span> <span className="text-green-300">'@components/ColorBends'</span>;</p>
                  <br />
                  <p><span className="text-pink-400">function</span> <span className="text-blue-300">App</span>() {'{'}</p>
                  <p className="pl-6"><span className="text-pink-400">return</span> (</p>
                  <p className="pl-12 text-white/50">{'<'}<span className="text-blue-300">ColorBends</span></p>
                  
                  <div className="pl-16 flex items-center gap-2 my-1">
                    <span className="text-[#ece6db]/60">color=</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-text" contentEditable suppressContentEditableWarning spellCheck={false}>
                      <span contentEditable={false} className="w-3 h-3 rounded-sm bg-[#FF7114] inline-block shadow-[0_0_8px_rgba(255,113,20,0.6)] select-none"></span>
                      <span className="text-green-300">"#FF7114"</span>
                    </span>
                  </div>
                  
                  <p className="pl-16"><span className="text-[#ece6db]/60">speed=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">0.2</span>{'}'}</p>
                  <p className="pl-16"><span className="text-[#ece6db]/60">frequency=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">1.0</span>{'}'}</p>
                  <p className="pl-16"><span className="text-[#ece6db]/60">noise=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">0.15</span>{'}'}</p>
                  <p className="pl-16"><span className="text-[#ece6db]/60">bandWidth=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">0.14</span>{'}'}</p>
                  <p className="pl-16"><span className="text-[#ece6db]/60">rotation=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">90</span>{'}'}</p>
                  <p className="pl-16"><span className="text-[#ece6db]/60">fadeTop=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">0.75</span>{'}'}</p>
                  <p className="pl-16"><span className="text-[#ece6db]/60">iterations=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">1</span>{'}'}</p>
                  <p className="pl-16"><span className="text-[#ece6db]/60">intensity=</span>{'{'}<span contentEditable suppressContentEditableWarning spellCheck={false} className="text-orange-300 outline-none hover:bg-white/10 rounded px-1 transition-colors cursor-text">1.3</span>{'}'}</p>
                  
                  <p className="pl-12 text-white/50">{'/>'}</p>
                  <p className="pl-6">)</p>
                  <p>{'}'}</p>
                </div>
                {/* Decorative fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#16161a] to-transparent pointer-events-none flex items-end justify-end pb-4 pr-6">
                  <span className="text-xs text-white/20 font-sans tracking-wide">Drag or click values to edit</span>
                </div>
              </div>
              
              {/* Decorative glow behind code block */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] bg-[#FF7114]/10 blur-[120px] rounded-full pointer-events-none"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
