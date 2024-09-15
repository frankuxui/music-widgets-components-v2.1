export default function HomeWidgets () {
  return (
    <div className="flex flex-col relative z-[1]">

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3 mb-3">

        <article className='w-[291px] h-full relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-2xl text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='relative w-full h-full'>
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
              className='aspect-video min-h-[208px] object-cover w-full'
              loading="lazy"
            />
          </div>
        </article>
        <article className='w-[136px] relative break-inside rounded-2xl overflow-hidden text-sm text-white'>
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
        <section className="w-[291px] grid grid-cols-2 gap-3" data-filter="multimedia">
          <article className="relative flex items-center justify-between border shadow-sm break-inside rounded-lg  text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <img
              src="https://images.pexels.com/photos/11911967/pexels-photo-11911967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Damir Hu"
              data-author-profile="https://www.pexels.com/es-es/@damir-hu-197678918/"
              className="object-cover w-full h-full"
              alt="cover"
              loading="lazy"
            />
            <div className="flex flex-col justify-between absolute top-0 left-0 w-full h-full bg-black/50 text-white">
              <header className='flex w-full items-center justify-end p-3'>
                <button className="flex items-center justify-center rounded-full w-7 h-7 transition-colors duration-200 bg-white text-black">
                  <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" fill="currentColor"></path>
                  </svg>
                </button>
              </header>
              <div className="flex flex-col items-start w-full p-4 bg-gradient-to-t from-black to-transparent">
                <header className='flex items-center justify-between gap-2 w-full'>
                  <div className='grid flex-1'>
                    <h2 className="text-sm font-semibold">The Remix</h2>
                    <p className='text-xs truncate'>Anthony Daasan Alex</p>
                  </div>
                  <button className="flex flex-none items-center justify-center rounded-full w-6 h-6 bg-white text-black">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
                    </svg>
                  </button>
                </header>
              </div>
            </div>
          </article>
          <article className="relative flex flex-col items-center justify-start border shadow-sm break-inside rounded-lg text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <div className="relative">
              <button className="absolute right-2 top-2 flex items-center justify-center hover:bg-white text-white hover:text-black rounded-full p-1 transition-colors duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" fill="currentColor"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-10 h-10 transition-colors duration-200 bg-[#000000c1] hover:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <img src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" className="object-cover" alt="cover" loading="lazy" />
            </div>
            <div className="flex flex-col items-start justify-between w-full flex-1 p-4 space-y-2">
              <header>
                <h2 className="font-semibold">The Great Outdoors for All</h2>
              </header>
              <button className="flex items-center justify-center text-xs rounded-full px-2 py-1 space-x-1 bg-black text-white dark:bg-white dark:text-black">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
                </svg>
                <span>Music</span>
              </button>
            </div>
          </article>
        </section>
        <section className='w-[291px] grid grid-cols-2 gap-3 '>
          <article className="relative flex items-center flex-col justify-between border shadow-sm break-inside rounded-2xl text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <img
              src="https://images.pexels.com/photos/5821036/pexels-photo-5821036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Maksim Goncharenok"
              data-author-profile="https://www.pexels.com/es-es/@maksgelatin/"
              alt="Image by Maksim Goncharenok from Pexels"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className='absolute bottom-0 left-0 w-full p-2'>
              <button className='rounded-full w-full text-xs font-semibold uppercase flex items-center justify-center p-1 bg-white/80 backdrop-blur-sm text-black'>
                <span className='w-full tex-center flex-1 flex items-center justify-center'>PLAY NOW</span>
                <span className='w-6 h-6 inline-flex items-center justify-center flex-none rounded-full bg-black text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><path fill="currentColor" d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.368 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091z"></path></svg>
                </span>
              </button>
            </div>
          </article>
          <article className="relative flex items-center flex-col justify-between border shadow-sm break-inside rounded-2xl text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <img
              src="https://images.pexels.com/photos/7239916/pexels-photo-7239916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Harry Shelton"
              data-author-profile="https://www.pexels.com/es-es/@harry-shelton-39376662/"
              alt="Image by Harry Shelton from Pexels"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className='absolute bottom-0 left-0 h-full w-full flex items-start flex-col justify-between'>
              <div className='w-full flex items-center justify-between p-3'>
                <span className='rounded-lg px-2 py-1 text-xs font-medium inline-block bg-black/80 backdrop-blur-md text-white'>NEW</span>
                <button className='w-6 h-6 inline-flex items-center justify-center flex-none rounded-full text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 20c-2.205-.48-9-4.24-9-11a5 5 0 0 1 9-3a5 5 0 0 1 9 3c0 6.76-6.795 10.52-9 11"></path></svg>
                </button>
              </div>
              <div className='w-full flex items-center justify-center px-2'>
                <button className='w-8 h-8 inline-flex items-center justify-center flex-none rounded-full bg-white text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.368 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091z"></path></svg>
                </button>
              </div>
              <div className='flex items-center flex-wrap gap-1 p-3 bg-gradient-to-t from-black to-transparent'>
                <span className='rounded px-2 py-0.5 text-xs font-medium inline-flex items-center justify-center bg-black/80 backdrop-blur-md text-white'> Trash </span>
                <span className='rounded px-2 py-0.5 text-xs font-medium inline-flex items-center justify-center bg-black/80 backdrop-blur-md text-white'> Heavy </span>
                <span className='rounded px-2 py-0.5 text-xs font-medium inline-flex items-center justify-center bg-black/80 backdrop-blur-md text-white'> Metal </span>
              </div>
            </div>
          </article>
        </section>
        <article className='w-[129px] relative shadow-sm rounded-lg text-sm overflow-hidden break-inside bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <button className='absolute bottom-4 right-4 rounded-full w-9 h-9 -mt-10 flex items-center justify-center bg-white text-black'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
              <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
            </svg>
          </button>
          <img
            src='https://images.pexels.com/photos/3756767/pexels-photo-3756767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            data-author='Sound On'
            data-author-profile='https://www.pexels.com/es-es/@sound-on/'
            className='object-cover w-full h-full'
            alt='cover'
            loading='lazy'
          />
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
        <article className="w-[291px] relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-2xl p-4 mb-3 text-sm overflow-hidden bg-gray-50 border-gray-200 dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <div className="z-0 pointer-events-none absolute right-0 top-0 w-14 h-14 bg-yellow-500/40 blur-2xl" />
          <div className="z-0 pointer-events-none absolute left-0 top-0 w-14 h-14 bg-emerald-500/40 blur-2xl" />
          <header className='w-full flex items-center justify-between'>
            <div className='inline-flex items-center gap-2'>
              <span className='w-10 h-10 inline-flex items-center justify-center rounded-full flex-none bg-emerald-300 text-black dark:bg-emerald-500/20 dark:text-emerald-500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeWidth={1.5} d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></path><path fill="currentColor" d="m12.56 12.7l-.352.661zm.883.47l.353-.662zm.996-1.868l.353-.662zm-.882-.471l.353-.662zm-1.555.776l.749.045zm1.414-.85l-.312.683zM15 12.17l.75-.024zm-.5-.835l.373-.65zm-.915 1.91l.312-.683zm1.414-.85l-.748-.045zm-2.496.273l-.374.65zM12 11.832l-.75.024zm-.75 4.668a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm2.25.75V12h-1.5v4.5zm-.542-3.139l.882.47l.706-1.323l-.882-.47zm2.584-2.721l-.882-.47l-.706 1.323l.882.47zm-2.042 1.125v-.113l-1.497-.09c-.003.058-.003.131-.003.203zm1.16-1.596a5 5 0 0 0-.181-.093l-.625 1.364l.018.009l.082.044zm-1.16 1.483a.25.25 0 0 1 .354-.212l.625-1.364a1.75 1.75 0 0 0-2.476 1.485zm3 .584v-.091l-1.5.048v.043zm-1.664-.273l.032.017l.007.004l.747-1.3l-.08-.044zm1.663.182a1.75 1.75 0 0 0-.877-1.462l-.747 1.3a.25.25 0 0 1 .125.21zm-2.659 1.687c.064.034.128.068.181.093l.625-1.364l-.018-.009l-.082-.044zm1.16-1.596v.113l1.497.09c.003-.058.003-.131.003-.203zm-.979 1.689a1.75 1.75 0 0 0 2.476-1.485l-1.498-.091a.25.25 0 0 1-.353.212zm-.357-1.887l-.032-.017l-.007-.004l-.747 1.3l.08.044zm-1.664-.273v.091l1.5-.048v-.043zm1.625.252a.25.25 0 0 1-.125-.209l-1.5.048c.02.606.352 1.16.878 1.462z"></path><path stroke="currentColor" strokeWidth={1.5} d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></path></g></svg>
              </span>
              <div className='grid flex-1'>
                <div className='inline-flex items-center gap-2'>
                  <h5 className="font-medium">Rumble Bonx</h5>
                  <span className='text-xs truncate text-gray-600'>3 min ago</span>
                </div>
                <p className='text-xs truncate'>Remix - rumba & vega</p>
              </div>
            </div>
            <button className='w-8 h-8 flex-none rounded-full inline-flex items-center justify-center transition-colors duration-200 ring-2 ring-transparent focus:ring-blue-600 hover:bg-gray-200 dark:hover:bg-gray-900'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path></svg>
            </button>
          </header>
          <section className='w-full flex items-center justify-between text-gray-800 dark:text-gray-300'>
            <div className='inline-flex items-center gap-2 font-medium'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.8 35.8 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.567.401-2.736 1.69a42.5 42.5 0 0 0 0 10.948c.17 1.289 1.488 2.133 2.736 1.69l.653-.232a35.8 35.8 0 0 0 9.916-5.416"></path></svg>
              <span>2k</span>
            </div>
            <div className='inline-flex items-center gap-2 font-medium'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M2 6.342a3.375 3.375 0 0 1 6-2.088a3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.4 14.4 0 0 1-2.676 1.61q-.031.015-.05.022l-.014.006l-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003l-.015-.006a6 6 0 0 1-.232-.107a14.4 14.4 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38z"></path></svg>
              <span>408</span>
            </div>
            <div className='inline-flex items-center gap-2 font-medium'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M20.924 5.617a1 1 0 0 0-.217-.324l-3-3a1 1 0 1 0-1.414 1.414L17.586 5H8a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h9.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 21 6m-.076-.383a1 1 0 0 1 .076.38zm-17.848 12a1 1 0 0 0 .217 1.09l3 3a1 1 0 0 0 1.414-1.414L6.414 19H16a5 5 0 0 0 5-5v-2a1 1 0 1 0-2 0v2a3 3 0 0 1-3 3H6.414l1.293-1.293a1 1 0 1 0-1.414-1.414l-3 3m-.217.324a1 1 0 0 1 .215-.322z"></path></svg>
              <span>357</span>
            </div>
            <div className='inline-flex items-center gap-2 font-medium'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5.821 4.91c3.899-2.765 9.468-2.539 13.073.535c3.667 3.129 4.168 8.238 1.152 11.898c-2.841 3.447-7.965 4.583-12.231 2.805l-.233-.101l-4.374.931l-.04.006l-.035.007h-.018l-.022.005h-.038L3.022 21l-.021-.001l-.023.001l-.033-.003H2.91l-.022-.004l-.022-.002l-.035-.007l-.034-.005l-.016-.004l-.024-.005l-.049-.016l-.024-.005l-.011-.005l-.022-.007l-.045-.02l-.03-.012l-.011-.006l-.014-.006l-.031-.018l-.045-.024l-.016-.011l-.037-.026l-.04-.027l-.002-.004l-.013-.009l-.043-.04l-.025-.02l-.006-.007l-.056-.062l-.013-.014l-.011-.014l-.039-.056l-.014-.019l-.005-.01l-.042-.073l-.007-.012l-.004-.008l-.007-.012l-.014-.038l-.02-.042l-.004-.016l-.004-.01l-.017-.061l-.007-.018l-.002-.015l-.005-.019l-.005-.033l-.008-.042l-.002-.031l-.003-.01v-.016L2 20.022l.001-.036l.001-.023l.002-.053l.004-.025v-.019l.008-.035l.005-.034l.005-.02l.004-.02l.018-.06l.003-.013l1.15-3.45l-.022-.037C.969 12.45 1.97 7.806 5.592 5.078z"></path></svg>
              <span>81</span>
            </div>
          </section>
          <section className='w-full items-center rounded-xl shadow-xl p-2 bg-white dark:bg-gray-900'>
            <div className='w-full flex justify-between items-center'>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-gray-900 text-white dark:bg-gray-100 dark:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </section>
        </article>
        <article className="w-[291px] relative border shadow-sm overflow-hidden break-inside grid grid-cols-12 rounded-xl mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <div className="absolute left-1/2 top-0 w-14 h-14 bg-rose-500/30 blur-2xl" />
          <div className="absolute right-0 top-0 w-14 h-14 bg-yellow-500/40 blur-2xl" />
          <div className='relative col-span-4'>
            <img
              className="w-full max-w-full h-full object-cover"
              src="https://images.pexels.com/photos/2079167/pexels-photo-2079167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Lucas Pezeta"
              data-author-profile="https://www.pexels.com/es-es/@lucaspezeta/"
              loading="lazy"
            />
            <div className='absolute top-1/2 -translate-y-1/2 -right-6 w-11 h-11 z-[1]'>
              <span className='w-full h-full pointer-events-none animate-ping top-0 absolute rounded-full bg-rose-600' />
              <button className='inline-flex items-center justify-center absolute z-[1] w-full h-full flex-none rounded-full ring-2 bg-rose-600 ring-white border-2 dark:ring-gray-950 border-white dark:border-gray-950 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
              </button>
            </div>
          </div>
          <div className="py-4 pr-4 pl-8 col-span-8 h-full flex flex-col justify-between gap-4">
            <div className='flex items-center justify-between gap-4 mb-auto'>
              <div className="relative z-[1] grid flex-1">
                <a href="#" className="text-sm font-semibold block">David Martín</a>
                <p className="text-xs truncate text-gray-600 dark:text-gray-400">The best music for your ears and soul</p>
              </div>
              <img
                className="flex-none w-10 h-10 rounded-full ring-2 ring-rose-600 border-2 border-white dark:border-gray-950"
                src="https://images.pexels.com/photos/2079167/pexels-photo-2079167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                data-author="Lucas Pezeta"
                data-author-profile="https://www.pexels.com/es-es/@lucaspezeta/"
                alt="avatar"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Musician, composer and producer of electronic music. I love to create...</p>
          </div>
        </article>

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
        <article className='w-[291px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className="absolute right-0 top-0 w-14 h-14 z-0 pointer-events-none bg-lime-500/40 blur-2xl" />
          <div className='flex-1'>
            <h2 className='font-medium text-xs'>Best music</h2>
            <h3 className='font-bold text-lg'>Summer 2021</h3>
          </div>
          <img
            className='flex-none w-12 h-12 rounded-full object-cover'
            src='https://images.pexels.com/photos/2311713/pexels-photo-2311713.jpeg'
            data-author='hygor sakai'
            data-author-profile='https://www.pexels.com/es-es/@hygor-sakai-1214427/'
            alt='avatar'
            loading='lazy'
          />
        </article>
        <article className=" w-[291px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <div className="pointer-events-none z-0 absolute left-0 top-0 w-14 h-14 bg-emerald-500/30 blur-2xl" />
          <div className="pointer-events-none z-0 absolute right-0 top-0 w-14 h-14 bg-yellow-500/40 blur-2xl" />
          <div className='w-full flex items-center gap-2'>
            <div className="relative w-12 h-12 flex-none rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                data-author="Anderson Guerra"
                data-author-profile="https://www.pexels.com/es-es/@andersonguerra/"
                alt="album cover"
                loading="lazy"
                className="flex-none w-full h-full object-cover"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-950" />
            </div>
            <div className="w-full flex justify-between items-center flex-1">
              <button className="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" fill="currentColor" ></path>
                </svg>
              </button>
              <button className="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z" fill="currentColor" ></path>
                </svg>
              </button>
              <button className="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-gray-900 text-white dark:bg-gray-100 dark:text-black">
                <svg
                  width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path
                    d="M8,5.14V19.14L19,12.14L8,5.14Z" fill="currentColor" ></path> </svg>
              </button>
              <button className="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" fill="currentColor" ></path>
                </svg>
              </button>
              <button className="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z" fill="currentColor" ></path>
                </svg>
              </button>
            </div>
          </div>
        </article>
        <article className="w-[291px] relative flex items-center justify-between gap-4 shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white text-black">
          <img
            src="https://images.pexels.com/photos/3783525/pexels-photo-3783525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="Andrea Piacquadio"
            data-author-profile="https://www.pexels.com/es-es/@olly/"
            alt="Photo by Andrea Piacquadio from Pexels"
            className='w-full h-20 object-cover flex-none'
            loading="lazy"
          />
          <div className='absolute inset-0 p-4 flex items-center justify-between'>
            <h2 className='text-2xl font-black'>Karol</h2>
            <button className='w-9 h-9 inline-flex items-center justify-center flex-none rounded-full bg-white text-black'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
                <path fill="currentColor" d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.368 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091z"></path>
              </svg>
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
        <article className="w-[291px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-2xl mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <div className='absolute top-0 left-0 w-full h-full bg-black/70'>
            <div className="pointer-events-none z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-400 blur-2xl"></div>
            <div className='w-full h-full flex items-center justify-center'>
              <div className='relative z-10 flex flex-col text-center mx-auto justify-center items-center'>
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 128 128"><radialGradient id="notoFire0" cx={68.884} cy={124.296} r={70.587} gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse"><stop offset={0.314} stopColor="#ff9800"></stop><stop offset={0.662} stopColor="#ff6d00"></stop><stop offset={0.972} stopColor="#f44336"></stop></radialGradient><path fill="url(#notoFire0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"></path><radialGradient id="notoFire1" cx={64.921} cy={54.062} r={73.86} gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse"><stop offset={0.214} stopColor="#fff176"></stop><stop offset={0.328} stopColor="#fff27d"></stop><stop offset={0.487} stopColor="#fff48f"></stop><stop offset={0.672} stopColor="#fff7ad"></stop><stop offset={0.793} stopColor="#fff9c4"></stop><stop offset={0.822} stopColor="#fff8bd" stopOpacity={0.804}></stop><stop offset={0.863} stopColor="#fff6ab" stopOpacity={0.529}></stop><stop offset={0.91} stopColor="#fff38d" stopOpacity={0.209}></stop><stop offset={0.941} stopColor="#fff176" stopOpacity={0}></stop></radialGradient><path fill="url(#notoFire1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"></path></svg>
                </figure>
                <h2 className='font-bold text-2xl text-yellow-400'>Trends lists</h2>
                <p className='text-white uppercase text-[11px] font-medium'>a playlist to never forget</p>
                <button className='rounded-full w-28 mt-2 text-xs font-extrabold uppercase flex items-center justify-center p-1 bg-white/80 backdrop-blur-sm text-black'>
                  <span className='w-full tex-center flex-1 flex items-center justify-center'>PLAY NOW</span>
                  <span className='w-6 h-6 inline-flex items-center justify-center flex-none rounded-full bg-black text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><path fill="currentColor" d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.368 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091z"></path></svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-5 grid-rows-3'>
            <img
              src="https://images.pexels.com/photos/7239916/pexels-photo-7239916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Harry Shelton"
              data-author-profile="https://www.pexels.com/es-es/@harry-shelton-39376662/"
              alt="Image by Harry Shelton from Pexels"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <img
              src='https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='Brett Sayles'
              data-author-profile='https://www.pexels.com/es-es/@brett-sayles/'
              className='w-full h-full object-cover'
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/8044178/pexels-photo-8044178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="ANTONI SHKRABA production"
              data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
              loading="lazy"
              alt="Photo by ANTONI SHKRABA production on Pexels"
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.pexels.com/photos/11911967/pexels-photo-11911967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Damir Hu"
              data-author-profile="https://www.pexels.com/es-es/@damir-hu-197678918/"
              className="object-cover w-full h-full"
              alt="cover"
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/4316518/pexels-photo-4316518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Anna Shvets"
              data-author-profile="https://www.pexels.com/es-es/@shvetsa"
              alt="cover"
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/2079167/pexels-photo-2079167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Lucas Pezeta"
              data-author-profile="https://www.pexels.com/es-es/@lucaspezeta/"
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/2114758/pexels-photo-2114758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Kevin Bidwell"
              data-author-profile="https://www.pexels.com/es-es/@kevinbidwell/"
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src='https://images.pexels.com/photos/8041064/pexels-photo-8041064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='ANTONI SHKRABA production'
              data-author-profile='https://www.pexels.com/es-es/@anthonyshkraba-production/'
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Yan Krukau"
              data-author-profile="https://www.pexels.com/es-es/@yankrukov/"
              alt="Cover"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="ANTONI SHKRABA production"
              data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
              alt="Cover"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/3984822/pexels-photo-3984822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Gustavo Fring"
              data-author-profile="https://www.pexels.com/es-es/@gustavo-fring/"
              alt="album cover"
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Anderson Guerra"
              data-author-profile="https://www.pexels.com/es-es/@andersonguerra/"
              alt="album cover"
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/4634517/pexels-photo-4634517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Jo Kassis"
              data-author-profile="https://www.pexels.com/es-es/@jokassis/"
              alt="album cover"
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/33779/hand-microphone-mic-hold.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Pixabay"
              data-author-profile="https://www.pexels.com/es-es/@pixabay/"
              alt="photo by Pixabay from Pexels"
              loading="lazy"
              className='object-cover w-full h-full'
            />
            <img
              src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Daniel Reche"
              data-author-profile="https://www.pexels.com/es-es/@daniel-reche-718241/"
              alt="Photo by Daniel Reche from Pexels"
              loading="lazy"
              className='object-cover w-full h-full'
            />
          </div>
        </article>
        <article className='w-[291px] relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className="pointer-events-none z-0 absolute right-0 bottom-0 w-14 h-14 bg-indigo-500/30 blur-2xl" />
          <div className="pointer-events-none z-0 absolute left-0 bottom-0 w-14 h-14 bg-green-500/40 blur-2xl" />
          <div className='relative grid place-items-center w-full gap-3'>
            <button className='absolute right-4 top-4 flex items-center justify-center w-9 h-9 transition-colors duration-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-violet-600'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
            <img
              className='flex-none w-20 h-20 rounded-full object-cover'
              src='https://images.pexels.com/photos/3756774/pexels-photo-3756774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='Sound On'
              data-author-profile='https://www.pexels.com/es-es/@sound-on/'
              alt='album cover'
              loading="lazy"
            />
            <div className='w-full text-center grid'>
              <h5 className='text-lg font-medium'>Sunshine sound</h5>
              <p className='text-gray-500'>Lookee Stefane</p>
            </div>
            <div className='w-full flex items-center justify-between space-x-4'>
              <span className='text-xs font-semibold'>03:34</span>
              <div className='relative rounded-full flex-1 h-1 bg-gray-200 dark:bg-gray-800'>
                <div className='absolute rounded-full left-0 w-1/2 h-full bg-violet-600 ' />
                <div className='absolute rounded-full top-1/2 -translate-y-1/2 h-3 w-3 right-1/2 bg-violet-600 ' />
              </div>
              <span className='text-xs font-semibold'>08:14</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-violet-600'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-violet-600'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-violet-600 text-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-violet-600'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-violet-600'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

      </div>

      {/* Row Widget content */}
      <div className="flex justify-start w-full gap-3">

        <div className="grid w-[260px] gap-3">
          <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
            <div className="pointer-events-none z-0 absolute right-0 bottom-0 w-14 h-14 bg-indigo-500/30 blur-2xl" />
            <div className="pointer-events-none z-0 absolute left-0 bottom-0 w-14 h-14 bg-green-500/40 blur-2xl" />
            <div className='relative grid place-items-center w-full gap-2'>
              <div className='relative w-full h-20'>
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
              <div className='w-full flex items-center justify-between space-x-3 px-4'>
                <span className='text-xs font-semibold'>03:34</span>
                <div className='relative rounded-full flex-1 h-1 bg-gray-200 dark:bg-gray-800'>
                  <div className='absolute rounded-full left-0 w-1/2 h-full bg-black dark:bg-white' />
                  <div className='absolute rounded-full top-1/2 -translate-y-1/2 h-3 w-3 right-1/2 bg-black dark:bg-white' />
                </div>
                <span className='text-xs font-semibold'>08:14</span>
              </div>
              <div className='w-full flex justify-between items-center p-3'>
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
          <div className="grid w-[291px]">
            <section className='grid grid-cols-2 gap-3'>
              <article className="relative flex flex-col items-start justify-between gap-1 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
                <button className='absolute top-4 right-4 rounded-full inline-flex items-center justify-center w-8 h-8 transition-colors duration-200 ring-2 ring-transparent focus:ring-blue-600 hover:bg-gray-200 dark:hover:bg-gray-800'>
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
                <button className='absolute top-4 right-4 rounded-full inline-flex items-center justify-center w-8 h-8 transition-colors duration-200 ring-2 ring-transparent focus:ring-blue-600 hover:bg-gray-200 dark:hover:bg-gray-800'>
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

        <section className="w-[291px] grid mb-3 items-start">
          <article className="relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded text-sm overflow-hidden text-white bg-black border-transparent">
            <img
              src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Daniel Reche"
              data-author-profile="https://www.pexels.com/es-es/@daniel-reche-718241/"
              alt="Photo by Daniel Reche from Pexels"
              loading="lazy"
              className="w-full h-28 object-cover"
            />
            <div className='p-6 absolute top-0 left-0 w-full h-full'>
              <div className='flex items-center justify-between gap-4 w-full'>
                <div className='flex-1 grid'>
                  <h2 className='font-bold text-lg'>Remix of the year</h2>
                  <p>David Martín</p>
                </div>
                <button className='relative w-12 h-12'>
                  <svg width="50" height="50" viewBox="0 0 200 200" className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" className='stroke-transparent' strokeWidth="6" fill="none"/>
                    <circle cx="100" cy="100" r="90" className='stroke-white' strokeWidth="6" fill="none" strokeDasharray="565.48" strokeDashoffset="183.1" strokeLinecap="round" transform="rotate(-90 100 100)" />
                  </svg>
                  <span className='w-9 h-9 flex-none rounded-full inline-flex items-center justify-center bg-white text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 7 12.25v-8.5A1.75 1.75 0 0 0 5.25 2zm7 0A1.75 1.75 0 0 0 9 3.75v8.5c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 14 12.25v-8.5A1.75 1.75 0 0 0 12.25 2z"></path></svg>
                  </span>
                </button>
              </div>
            </div>
          </article>
        </section>

      </div>

    </div>
  )
}