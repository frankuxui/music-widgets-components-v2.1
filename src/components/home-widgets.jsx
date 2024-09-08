export default function HomeWidgets () {
  return (
    <div className="flex flex-col relative z-[1]">

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">...</div>

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">

        <article className='w-[291px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='relative'>
            <div className='flex items-center justify-between gap-2 absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent text-white'>
              <div className='flex items-center flex-row justify-between'>
                <div className='mr-auto'>
                  <span>Music</span>
                  <h3 className='font-semibold text-base'>Cameron Williamson</h3>
                </div>
              </div>
              <button className='flex-none flex justify-center items-center rounded-full w-8 h-8 transition-colors bg-white text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
              </button>
            </div>
            <img
              src='https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='Brett Sayles'
              data-author-profile='https://www.pexels.com/es-es/@brett-sayles/'
              className='object-cover w-full'
              loading="lazy"
            />
          </div>
        </article>

      </div>

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">

        <section className='grid grid-cols-2 gap-3 w-[291px]'>
          <article className='relative flex flex-col items-start justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-black border-transparent' >
            <button className='absolute top-4 right-4 w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-colors duration-300 text-white hover:bg-white/10 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-emerald-600'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
            </button>
            <header className='flex flex-col gap-2'>
              <img
                src="https://images.pexels.com/photos/4316518/pexels-photo-4316518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                data-author="Anna Shvets"
                data-author-profile="https://www.pexels.com/es-es/@shvetsa"
                alt="cover"
                loading="lazy"
                className='w-10 h-10 object-cover rounded-full'
              />
              <h2 className="text-lg leading-5 font-extrabold bg-gradient-to-r from-emerald-500 to-amber-400 block text-transparent bg-clip-text">Summer vibes</h2>
            </header>
            <section className='w-full flex items-center justify-between'>
              <div className='w-full flex justify-start items-center h-8 gap-0.5'>
                <div className='w-0.5 h-[20%] rounded bg-white' />
                <div className='w-0.5 h-[30%] rounded bg-white' />
                <div className='w-0.5 h-[20%] rounded bg-white' />
                <div className='w-0.5 h-[35%] rounded bg-white' />
                <div className='w-0.5 h-[50%] rounded bg-white' />
                <div className='w-0.5 h-[30%] rounded bg-white' />
                <div className='w-0.5 h-[40%] rounded bg-white' />
                <div className='w-0.5 h-[35%] rounded bg-white' />
                <div className='w-0.5 h-[30%] rounded bg-white' />
                <div className='w-0.5 h-[20%] rounded bg-gray-600' />
                <div className='w-0.5 h-[28%] rounded bg-gray-600' />
                <div className='w-0.5 h-[20%] rounded bg-gray-600' />
                <div className='w-0.5 h-[10%] rounded bg-gray-600' />
              </div>
              <button className="flex-none inline-flex items-center justify-center rounded-full w-8 h-8 border-2 text-white border-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26">
                  <path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path>
                </svg>
              </button>
            </section>
          </article>
          <article className='relative flex flex-col items-start justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-black border-transparent' >
            <button className='absolute top-4 right-4 w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-colors duration-300 text-white hover:bg-white/10 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-amber-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
            </button>
            <header className='flex flex-col gap-2'>
              <div className='w-10 h-10 rounded-full inline-flex items-center justify-center font-semibold text-bsmase bg-amber-400'> MA </div>
              <h2 className="text-lg leading-5 font-extrabold bg-gradient-to-r from-amber-500 to-rose-500 block text-transparent bg-clip-text">Martin Anderson</h2>
            </header>
            <section className='w-full flex items-center justify-between'>
              <div className='w-full flex justify-start items-center h-8 gap-0.5'>
                <div className='w-0.5 h-[20%] rounded bg-white' />
                <div className='w-0.5 h-[30%] rounded bg-white' />
                <div className='w-0.5 h-[20%] rounded bg-white' />
                <div className='w-0.5 h-[35%] rounded bg-white' />
                <div className='w-0.5 h-[50%] rounded bg-white' />
                <div className='w-0.5 h-[30%] rounded bg-white' />
                <div className='w-0.5 h-[40%] rounded bg-white' />
                <div className='w-0.5 h-[35%] rounded bg-white' />
                <div className='w-0.5 h-[30%] rounded bg-white' />
                <div className='w-0.5 h-[20%] rounded bg-gray-600' />
                <div className='w-0.5 h-[28%] rounded bg-gray-600' />
                <div className='w-0.5 h-[20%] rounded bg-gray-600' />
                <div className='w-0.5 h-[10%] rounded bg-gray-600' />
              </div>
              <button className="flex-none inline-flex items-center justify-center rounded-full w-8 h-8 border-2 text-white border-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26">
                  <path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path>
                </svg>
              </button>
            </section>
          </article>
        </section>
        <section className="grid grid-cols-2 gap-4 w-[291px]">
          <article className="border shadow-sm break-inside flex items-start flex-col justify-between rounded-xl gap-2 p-4 mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900" >
            <header>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-violet-600 text-white '>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
            </header>
            <section className="w-full">
              <h2 className="text-xs font-medium">Bed time</h2>
              <h3 className="text-sm leading-5 font-semibold truncate">Good Together Filatov & Karas</h3>
            </section>
            <div className='flex items-center gap-3'>
              <img
                className='flex-none w-8 h-8 rounded-full object-cover'
                src='https://randomuser.me/api/portraits/women/68.jpg'
                alt='cover'
                loading="lazy"
              />
              <div className='grid'>
                <h5 className='truncate text-xs font-semibold'>Sunshine sound</h5>
                <p className='text-xs truncate text-gray-500'>Lookee Stefane</p>
              </div>
            </div>
          </article>
          <article className="relative border shadow-sm break-inside flex items-start flex-col justify-between rounded-xl gap-2 p-4 mb-3 text-sm overflow-hidden border-emerald-600 bg-white dark:bg-gray-950 dark:text-white" >
            <div className="absolute left-1/2 top-0 w-14 h-14 bg-emerald-500/60 blur-2xl" />
            <header className="w-full">
              <button className='inline-flex items-center justify-center relative w-8 h-8 z-[1]'>
                <span className='w-full h-full pointer-events-none animate-ping top-0 left-0 rounded-full absolute bg-emerald-600' />
                <div className='inline-flex items-center justify-center absolute z-[1] w-full h-full flex-none rounded-full bg-emerald-600 dark:border-gray-950 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </div>
              </button>
            </header>
            <section className="w-full">
              <h2 className="text-xs font-medium">Wake up</h2>
              <h3 className="text-sm leading-5 font-semibold truncate">I Feel It Coming The Weeknd</h3>
            </section>
            <div className='flex items-center gap-3'>
              <img
                className='flex-none w-8 h-8 rounded-full object-cover'
                src='https://randomuser.me/api/portraits/men/32.jpg'
                alt='cover'
                loading="lazy"
              />
              <div className='grid'>
                <h5 className='truncate text-xs font-semibold'>Fellip Mathias</h5>
                <p className='text-xs truncate text-gray-500'>The look m.Stefane</p>
              </div>
            </div>
          </article>
        </section>

      </div>

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">

        <article className='w-[291px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden border-emerald-200 bg-white dark:bg-gray-950 dark:text-white dark:border-emerald-900'>
          <div className='absolute top-0 bottom-0 left-0 w-full max-w-[8rem] pointer-events-none bg-gradient-to-r from-amber-400/10 to-emerald-500/10' />
          <div className='relative z-[1] flex items-center gap-3'>
            <img
              src='https://images.pexels.com/photos/164697/pexels-photo-164697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='Pixabay'
              data-author-profile='https://www.pexels.com/es-es/@pixabay/'
              alt='cover'
              className='flex-none w-12 h-12 rounded-full object-cover border-2 border-white ring-2 ring-emerald-500 dark:border-gray-950 dark:ring-emerald-600'
              loading="lazy"
            />
            <div className='grid flex-1'>
              <h5 className='text-base font-semibold truncate'>Purple Disco</h5>
              <h5 className='text-xs truncate'>Eli Escobar feat. Nomi Ruiz</h5>
            </div>
          </div>
          <div className='relative w-8 h-8'>
            <span className='z-0 absolute w-full h-full rounded-full pointer-events-none animate-ping bg-green-600' />
            <button className='absolute w-full h-full z-[1] flex justify-center items-center rounded-full bg-green-600 text-white' data-play='true'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
            </button>
          </div>
        </article>

      </div>

      {/* Row Widget content */}
      <div className="row-widget-content flex justify-start w-full gap-3">

        <section className="break-inside grid grid-cols-2 mb-3 gap-3 w-[291px]" >
          <article className="border relative overflow-hidden shadow-sm break-inside flex flex-col justify-between rounded-xl p-3 text-sm bg-rose-600 border-rose-600 text-white" >
            <div className="absolute right-0 top-0 w-14 h-14 bg-yellow-500/60 blur-2xl"></div>
            <div className="absolute left-0 bottom-0 w-14 h-14 bg-yellow-500/80 blur-2xl"></div>
            <header className="relative flex items-center justify-between">
              <span className="h-5 px-2 text-[11px] font-semibold rounded-sm flex items-center justify-center bg-white text-rose-700">NEW</span>
              <button className='flex justify-center items-center rounded-full w-7 h-7 transition-colors duration-300 bg-white text-rose-700'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
            </header>
            <section className="relative mt-3">
              <h2 className="text-lg font-bold">The best of Dire Straits Album</h2>
              <p className="text-xs mt-1 text-white/80">Three authors will be present at the</p>
            </section>
            <div className="relative flex items-center justify-between mt-3 gap-3">
              <div className='flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer'>
                <div className='w-[2px] h-[15%] rounded-full bg-white' />
                <div className='w-[2px] h-[20%] rounded-full bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-white' />
                <div className='w-[2px] h-[40%] rounded-full bg-white' />
                <div className='w-[2px] h-[40%] rounded-full bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-white' />
                <div className='w-[2px] h-[40%] rounded-full bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-white/50' />
                <div className='w-[2px] h-[20%] rounded-full bg-white/50' />
                <div className='w-[2px] h-[15%] rounded-full bg-white/50' />
                <div className='w-[2px] h-[10%] rounded-full bg-white/50' />
                <div className='w-[2px] h-[15%] rounded-full bg-white/50' />
                <div className='w-[2px] h-[20%] rounded-full bg-white/50' />
                <div className='w-[2px] h-[30%] rounded-full bg-white/50' />
                <div className='w-[2px] h-[30%] rounded-full bg-white/50' />
              </div>
              <button className="inline-flex items-center justify-center w-7 h-7 transition-all rounded-full hover:bg-white/30">
                <svg width="28" height="28" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                </svg>
              </button>
            </div>
          </article>
          <div className="flex flex-col gap-3">
            <article className="border shadow-sm break-inside flex flex-col items-start justify-between gap-2 rounded-xl p-3 flex-1 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900" >
              <header className="flex items-start gap-2">
                <img className="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-sm font-bold"> Jhonatan <br /> Smith </h2>
              </header>
              <div className="flex items-center justify-between w-full gap-4">
                <div className='flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer'>
                  <div className='w-[2px] h-[15%] rounded-full bg-black/80 dark:bg-white' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/80 dark:bg-white' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                  <div className='w-[2px] h-[40%] rounded-full bg-black/80 dark:bg-white' />
                  <div className='w-[2px] h-[40%] rounded-full bg-black/80 dark:bg-white' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                  <div className='w-[2px] h-[40%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/20' />
                  <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/20' />
                </div>
                <button className='flex-none flex justify-center items-center rounded-full w-6 h-6 transition-colors duration-300 bg-black text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </button>
              </div>
            </article>
            <article className="border shadow-sm break-inside flex flex-col items-start justify-between gap-2 rounded-xl p-3 flex-1 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900" >
              <header className="flex items-start gap-2">
                <img className="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/women/40.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-sm font-bold"> Marianna <br /> Green </h2>
              </header>
              <div className="flex items-center justify-between w-full gap-4">
                <div className='flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer'>
                  <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[40%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[40%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[40%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/40' />
                  <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/40' />
                </div>
                <button className='flex-none flex justify-center items-center rounded-full w-6 h-6 transition-colors duration-300 bg-black text-white dark:bg-white dark:text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 15 15"><path fill="currentColor" d="M6.748 5.066A.5.5 0 0 0 6 5.5v4a.5.5 0 0 0 .748.434l3.5-2a.5.5 0 0 0 0-.868z"></path></svg>
                </button>
              </div>
            </article>
          </div>
        </section>
        <section className='grid grid-cols-2 gap-3 w-[291px]'>
          <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
            <div className='flex flex-col w-full gap-3'>
              <div className='w-full flex items-start justify-between'>
                <img
                  src="https://images.pexels.com/photos/7586658/pexels-photo-7586658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  data-author="Los Muertos Crew"
                  data-author-profile="https://www.pexels.com/es-es/@cristian-rojas/"
                  alt="cover"
                  loading="lazy"
                  className='w-16 h-20 object-cover rounded-md'
                />
                <button className='w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-colors duration-300 ring-2 ring-transparent hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-blue-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
                </button>
              </div>
              <section className='grid gap-2'>
                <h2 className='text-base font-extrabold'>The best pop sounds</h2>
                <p className="text-xs">The best songs of the moment</p>
                <div className='flex w-full items-center justify-between gap-1'>
                  <span className='font-medium px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-900'>20 songs</span>
                  <button className='flex-none border-2 inline-flex items-center justify-center rounded-full w-8 h-8 dark:border-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"></path></svg>
                  </button>
                </div>
              </section>
            </div>
          </article>
          <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
            <div className='flex flex-col w-full gap-3'>
              <div className='w-full flex items-start justify-between'>
                <img
                  src="https://images.pexels.com/photos/8512648/pexels-photo-8512648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  data-author="Big Bag Films"
                  data-author-profile="https://www.pexels.com/es-es/@bigbagfilms/"
                  alt="cover"
                  loading="lazy"
                  className='w-16 h-20 object-cover rounded-md'
                />
                <button className='w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-colors duration-300 ring-2 ring-transparent hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-blue-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
                </button>
              </div>
              <section className='grid gap-2'>
                <h2 className='text-base font-extrabold'>Summer chill vibes</h2>
                <p className="text-xs">The best songs of the moment</p>
                <div className='flex w-full items-center justify-between gap-1'>
                  <span className='font-medium px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-900'>18 songs</span>
                  <button className='flex-none border-2 inline-flex items-center justify-center rounded-full w-8 h-8 dark:border-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"></path></svg>
                  </button>
                </div>
              </section>
            </div>
          </article>
        </section>

      </div>

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">

        <article className='w-[260px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className="pointer-events-none z-0 absolute right-0 bottom-0 w-14 h-14 bg-indigo-500/30 blur-2xl" />
          <div className="pointer-events-none z-0 absolute left-0 bottom-0 w-14 h-14 bg-green-500/40 blur-2xl" />
          <div className='relative grid place-items-center w-full gap-3'>
            <div className='relative w-full h-24'>
              <button className='absolute z-10 right-4 top-4 flex items-center justify-center w-9 h-9 transition-colors duration-300 rounded-full text-white hover:bg-white/10 focus:bg-white/20'>
                <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
              <img
                className='flex-none w-full h-full object-cover'
                src='https://images.pexels.com/photos/1125744/pexels-photo-1125744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                data-author='Brett Sayles'
                data-author-profile='https://www.pexels.com/es-es/@brett-sayles/'
                alt='album cover'
                loading="lazy"
              />
            </div>
            <div className='relative z-[1] -mt-10'>
              <div className="inline-block relative w-16 h-16 rounded-full p-[2px]">
                <img className="flex-none rounded-full w-full h-full object-cover relative border-4 border-white dark:border-gray-950 shadow-xl" src="https://randomuser.me/api/portraits/men/30.jpg" alt="avatar" loading="lazy" />
              </div>
            </div>
            <div className='w-full text-center grid px-4'>
              <h5 className='text-lg font-semibold'>Sweet Summer Days</h5>
              <p className='text-gray-500'>Lounge Groove Avenue</p>
            </div>
            <div className='w-full flex items-center justify-between space-x-4 px-4'>
              <span className='text-xs font-semibold'>03:34</span>
              <div className='relative rounded-full flex-1 h-1 bg-gray-200 dark:bg-gray-800'>
                <div className='absolute rounded-full left-0 w-1/2 h-full bg-black dark:bg-white' />
                <div className='absolute rounded-full top-1/2 -translate-y-1/2 h-3 w-3 right-1/2 bg-black dark:bg-white' />
              </div>
              <span className='text-xs font-semibold'>08:14</span>
            </div>
            <div className='w-full flex justify-between items-center p-4'>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-black text-white dark:bg-white dark:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <div className="w-[291px] grid gap-3 items-start">
          <article className="relative border shadow-sm overflow-hidden break-inside grid grid-cols-12 rounded-xl mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <div className='relative col-span-4'>
              <img
                className="w-full max-w-full h-full max-h-[7rem] object-cover gap-4"
                src="https://images.pexels.com/photos/2114758/pexels-photo-2114758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                data-author="Kevin Bidwell"
                data-author-profile="https://www.pexels.com/es-es/@kevinbidwell/"
                loading="lazy"
              />
              <span className='absolute bottom-3 left-3 rounded inline-flex items-center justify-center font-medium text-xs px-2 h-6 bg-black text-white'>NEW</span>
            </div>
            <div className="p-4 flex flex-col justify-between col-span-8">
              <div className='flex items-center justify-between gap-4 mb-auto'>
                <div className="relative z-[1] grid flex-1">
                  <a href="#" className="text-sm font-semibold block">David Martín</a>
                  <p className="text-xs truncate text-gray-600 dark:text-gray-400">The best music for your ears</p>
                </div>
                <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none rounded-full bg-black  text-white dark:bg-white dark:text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </button>
              </div>
              <div className='w-full flex items-end h-6 gap-0.5'>
                <div className='w-1 h-[10%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[20%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[30%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[40%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[40%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[50%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[60%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[70%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[30%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[30%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[40%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[60%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[80%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[30%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[30%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[45%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[88%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[70%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[20%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[30%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[40%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[50%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[45%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[58%] rounded bg-black dark:bg-white' />
                <div className='w-1 h-[46%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[35%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[30%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[40%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[50%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[60%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[80%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[70%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[60%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[50%] rounded bg-gray-300 dark:bg-gray-800' />
                <div className='w-1 h-[40%] rounded bg-gray-300 dark:bg-gray-800' />
              </div>
            </div>
          </article>
        </div>

      </div>

    </div>
  )
}