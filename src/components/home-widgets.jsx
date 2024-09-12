export default function HomeWidgets () {
  return (
    <div className="flex flex-col relative z-[1]">

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">...</div>

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">

        <article className='w-[291px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-2xl mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
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
        <article className='w-[136px] relative break-inside rounded-2xl overflow-hidden max-h-[194px] text-sm mb-3 text-white'>
          <img
            src="https://images.pexels.com/photos/8044178/pexels-photo-8044178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="ANTONI SHKRABA production"
            data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
            loading="lazy"
            alt="Photo by ANTONI SHKRABA production on Pexels"
            className="w-full h-full object-cover"
          />
          <div className='absolute bottom-0 left-0 w-full p-4 min-h-20 flex items-end bg-gradient-to-t from-black via-black/80 to-transparent'>
            <div className='flex items-center gap-2'>
              <span className='w-5 h-5 inline-flex items-center justify-center rounded-full bg-rose-600 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 28 28"><path fill="currentColor" d="M10.138 3.382C8.304 2.31 6 3.632 6 5.756v16.489c0 2.123 2.304 3.445 4.138 2.374l14.697-8.59c1.552-.907 1.552-3.15 0-4.057z"></path></svg>
              </span>
              <span className='text-sm font-bold'>22 K</span>
            </div>
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

        <div className="grid w-[260px] gap-3">
          <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
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
          <article className='w-full relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded mb-3 text-sm overflow-hidden border-transparent bg-black/70 backdrop-blur-lg' >
            <div className='grid w-full p-4'>
              <div className='w-full flex items-center justify-between gap-4'>
                <div className='grid flex-1'>
                  <h2 className='text-base font-semibold text-white'>Adrian Sava</h2>
                  <p className='text-sm truncate text-white/60'>Love is in the air & the music</p>
                </div>
                <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-amber-500 focus:text-white focus:ring-amber-500 hover:bg-white/20 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="none" strokeWidth={2} className='transition-colors duration-200 stroke-white group-focus:stroke-white group-focus:fill-white' d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
                  </svg>
                </button>
              </div>
              <div className='py-4 flex items-center justify-between'>
                <button className='w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M24 128a72.08 72.08 0 0 1 72-72h108.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L204.69 72H96a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0m200-8a8 8 0 0 0-8 8a56.06 56.06 0 0 1-56 56H51.31l10.35-10.34a8 8 0 0 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L51.31 200H160a72.08 72.08 0 0 0 72-72a8 8 0 0 0-8-8"></path></svg>
                </button>
                <button className='w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m15.5 19.794l-9-5.196c-2-1.155-2-4.041 0-5.196l9-5.196c2-1.155 4.5.288 4.5 2.598v10.392c0 2.31-2.5 3.753-4.5 2.598M3 19a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0z" clipRule="evenodd"></path></svg>
                </button>
                <button className='w-9 h-9 rounded-full inline-flex items-center justify-center flex-none bg-white text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20.196V3.804a1 1 0 0 1 1.53-.848l13.113 8.196a1 1 0 0 1 0 1.696L7.53 21.044A1 1 0 0 1 6 20.196"></path></svg>
                </button>
                <button className='w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M17.5 9.402c2 1.155 2 4.041 0 5.196l-9 5.196c-2 1.155-4.5-.288-4.5-2.598V6.804c0-2.31 2.5-3.753 4.5-2.598zM21 5a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0z" clipRule="evenodd"></path></svg>
                </button>
                <button className='w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20"><path fill="currentColor" d="M6.005 8.086v-.003l.006-.026q.01-.042.038-.122c.038-.106.103-.246.206-.385c.195-.26.55-.55 1.255-.55c.637 0 1.038.209 1.265.497c.231.294.353.762.24 1.418c-.066.386-.259.616-.562.81c-.247.16-.526.273-.858.408q-.199.08-.425.177c-.492.212-1.047.495-1.47 1.001c-.434.52-.687 1.221-.687 2.189a.5.5 0 0 0 .5.5h3.994a.5.5 0 0 0 0-1H6.043c.066-.49.228-.813.423-1.047c.267-.32.64-.527 1.099-.725q.154-.066.328-.136c.361-.146.768-.311 1.1-.525c.481-.31.883-.76 1.007-1.482c.144-.844.016-1.626-.44-2.207C9.096 6.291 8.37 6 7.51 6c-1.044 0-1.686.46-2.054.95a2.5 2.5 0 0 0-.43.933l-.003.022l-.002.007v.007c-.005.025-.044.258 0 0a.5.5 0 0 0 .984.167m5.853 2.06a.499.499 0 1 0-.706.708L12.297 12l-1.145 1.146a.5.5 0 0 0 .706.708l1.145-1.147l1.145 1.147a.499.499 0 1 0 .706-.708L13.709 12l1.145-1.146a.5.5 0 0 0-.706-.708l-1.145 1.147z"></path></svg>
                </button>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <span className='text-xs font-semibold text-white'>1:30</span>
                <div className='flex flex-1 items-center justify-between h-6 gap-0.5'>
                  <div className='w-[2px] h-[10%] rounded bg-white' />
                  <div className='w-[2px] h-[20%] rounded bg-white' />
                  <div className='w-[2px] h-[30%] rounded bg-white' />
                  <div className='w-[2px] h-[40%] rounded bg-white' />
                  <div className='w-[2px] h-[40%] rounded bg-white' />
                  <div className='w-[2px] h-[50%] rounded bg-white' />
                  <div className='w-[2px] h-[50%] rounded bg-white' />
                  <div className='w-[2px] h-[60%] rounded bg-white' />
                  <div className='w-[2px] h-[30%] rounded bg-white' />
                  <div className='w-[2px] h-[30%] rounded bg-white' />
                  <div className='w-[2px] h-[45%] rounded bg-white' />
                  <div className='w-[2px] h-[30%] rounded bg-white' />
                  <div className='w-[2px] h-[40%] rounded bg-white/20' />
                  <div className='w-[2px] h-[20%] rounded bg-white/20' />
                  <div className='w-[2px] h-[18%] rounded bg-white/20' />
                  <div className='w-[2px] h-[16%] rounded bg-white/20' />
                  <div className='w-[2px] h-[36%] rounded bg-white/20' />
                  <div className='w-[2px] h-[30%] rounded bg-white/20' />
                  <div className='w-[2px] h-[28%] rounded bg-white/20' />
                  <div className='w-[2px] h-[26%] rounded bg-white/20' />
                  <div className='w-[2px] h-[24%] rounded bg-white/20' />
                  <div className='w-[2px] h-[22%] rounded bg-white/20' />
                  <div className='w-[2px] h-[18%] rounded bg-white/20' />
                  <div className='w-[2px] h-[16%] rounded bg-white/20' />
                  <div className='w-[2px] h-[18%] rounded bg-white/20' />
                  <div className='w-[2px] h-[22%] rounded bg-white/20' />
                </div>
                <span className='text-xs font-semibold text-white'>3:00</span>
              </div>
            </div>
            <section className='w-full grid gap-1 px-2 pb-2'>
              <div className='w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative text-white hover:bg-white/10  focus-within:ring-white/40 focus-within:bg-white/20 focus-within:hover:bg-white/20'>
                <div className='flex-1 flex items-center gap-3'>
                  <img
                    src='https://images.pexels.com/photos/8044064/pexels-photo-8044064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    data-author='ANTONI SHKRABA production'
                    data-author-profile='https://www.pexels.com/es-es/@anthonyshkraba-production/'
                    className='w-11 h-11 rounded-full object-cover'
                    alt='avatar'
                    loading='lazy'
                  />
                  <div className='flex-1 grid'>
                    <h2 className='text-sm font-semibold'>Tatianna Jaquez</h2>
                    <p className='text-xs truncate text-white/60'>Alone in the dark</p>
                  </div>
                </div>
                <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-amber-500 focus:text-white focus:ring-amber-500 hover:bg-white/20 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="none" strokeWidth={2} className='transition-colors duration-200 stroke-white group-focus:stroke-white group-focus:fill-white' d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
                  </svg>
                </button>
              </div>
              <div className='w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative text-white hover:bg-white/10  focus-within:ring-white/40 focus-within:bg-white/20 focus-within:hover:bg-white/20'>
                <div className='flex-1 flex items-center gap-3'>
                  <img
                    src='https://images.pexels.com/photos/3388900/pexels-photo-3388900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    data-author='Papa Yaw'
                    data-author-profile='https://www.pexels.com/es-es/@papa-yaw-956993/'
                    className='w-11 h-11 rounded-full object-cover'
                    alt='avatar'
                    loading='lazy'
                  />
                  <div className='flex-1 grid'>
                    <h2 className='text-sm font-semibold'>Anthony Shkraba</h2>
                    <p className='text-xs truncate text-white/60'>First time in the city &amp; I love it</p>
                  </div>
                </div>
                <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-amber-500 focus:text-white focus:ring-amber-500 hover:bg-white/20 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="none" strokeWidth={2} className='transition-colors duration-200 stroke-white group-focus:stroke-white group-focus:fill-white' d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
                  </svg>
                </button>
              </div>
              <div className='w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative text-white hover:bg-white/10  focus-within:ring-white/40 focus-within:bg-white/20 focus-within:hover:bg-white/20'>
                <div className='flex-1 flex items-center gap-3'>
                  <img
                    src='https://images.pexels.com/photos/9009499/pexels-photo-9009499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    data-author='Yan Krukau'
                    data-author-profile='https://www.pexels.com/es-es/@yankrukov/'
                    className='w-11 h-11 rounded-full object-cover'
                    alt='avatar'
                    loading='lazy'
                  />
                  <div className='flex-1 grid'>
                    <h2 className='text-sm font-semibold'>Fabrizio Verrecchia</h2>
                    <p className='text-xs truncate text-white/60'>The best music</p>
                  </div>
                </div>
                <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent bg-amber-500 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="none" strokeWidth={2} className='stroke-white fill-white' d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
                  </svg>
                </button>
              </div>
            </section>
          </article>
        </div>

        <div className="w-[291px] grid gap-3 place-content-start">
          <article className="relative border shadow-sm overflow-hidden break-inside grid grid-cols-12 rounded-xl text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
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
          <section className='w-[291px] grid grid-cols-2 gap-3'>
            <article className="relative flex flex-col items-start justify-between gap-1 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
              <button className='absolute top-4 right-4 rounded-full inline-flex items-center justify-center w-8 h-8 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
              </button>
              <header className="relative">
                <img
                  src="https://images.pexels.com/photos/3984822/pexels-photo-3984822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  data-author="Gustavo Fring"
                  data-author-profile="https://www.pexels.com/es-es/@gustavo-fring/"
                  alt="album cover"
                  loading="lazy"
                  className="object-cover w-14 h-14 flex-none rounded-full"
                />
              </header>
              <section className='flex items-center gap-2'>
                <button className="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none rounded-full bg-black  text-white dark:bg-white dark:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26" > <path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z" ></path>
                  </svg>
                </button>
                <div className='grid'>
                  <h2 className='text-xs truncate font-semibold'>Antonio rivera</h2>
                  <p className='text-xs truncate text-gray-600 dark:text-gray-400'>The best music for your ears</p>
                </div>
              </section>
              <div className='absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700'>
                <div className='h-full w-1/2 bg-black dark:bg-gray-100' />
              </div>
            </article>

            <article className="relative flex flex-col items-start justify-between gap-2 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
              <button className='absolute top-4 right-4 rounded-full inline-flex items-center justify-center w-8 h-8 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path></svg>
              </button>
              <header className="relative w-14 h-14">
                <img
                  src="https://images.pexels.com/photos/2167384/pexels-photo-2167384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  data-author="Teddy Yang"
                  data-author-profile="https://www.pexels.com/es-es/@teddy/"
                  alt="album cover"
                  loading="lazy"
                  className="object-cover w-full h-full flex-none rounded-full"
                />
                <svg width="72" height="72" viewBox="0 0 200 200" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="90" className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="8" fill="none"/>
                  <circle cx="100" cy="100" r="90" className="stroke-black dark:stroke-gray-50" strokeWidth="8" fill="none" strokeDasharray="565.48" strokeDashoffset="180.1" strokeLinecap="round" transform="rotate(-90 100 100)" />
                </svg>
              </header>
              <section className='grid'>
                <h2 className='font-semibold truncate'>Marcos Fernández</h2>
                <p className='text-xs truncate text-gray-600 dark:text-gray-400'>The best music for your ears</p>
              </section>
            </article>
          </section>

        </div>

      </div>

    </div>
  )
}