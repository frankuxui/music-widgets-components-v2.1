export default function Page () {
  return (
    <div className='min-h-screen w-full pt-28'>
      <div className="fixed pointer-events-none z-0 left-0 -top-20 w-[30rem] h-[30rem] bg-emerald-500/10 blur-3xl" />
      <div className="fixed pointer-events-none z-0 left-[20%] -top-20 w-[20rem] h-[20rem] bg-rose-500/10 blur-3xl" />
      <div className="fixed pointer-events-none z-0 left-[50%] -top-20 w-[50rem] h-[50rem] bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 min-h-screen expo !mt-6">

        <section className='grid grid-cols-2 gap-3'>
          <article className="relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-xl p-3 mb-3 text-sm overflow-hidden bg-violet-600 dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <header className='w-full flex items-center justify-between'>
              <p className='font-medium text-xs text-white'>May 30, 2022</p>
              <button className='w-7 h-7 inline-flex items-center justify-center rounded-full ring-2 ring-transparent focus:ring-white text-white hover:bg-white/10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M10 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path>
                </svg>
              </button>
            </header>
            <section>
              <div className='w-full flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full inline-flex items-center justify-center flex-none bg-white text-violet-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M12 9.75a.75.75 0 0 1 .75.75c0 .539.315 1.1.834 1.56c.53.471 1.11.69 1.416.69a.75.75 0 0 1 0 1.5c-.738 0-1.58-.387-2.25-.93V17a2.25 2.25 0 1 1-1.5-2.122V10.5a.75.75 0 0 1 .75-.75M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></path><path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579"></path></g></svg>
                </div>
                <h2 className='text-base leading-5 font-semibold text-white'>Nicky Romero</h2>
              </div>
            </section>
            <section className='grid w-full gap-1.5'>
              <p className='font-medium text-white'>Music details</p>
              <div className="grid gap-0.5">
                <div className='w-full h-1 rounded-full overflow-hidden bg-white/10'>
                  <div className='w-1/2 h-full rounded-l-full bg-white'></div>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <span className="text-xs font-medium text-white">Progress</span>
                  <span className="text-xs font-medium text-white">50%</span>
                </div>
              </div>
            </section>
            <section className='w-full'>
              <div className="flex items-center justify-start gap-1">
                <div className="inline-flex items-center gap-1 px-1.5 h-5 rounded-sm bg-white text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 28 28"><path fill="currentColor" d="M10.138 3.382C8.304 2.31 6 3.632 6 5.756v16.489c0 2.123 2.304 3.445 4.138 2.374l14.697-8.59c1.552-.907 1.552-3.15 0-4.057z"></path></svg>
                  <span className='font-medium text-xs'>2k</span>
                </div>
                <div className="inline-flex items-center gap-1 px-1.5 h-5 rounded-sm bg-white text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M10 4.543c-1.25-.98-2.965-1.245-4.432-.895C3.678 4.1 2 5.621 2 8.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C15.12 14.18 18 11.49 18 8.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895" clipRule="evenodd"></path></svg>
                  <span className='font-medium text-xs'>281</span>
                </div>
              </div>
            </section>
          </article>
          <article className="relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-xl p-3 mb-3 text-sm overflow-hidden bg-white text-black dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <header className='w-full flex items-center justify-between'>
              <p className='font-medium text-xs'>May 30, 2022</p>
              <button className='w-7 h-7 inline-flex items-center justify-center rounded-full ring-2 ring-transparent transition-colors duration-200 focus:ring-white hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M10 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path>
                </svg>
              </button>
            </header>
            <section>
              <div className='w-full flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full inline-flex items-center justify-center flex-none bg-lime-300 text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M12 9.75a.75.75 0 0 1 .75.75c0 .539.315 1.1.834 1.56c.53.471 1.11.69 1.416.69a.75.75 0 0 1 0 1.5c-.738 0-1.58-.387-2.25-.93V17a2.25 2.25 0 1 1-1.5-2.122V10.5a.75.75 0 0 1 .75-.75M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></path><path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579"></path></g></svg>
                </div>
                <h2 className='text-base leading-5 font-semibold'>Ryan Millers</h2>
              </div>
            </section>
            <section className='grid w-full gap-1.5'>
              <p className='font-medium'>Music details</p>
              <div className="grid gap-0.5">
                <div className='w-full h-1 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900'>
                  <div className='w-[71%] h-full rounded-l-full bg-lime-500'></div>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <span className="text-xs font-medium ">Progress</span>
                  <span className="text-xs font-medium ">71%</span>
                </div>
              </div>
            </section>
            <section className='w-full'>
              <div className="flex items-center justify-start gap-1">
                <div className="inline-flex items-center gap-1 px-1.5 h-5 rounded bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M19.266 10.484a1.917 1.917 0 0 1 0 3.032a35.8 35.8 0 0 1-9.916 5.416l-.653.232c-1.248.443-2.566-.401-2.735-1.69a42.5 42.5 0 0 1 0-10.948c.169-1.289 1.487-2.133 2.735-1.69l.653.232a35.8 35.8 0 0 1 9.916 5.416m-.918 1.846a.417.417 0 0 0 0-.66a34.3 34.3 0 0 0-9.5-5.189l-.653-.232a.572.572 0 0 0-.746.472a41 41 0 0 0 0 10.558a.572.572 0 0 0 .746.471l.653-.231a34.3 34.3 0 0 0 9.5-5.19" clipRule="evenodd"></path></svg>
                  <span className='font-medium text-xs'>2k</span>
                </div>
                <div className="inline-flex items-center gap-1 px-1.5 h-5 rounded bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clipRule="evenodd"></path></svg>
                  <span className='font-medium text-xs'>281</span>
                </div>
              </div>
            </section>
          </article>
        </section>

        <section className='grid grid-cols-2 gap-3'>
          <article className='relative w-full break-inside rounded-xl overflow-hidden max-h-44 text-sm mb-3 text-white'>
            <img
              src="https://images.pexels.com/photos/1317374/pexels-photo-1317374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Peter Spencer"
              data-author-profile="https://www.pexels.com/es-es/@f4photography/"
              loading="lazy"
              alt="Photo by Peter Spencer on Pexels"
              className="w-full h-full object-cover"
            />
            <div className='absolute bottom-0 left-0 w-full p-4 min-h-20 flex items-end bg-gradient-to-t from-black via-black/80 to-transparent'>
              <div className='flex items-center gap-2'>
                <span className='w-5 h-5 inline-flex items-center justify-center rounded-full bg-rose-600 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 28 28"><path fill="currentColor" d="M10.138 3.382C8.304 2.31 6 3.632 6 5.756v16.489c0 2.123 2.304 3.445 4.138 2.374l14.697-8.59c1.552-.907 1.552-3.15 0-4.057z"></path></svg>
                </span>
                <span className='text-sm font-bold'>83.4 K</span>
              </div>
            </div>
          </article>
          <article className='relative w-full break-inside rounded-xl overflow-hidden max-h-44 text-sm mb-3 text-white'>
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
        </section>

        <article className="relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded mb-3 text-sm overflow-hidden text-white bg-black border-transparent">
          <img
            src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="Daniel Reche"
            data-author-profile="https://www.pexels.com/es-es/@daniel-reche-718241/"
            alt="Photo by Daniel Reche from Pexels"
            loading="lazy"
            className="w-full h-24 object-cover"
          />
          <div className='p-6 absolute top-0 left-0 w-full h-full'>
            <div className='flex items-center justify-between gap-4 w-full'>
              <div className='flex-1 grid'>
                <h2 className='font-medium text-base'>Remix of the year</h2>
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

        <article className="relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded mb-3 text-sm overflow-hidden text-white bg-black border-transparent">
          <img
            src="https://images.pexels.com/photos/33779/hand-microphone-mic-hold.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="Pixabay"
            data-author-profile="https://www.pexels.com/es-es/@pixabay/"
            alt="photo by Pixabay from Pexels"
            loading="lazy"
            className="w-full h-24 object-cover"
          />
          <div className='p-6 absolute top-0 left-0 w-full h-full'>
            <div className='flex items-center justify-between gap-4 w-full'>
              <div className='flex-1 grid'>
                <h2 className='font-medium text-base'>For A Momment</h2>
                <p>Jazz Do it</p>
              </div>
              <button className='w-9 h-9 flex-none rounded-full inline-flex items-center justify-center bg-white text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28"><path fill="currentColor" d="M10.138 3.382C8.304 2.31 6 3.632 6 5.756v16.489c0 2.123 2.304 3.445 4.138 2.374l14.697-8.59c1.552-.907 1.552-3.15 0-4.057z"></path></svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside p-4 rounded-lg mb-3 text-sm text-white bg-black border-transparent'>
          <div className='relative w-full rounded-xl flex flex-col text-xs gap-2 '>
            <div className='w-full border rounded-lg flex p-3 items-center justify-between border-gray-800'>
              <div className='inline-flex items-center justify-start gap-2'>
                <img className="flex-none w-10 h-10 rounded-full ring-2 ring-amber-500 border-2 border-black dark:border-gray-950" src="https://randomuser.me/api/portraits/men/86.jpg" alt="avatar" loading="lazy" />
                <div className="grid">
                  <h2 className='text-base font-semibold'>Jhoan Flick</h2>
                  <p>Music for your soul</p>
                </div>
              </div>
              <button className='w-8 h-8 flex-none rounded-full inline-flex items-center justify-center bg-black text-white hover:bg-white/10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
              </button>
            </div>
            <h2 className='text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-rose-500 via-amber-500 to-yellow-400 block text-transparent bg-clip-text'> Dance With Gunes Ergun & Jam Couché Remix </h2>
            <div className='w-full flex items-center justify-between my-4'>
              <button className='inline-flex items-center justify-center relative w-10 h-10 z-[1]'>
                <svg width="55" height="55" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <circle cx="100" cy="100" r="90" className="stroke-white/10" strokeWidth="10" fill="none"/>
                  <circle cx="100" cy="100" r="90" className="stroke-amber-500" strokeWidth="10" fill="none" strokeDasharray="565.48" strokeDashoffset="313.1" strokeLinecap="round" transform="rotate(-90 100 100)" />
                </svg>
                <div className='inline-flex items-center justify-center absolute z-[1] w-full h-full flex-none rounded-full bg-orange-600 dark:border-gray-950 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </div>
              </button>
              <div className='flex justify-between items-center gap-1'>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex items-center flex-row justify-between w-full h-9 cursor-pointer'>
              <div className='w-0.5 h-[15%] rounded-full bg-[#FF0000]' />
              <div className='w-0.5 h-[20%] rounded-full bg-[#FF1100]' />
              <div className='w-0.5 h-[30%] rounded-full bg-[#FF2200]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FF3300]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FF4400]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FF5500]' />
              <div className='w-0.5 h-[50%] rounded-full bg-[#FF6600]' />
              <div className='w-0.5 h-[30%] rounded-full bg-[#FF7700]' />
              <div className='w-0.5 h-[60%] rounded-full bg-[#FF8800]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FF9900]' />
              <div className='w-0.5 h-[30%] rounded-full bg-[#FFAA00]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FFBB00]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FFCC00]' />
              <div className='w-0.5 h-[50%] rounded-full bg-[#FFDD00]' />
              <div className='w-0.5 h-[50%] rounded-full bg-[#FFEE00]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FFFF00]' />
              <div className='w-0.5 h-[50%] rounded-full bg-[#FEEE00]' />
              <div className='w-0.5 h-[40%] rounded-full bg-[#FEDE00]' />
              <div className='w-0.5 h-[30%] rounded-full bg-[#FECD00]' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[55%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[70%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[77%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[80%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[85%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[80%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[75%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[70%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[65%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[55%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[20%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[20%] rounded-full bg-white/30' />
            </div>
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-xs text-white'>01:50</span>
              <span className='font-semibold text-xs text-white'>03:55</span>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside p-4 rounded-lg mb-3 text-sm text-white bg-black border-transparent'>
          <div className='relative w-full rounded-xl flex flex-col text-xs gap-2 '>
            <div className='p-[1px] bg-gradient-to-t overflow-hidden rounded-lg from-lime-500 to-cyan-400'>
              <div className='relative w-full border rounded-lg flex p-3 gap-4 items-center justify-between border-gray-800 bg-black'>
                <div className='flex-1 inline-flex items-center justify-start gap-2'>
                  <img className="flex-none w-10 h-10 rounded-full ring-2 ring-lime-500 border-2 border-black dark:border-gray-950" src="https://randomuser.me/api/portraits/men/66.jpg" alt="avatar" loading="lazy" />
                  <div className="grid">
                    <h2 className='text-base font-semibold truncate'>Anthony Reyes</h2>
                    <p className='truncate'>Love Italy</p>
                  </div>
                </div>
                <div className='flex items-center flex-row justify-between h-6 cursor-pointer w-full max-w-14'>
                  <div className='w-[2px] h-[15%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[20%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[30%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[40%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[40%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[40%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[50%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[68%] rounded-full bg-lime-500' />
                  <div className='w-[2px] h-[78%] rounded-full bg-white/30' />
                  <div className='w-[2px] h-[50%] rounded-full bg-white/30' />
                  <div className='w-[2px] h-[40%] rounded-full bg-white/30' />
                  <div className='w-[2px] h-[30%] rounded-full bg-white/30' />
                </div>
              </div>
            </div>
            <h2 className='text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-lime-500 via-cyan-500 to-blue-400 block text-transparent bg-clip-text'>Bring Back the summer this amazing</h2>
            <div className='w-full flex items-center justify-between my-4'>
              <button className='inline-flex items-center justify-center relative w-10 h-10 z-[1]'>
                <svg width="55" height="55" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <circle cx="100" cy="100" r="90" className="stroke-white/10" strokeWidth="10" fill="none"/>
                  <circle cx="100" cy="100" r="90" className="stroke-lime-500" strokeWidth="10" fill="none" strokeDasharray="565.48" strokeDashoffset="313.1" strokeLinecap="round" transform="rotate(-90 100 100)" />
                </svg>
                <div className='inline-flex items-center justify-center absolute z-[1] w-full h-full flex-none rounded-full bg-lime-600 dark:border-gray-950 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </div>
              </button>
              <div className='flex justify-between items-center gap-1'>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white text-black'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
            <section className="grid grid-cols-4 gap-1 mb-3">
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/76.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Jhon</h2>
              </button>
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/76.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Tina</h2>
              </button>
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/78.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Jhonas</h2>
              </button>
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/79.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Mathiaz</h2>
              </button>
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/16.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Fabio</h2>
              </button>
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/46.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Miller</h2>
              </button>
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/86.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Jessy</h2>
              </button>
              <button className="w-full grid place-items-center p-2 rounded-md transition-colors ring-2 ring-transparent focus:ring-lime-500 duration-200 text-white hover:bg-white/10">
                <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/36.jpg" alt="avatar" loading="lazy" />
                <h2 className="text-xs font-medium mt-1">Jack</h2>
              </button>
            </section>
          </div>
        </article>

        <article className="relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-2xl p-4 mb-3 text-sm overflow-hidden bg-gray-50 border-gray-200 dark:bg-gray-950 dark:text-white dark:border-gray-900">
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

        <article className="relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <div className="flex flex-row items-start gap-4">
            <div className="relative w-24 h-24 flex-none rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4634517/pexels-photo-4634517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                data-author="Jo Kassis"
                data-author-profile="https://www.pexels.com/es-es/@jokassis/"
                alt="album cover"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-950" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-sm font-semibold">Best Ballads</h2>
              <div className="flex items-center gap-1 text-xs">
                <span>17 songs</span>
                <span>&middot;</span>
                <span>1 hr 3 min</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-semibold">3.5</span>
                <div className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" > <path fill="none" className="fill-amber-500 stroke-amber-500" stroke="currentColor" strokeWidth={2} d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z" ></path> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" > <path fill="none" className="fill-amber-500 stroke-amber-500" stroke="currentColor" strokeWidth={2} d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z" ></path> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" > <path fill="none" className="fill-amber-500 stroke-amber-500" stroke="currentColor" strokeWidth={2} d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z" ></path> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" > <path fill="none" className="stroke-amber-500" stroke="currentColor" strokeWidth={2} d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z" ></path> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" > <path fill="none" className="stroke-amber-500" stroke="currentColor" strokeWidth={2} d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z" ></path> </svg>
                </div>
              </div>
              <button className="inline-flex px-2 gap-1 h-7 border rounded-full items-center justify-center mt-2 dark:border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" > <path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m8.5 0a.5.5 0 0 0-.254-.435L7.62 6.077a.75.75 0 0 0-1.12.652v2.542a.75.75 0 0 0 1.12.653l2.626-1.489A.5.5 0 0 0 10.5 8" ></path> </svg>
                <span className="text-xs font-semibold uppercase"> Play album </span>
              </button>
            </div>
          </div>
        </article>

        <article className="relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <div className="pointer-events-none z-0 absolute left-0 top-0 w-14 h-14 bg-emerald-500/30 blur-2xl" />
          <div className="pointer-events-none z-0 absolute right-0 top-0 w-14 h-14 bg-yellow-500/40 blur-2xl" />
          <div className='w-full flex items-center gap-2'>
            <div className="relative w-14 h-14 flex-none rounded-full overflow-hidden">
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

        <section className='grid grid-cols-2 gap-3'>
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

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
          <div className='w-full flex items-center justify-between gap-4'>
            <div className='inline-flex items-center gap-2'>
              <img
                className='flex-none w-10 h-10 rounded-full object-cover'
                src='https://randomuser.me/api/portraits/men/77.jpg'
                alt='album cover'
                loading="lazy"
              />
              <div className='grid'>
                <h2 className='font-semibold'>Albert Mills</h2>
                <p className='text-xs truncate'>The sound of the future</p>
              </div>
            </div>
            <div className='inline-flex items-center gap-2'>
              <button className='inline-flex items-center justify-center z-[1] w-7 h-7 flex-none rounded-full bg-black  text-white dark:bg-white dark:text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
              </button>
              <button className='inline-flex items-center justify-center z-[1] w-7 h-7 flex-none rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
          <div className='w-full flex items-center justify-start gap-3'>
            <img
              className='flex-none w-20 h-20 rounded-full object-cover'
              src='https://images.pexels.com/photos/17413080/pexels-photo-17413080/free-photo-of-hombre-silueta-musica-concierto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='Riccardo Vespa'
              data-author-profile='https://www.pexels.com/es-es/@riccardo-vespa-594469796/'
              alt='album cover'
              loading="lazy"
            />
            <div className='grid flex-1 gap-2'>
              <div className='flex items-center justify-between gap-4'>
                <div className='grid flex-1'>
                  <h2 className='text-base font-semibold'>Roman RSK</h2>
                  <p className='text-xs truncate'>The sound of the future</p>
                </div>
                <button className='inline-flex items-center justify-center z-[1] w-7 h-7 flex-none rounded-full bg-gradient-to-tr from-rose-500 to-amber-600 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </button>
              </div>
              <div className='w-full flex items-center justify-between gap-3'>
                <span className="text-xs font-semibold">01:30</span>
                <div className='w-full flex items-center h-4 gap-0.5'>
                  <div className='w-[2px] h-[10%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[20%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[30%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[40%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[40%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[50%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[60%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[70%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[30%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[30%] rounded bg-black dark:bg-white' />
                  <div className='w-[2px] h-[35%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[30%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[40%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[50%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[60%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[80%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[70%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[60%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[50%] rounded bg-gray-300 dark:bg-gray-800' />
                  <div className='w-[2px] h-[40%] rounded bg-gray-300 dark:bg-gray-800' />
                </div>
                <span className="text-xs font-semibold">03:45</span>
              </div>
            </div>
          </div>
        </article>

        <article className='relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded mb-3 text-sm overflow-hidden border-transparent bg-black/70 backdrop-blur-lg' >
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
                <div className='w-[2px] h-[88%] rounded bg-white' />
                <div className='w-[2px] h-[70%] rounded bg-white' />
                <div className='w-[2px] h-[20%] rounded bg-white' />
                <div className='w-[2px] h-[30%] rounded bg-white' />
                <div className='w-[2px] h-[40%] rounded bg-white/20' />
                <div className='w-[2px] h-[50%] rounded bg-white/20' />
                <div className='w-[2px] h-[45%] rounded bg-white/20' />
                <div className='w-[2px] h-[58%] rounded bg-white/20' />
                <div className='w-[2px] h-[22%] rounded bg-white/20' />
                <div className='w-[2px] h-[22%] rounded bg-white/20' />
                <div className='w-[2px] h-[22%] rounded bg-white/20' />
                <div className='w-[2px] h-[22%] rounded bg-white/20' />
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
                <div className='w-[2px] h-[15%] rounded bg-white/20' />
                <div className='w-[2px] h-[10%] rounded bg-white/20' />
                <div className='w-[2px] h-[12%] rounded bg-white/20' />
                <div className='w-[2px] h-[14%] rounded bg-white/20' />
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

        <article className='relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-xl mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
          <section className='relative rounded-xl overflow-hidden'>
            <button className='absolute top-3 right-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 hover:bg-white/20 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
            </button>
            <img
              src="https://images.pexels.com/photos/28096553/pexels-photo-28096553/free-photo-of-musica-musico-rock-roca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="keksopad"
              data-author-profile="https://www.pexels.com/es-es/@keksopad-1753273998/"
              className='w-full max-w-full'
              alt="music"
              loading='lazy'
            />
            <div className='w-full absolute right-0 bottom-0 p-3'>
              <div className='rounded-2xl flex gap-4 p-4 items-center w-full bg-blue-900/20 backdrop-blur-lg text-white'>
                <div className='flex-1 grid'>
                  <h2 className='text-base font-semibold'>David Martín</h2>
                  <p className='truncate text-white/60'>The best music for your ears</p>
                </div>
                <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none rounded-full bg-white  text-black transition-all duration-200 hover:ring-2 ring-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.368 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091z"></path></svg>
                </button>
              </div>
            </div>
          </section>
          <section className='w-full grid gap-2 px-2 pb-2'>
            <div className='w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative hover:bg-gray-100 dark:hover:bg-gray-900 focus-within:ring-rose-500 focus-within:bg-rose-50 focus-within:hover:bg-rose-50 dark:focus-within:hover:bg-rose-500/10 dark:focus-within:bg-rose-500/10'>
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
                  <p className='text-xs truncate'>Alone in the dark</p>
                </div>
              </div>
              <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-rose-600 focus:text-white focus:ring-rose-600 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:hover:bg-rose-600'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="none" strokeWidth={2} className='transition-colors duration-200 stroke-rose-600 group-focus:stroke-white group-focus:fill-white' d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
                </svg>
              </button>
            </div>
            <div className='w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative hover:bg-gray-100 dark:hover:bg-gray-900 focus-within:ring-rose-500 focus-within:bg-rose-50 focus-within:hover:bg-rose-50 dark:focus-within:hover:bg-rose-500/10 dark:focus-within:bg-rose-500/10'>
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
                  <p className='text-xs truncate'>First time in the city &amp; I love it</p>
                </div>
              </div>
              <button className='inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-rose-600 focus:text-white focus:ring-rose-600 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:hover:bg-rose-600'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="none" strokeWidth={2} className='transition-colors duration-200 stroke-rose-600 group-focus:stroke-white group-focus:fill-white' d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
                </svg>
              </button>
            </div>
          </section>
        </article>

        <article className='relative flex flex-col items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
          <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex items-end h-8 gap-0.5'>
              <div className='w-1 h-[10%] rounded bg-blue-600' />
              <div className='w-1 h-[20%] rounded bg-blue-600' />
              <div className='w-1 h-[30%] rounded bg-blue-600' />
              <div className='w-1 h-[40%] rounded bg-blue-600' />
              <div className='w-1 h-[40%] rounded bg-blue-600' />
              <div className='w-1 h-[50%] rounded bg-blue-600' />
              <div className='w-1 h-[60%] rounded bg-blue-600' />
              <div className='w-1 h-[70%] rounded bg-blue-600' />
              <div className='w-1 h-[30%] rounded bg-blue-600' />
              <div className='w-1 h-[30%] rounded bg-blue-600' />
              <div className='w-1 h-[40%] rounded bg-blue-600' />
              <div className='w-1 h-[60%] rounded bg-blue-600' />
              <div className='w-1 h-[80%] rounded bg-blue-600' />
              <div className='w-1 h-[30%] rounded bg-blue-600' />
              <div className='w-1 h-[30%] rounded bg-blue-600' />
              <div className='w-1 h-[45%] rounded bg-blue-600' />
              <div className='w-1 h-[55%] rounded bg-blue-600' />
              <div className='w-1 h-[60%] rounded bg-blue-600' />
              <div className='w-1 h-[65%] rounded bg-blue-600' />
              <div className='w-1 h-[85%] rounded bg-blue-600' />
              <div className='w-1 h-[100%] rounded bg-gray-300' />
              <div className='w-1 h-[90%] rounded bg-gray-300' />
              <div className='w-1 h-[70%] rounded bg-gray-300' />
              <div className='w-1 h-[70%] rounded bg-gray-300' />
              <div className='w-1 h-[50%] rounded bg-gray-300' />
              <div className='w-1 h-[70%] rounded bg-gray-300' />
              <div className='w-1 h-[40%] rounded bg-gray-300' />
              <div className='w-1 h-[40%] rounded bg-gray-300' />
              <div className='w-1 h-[50%] rounded bg-gray-300' />
              <div className='w-1 h-[90%] rounded bg-gray-300' />
              <div className='w-1 h-[88%] rounded bg-gray-300' />
              <div className='w-1 h-[70%] rounded bg-gray-300' />
              <div className='w-1 h-[20%] rounded bg-gray-300' />
              <div className='w-1 h-[30%] rounded bg-gray-300' />
              <div className='w-1 h-[40%] rounded bg-gray-300' />
              <div className='w-1 h-[50%] rounded bg-gray-300' />
              <div className='w-1 h-[45%] rounded bg-gray-300' />
              <div className='w-1 h-[58%] rounded bg-gray-300' />
              <div className='w-1 h-[46%] rounded bg-gray-300' />
              <div className='w-1 h-[35%] rounded bg-gray-300' />
              <div className='w-1 h-[30%] rounded bg-gray-300' />
              <div className='w-1 h-[40%] rounded bg-gray-300' />
              <div className='w-1 h-[50%] rounded bg-gray-300' />
              <div className='w-1 h-[60%] rounded bg-gray-300' />
              <div className='w-1 h-[80%] rounded bg-gray-300' />
              <div className='w-1 h-[70%] rounded bg-gray-300' />
              <div className='w-1 h-[60%] rounded bg-gray-300' />
              <div className='w-1 h-[50%] rounded bg-gray-300' />
              <div className='w-1 h-[40%] rounded bg-gray-300' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <span className='text-xs font-medium'>2:34</span>
              <span className='text-xs font-medium'>5:45</span>
            </div>
          </div>
          <section className='flex items-center w-full justify-between gap-2'>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent focus:ring-blue-700 dark:focus:ring-blue-700 transition-colors duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M5 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V9H5c-.55 0-1-.45-1-1s.45-1 1-1m10.83 4.72l1.92-3.21A.997.997 0 0 0 16.9 7a.99.99 0 0 0-.86.49l-1.37 2.28l-1.38-2.29c-.18-.3-.5-.48-.85-.48c-.78 0-1.26.85-.86 1.51l1.92 3.21l-2.26 3.77c-.4.67.08 1.51.86 1.51c.35 0 .68-.18.86-.49l1.71-2.85l1.71 2.85c.18.3.51.49.86.49h.01c.78 0 1.26-.85.86-1.51z"></path></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent focus:ring-blue-700 dark:focus:ring-blue-700 transition-colors duration-300 bg-white dark:bg-gray-950 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="m12 5l-1.104-1.545c-.41-.576-.617-.864-.487-1.13c.13-.268.46-.283 1.12-.314Q11.763 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"></path><path d="M8 11c.528-.42 1.008-1.113 1.308-.984c.3.128.204.552.204 1.212v4.776M16 10h-2.64a.5.5 0 0 0-.49.402l-.366 2.102c.636-.264.957-.361 1.673-.361c1.036 0 1.927.637 1.825 1.957c.018 1.56-1.242 1.92-1.825 1.9c-.584-.02-1.517.2-1.677-1"></path></g></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-12 h-12 border-2 border-blue-700'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent focus:ring-blue-700 dark:focus:ring-blue-700 transition-colors duration-300 bg-white dark:bg-gray-950 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="m12 5l1.104-1.545c.41-.576.617-.864.487-1.13c-.13-.268-.46-.283-1.12-.314Q12.237 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a9.99 9.99 0 0 0-4-8"></path><path d="M16.752 12.6c0-1.38.066-1.752-.198-2.196s-.924-.406-1.584-.406s-1.14-.038-1.458.322c-.39.42-.222 1.2-.27 2.28c.108 1.44-.186 2.58.264 3.06c.324.396.9.336 1.584.348c.68-.008 1.092.024 1.428-.36c.372-.336.192-1.668.234-3.048m-9.504-1.476c.132-1.044.972-1.164 1.812-1.122c.66-.03 1.68.018 1.692 1.518c-.012 1.56-1.248 1.451-1.248 1.476s1.296-.036 1.248 1.524C10.74 15.9 9.84 16.044 9 15.996c-.84.06-1.62-.156-1.752-1.116"></path></g></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent text-rose-600 focus:ring-blue-700 dark:focus:ring-blue-700 transition-colors duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56"></path></svg>
            </button>
          </section>
        </article>

        <section className='grid grid-cols-2 gap-3'>
          <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
            <div className="absolute z-0 pointer-events-none left-1/2 top-0 w-14 h-14 bg-indigo-500/30 blur-2xl" />
            <div className="absolute z-0 pointer-events-none left-0 bottom-0 w-14 h-14 bg-rose-500/20 blur-2xl" />
            <div className='flex flex-col w-full gap-3'>
              <div className='w-full flex items-start justify-between'>
                <div className='relative'>
                  <div className='absolute bottom-0 right-1 border-2 rounded-full w-3.5 h-3.5 bg-emerald-400 border-white dark:border-gray-950' />
                  <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <img
                      src="https://images.pexels.com/photos/9009499/pexels-photo-9009499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Yan Krukau"
                      data-author-profile="https://www.pexels.com/es-es/@yankrukov/"
                      alt="cover"
                      loading="lazy"
                      className='w-16 h-16 object-cover rounded-full'
                    />
                  </div>
                </div>
                <button className='w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-blue-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
                </button>
              </div>
              <section className='grid gap-2'>
                <h2 className='text-base font-extrabold'>The best pop sounds</h2>
                <div className='flex w-full items-center justify-between gap-1'>
                  <span className='font-medium px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-900'>20 songs</span>
                  <button className='flex-none border-2 inline-flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:border-gray-300 dark:hover:border-gray-600 dark:focus:border-blue-600 focus:border-blue-600 dark:border-gray-700 focus:text-blue-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"></path></svg>
                  </button>
                </div>
              </section>
            </div>
          </article>
          <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
            <div className='flex flex-col w-full gap-3'>
              <div className='w-full flex items-start justify-between'>
                <div className='relative'>
                  <div className='absolute bottom-0 right-1 border-2 rounded-full w-3.5 h-3.5 z-10 bg-emerald-400 border-white dark:border-gray-950' />
                  <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <img
                      src="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Andrea Piacquadio"
                      data-author-profile="https://www.pexels.com/es-es/@olly/"
                      alt="cover"
                      loading="lazy"
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                  <div className='absolute w-full h-full top-0 left-0 rounded-full flex items-center justify-center bg-black/60 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                  </div>
                </div>
                <button className='w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-blue-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
                </button>
              </div>
              <section className='grid gap-2'>
                <h2 className='text-base font-extrabold'>Summer chill vibes</h2>
                <div className='flex w-full items-center justify-between gap-1'>
                  <span className='font-medium px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-900'>18 songs</span>
                  <button className='flex-none border-2 inline-flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:border-gray-300 dark:hover:border-gray-600 dark:focus:border-blue-600 focus:border-blue-600 dark:border-gray-700 focus:text-blue-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"></path></svg>
                  </button>
                </div>
              </section>
            </div>
          </article>
        </section>

        <section className="grid grid-cols-2 gap-3" data-filter="multimedia">
          <article className="relative flex items-center justify-between border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
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
          <article className="relative flex flex-col items-center justify-between border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
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
            <div className="flex flex-col items-start w-full p-4 space-y-2">
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

        <article className='relative flex flex-col items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900' >
          <div className="z-0 pointer-events-none absolute left-1/2 top-0 w-14 h-14 bg-rose-500/30 blur-2xl" />
          <div className="z-0 pointer-events-none absolute right-0 top-0 w-14 h-14 bg-yellow-500/40 blur-2xl" />
          <div className="z-0 pointer-events-none absolute left-0 top-1/2 w-14 h-14 bg-emerald-500/40 blur-3xl" />
          <button className='absolute top-4 right-4 w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:ring-blue-600'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></path></svg>
          </button>
          <div className='w-full flex items-center justify-center'>
            <div className='w-20 h-20 rounded-full overflow-hidden ring-8 border-4 border-white ring-gray-200 dark:ring-gray-800 dark:border-gray-950'>
              <img
                src="https://images.pexels.com/photos/1845847/pexels-photo-1845847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                data-author="Dimitri Dim"
                data-author-profile="https://www.pexels.com/es-es/@dimitri-dim-380720/"
                alt="cover"
                loading="lazy"
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex items-end h-8 gap-0.5'>
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
              <div className='w-1 h-[55%] rounded bg-black dark:bg-white' />
              <div className='w-1 h-[60%] rounded bg-black dark:bg-white' />
              <div className='w-1 h-[65%] rounded bg-black dark:bg-white' />
              <div className='w-1 h-[85%] rounded bg-black dark:bg-white' />
              <div className='w-1 h-[100%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[90%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[70%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[70%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[50%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[70%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[40%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[40%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[50%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[90%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[88%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[70%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[20%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[30%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[40%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[50%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[45%] rounded bg-gray-300 dark:bg-gray-800' />
              <div className='w-1 h-[58%] rounded bg-gray-300 dark:bg-gray-800' />
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
            <div className='w-full flex items-center justify-between'>
              <span className='text-xs font-medium'>2:34</span>
              <span className='text-xs font-medium'>5:45</span>
            </div>
          </div>
          <section className='flex items-center w-full justify-between gap-2'>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent focus:ring-blue-700 transition-colors duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V9H5c-.55 0-1-.45-1-1s.45-1 1-1m10.83 4.72l1.92-3.21A.997.997 0 0 0 16.9 7a.99.99 0 0 0-.86.49l-1.37 2.28l-1.38-2.29c-.18-.3-.5-.48-.85-.48c-.78 0-1.26.85-.86 1.51l1.92 3.21l-2.26 3.77c-.4.67.08 1.51.86 1.51c.35 0 .68-.18.86-.49l1.71-2.85l1.71 2.85c.18.3.51.49.86.49h.01c.78 0 1.26-.85.86-1.51z"></path></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent focus:ring-blue-700 transition-colors duration-300 bg-white dark:bg-gray-950 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="m12 5l-1.104-1.545c-.41-.576-.617-.864-.487-1.13c.13-.268.46-.283 1.12-.314Q11.763 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"></path><path d="M8 11c.528-.42 1.008-1.113 1.308-.984c.3.128.204.552.204 1.212v4.776M16 10h-2.64a.5.5 0 0 0-.49.402l-.366 2.102c.636-.264.957-.361 1.673-.361c1.036 0 1.927.637 1.825 1.957c.018 1.56-1.242 1.92-1.825 1.9c-.584-.02-1.517.2-1.677-1"></path></g></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-11 h-11 border-2 ring-4 ring-gray-300 border-white bg-blue-100 dark:ring-gray-700 dark:border-gray-950 dark:bg-gray-800 focus:ring-blue-700 dark:focus:ring-blue-700'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent focus:ring-blue-700 transition-colors duration-300 bg-white dark:bg-gray-950 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="m12 5l1.104-1.545c.41-.576.617-.864.487-1.13c-.13-.268-.46-.283-1.12-.314Q12.237 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a9.99 9.99 0 0 0-4-8"></path><path d="M16.752 12.6c0-1.38.066-1.752-.198-2.196s-.924-.406-1.584-.406s-1.14-.038-1.458.322c-.39.42-.222 1.2-.27 2.28c.108 1.44-.186 2.58.264 3.06c.324.396.9.336 1.584.348c.68-.008 1.092.024 1.428-.36c.372-.336.192-1.668.234-3.048m-9.504-1.476c.132-1.044.972-1.164 1.812-1.122c.66-.03 1.68.018 1.692 1.518c-.012 1.56-1.248 1.451-1.248 1.476s1.296-.036 1.248 1.524C10.74 15.9 9.84 16.044 9 15.996c-.84.06-1.62-.156-1.752-1.116"></path></g></svg>
            </button>
            <button className='flex-none inline-flex items-center justify-center rounded-full w-8 h-8 ring-2 ring-transparent text-rose-600 focus:ring-blue-700 transition-colors duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56"></path></svg>
            </button>
          </section>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='flex items-center w-full justify-between gap-4'>
            <h2 className='flex-none px-2 py-1.5 rounded font-medium text-xs w-full truncate max-w-32 bg-gray-200 dark:bg-gray-900'>Giant with Rag n Bone Man</h2>
            <div className='inline-flex items-center justify-end gap-2 flex-1'>
              <div className='flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer'>
                <div className='w-[2px] h-[15%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[20%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[20%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[24%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[28%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[34%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[35%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[25%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[35%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/20' />
              </div>
              <button className='flex-none w-7 h-7 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"></path></svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-3 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='relative border rounded h-8 inline-flex items-center w-full overflow-hidden dark:border-gray-900'>
            <div className='absolute top-0 left-0 w-1/2 h-full pointer-events-none bg-gradient-to-r from-emerald-200/40 to-violet-400/10' />
            <div className='w-full h-full relative py-1 px-1.5 flex items-center justify-between'>
              <h2 className='w-full truncate max-w-[10rem] font-medium'>What mama Saida Midi Culture Remix</h2>
              <span className='inline-flex items-center justify-center h-full px-1.5 text-xs font-medium rounded bg-gray-200 dark:bg-gray-800'>2x</span>
            </div>
          </div>
          <button className='flex-none w-7 h-7 inline-flex items-center justify-center rounded-full border bg-white text-black dark:text-white dark:bg-gray-950 dark:border-gray-900'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"></path></svg>
          </button>
        </article>

        <section className='grid grid-cols-2 gap-3'>
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
              <div className='w-10 h-10 rounded-full inline-flex items-center justify-center font-semibold text-bsmase bg-amber-400'>
                MA
              </div>
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

        <article className="relative overflow-hidden shadow-sm break-inside rounded p-[1px] mb-3 text-sm">
          <div className="absolute -top-4 -left-4 -right-8 -bottom-4 flex z-0 blur-md transition-all duration-500">
            <div className="flex-1 bg-amber-600"></div>
            <div className="flex-1 bg-rose-600"></div>
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-pink-600"></div>
            <div className="flex-1 bg-blue-600"></div>
            <div className="flex-1 bg-cyan-600"></div>
            <div className="flex-1 bg-green-600"></div>
          </div>
          <div className="flex items-center justify-between relative z-1 w-full rounded gap-4 p-3 bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <div className='w-full flex items-center justify-start gap-4'>
              <img className="flex-none rounded-full w-9 h-9" src="https://randomuser.me/api/portraits/men/77.jpg" alt="avatar" loading="lazy" />
              <div className='flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer'>
                <div className='w-[2px] h-[15%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[20%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[20%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[24%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[28%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[34%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[35%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[38%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[28%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[20%] rounded-full bg-black/80 dark:bg-white' />
                <div className='w-[2px] h-[29%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[25%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[15%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[20%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[30%] rounded-full bg-black/30 dark:bg-white/20' />
                <div className='w-[2px] h-[10%] rounded-full bg-black/30 dark:bg-white/20' />
              </div>
            </div>
            <div className='inline-flex items-center justify-end gap-1 flex-1 p-1 rounded bg-gray-200 dark:bg-gray-900'>
              <button className='flex justify-center items-center rounded w-7 h-7 transition-colors duration-300 text-black dark:text-white'>
                <svg width='17' height='17' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded w-7 h-7 transition-colors duration-300 bg-white text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
              </button>
              <button className='flex justify-center items-center rounded w-7 h-7 transition-colors duration-300 text-black dark:text-white'>
                <svg width='17' height='17' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='relative w-full px-4 pb-4 pt-14 rounded-xl bg-black flex flex-col text-xs'>
            <figure className="absolute -top-6 left-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-950">
              <img
                src="https://images.pexels.com/photos/15977920/pexels-photo-15977920/free-photo-of-mujer-musica-musico-cantante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                data-author="Nadin Sh"
                data-author-profile="https://www.pexels.com/es-es/@nadin-sh-78971847/"
                className='w-full h-full rounded-full object-cover'
                alt='cover'
                loading="lazy"
              />
            </figure>
            <h2 className='text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 block text-transparent bg-clip-text'> Dance With Gunes Ergun & Jam Couché Remix </h2>
            <div className='w-full flex items-center justify-between my-4'>
              <button className='inline-flex items-center justify-center relative w-8 h-8 z-[1]'>
                <span className='w-full h-full pointer-events-none animate-ping top-0 left-0 rounded-full absolute bg-violet-600' />
                <div className='inline-flex items-center justify-center absolute z-[1] w-full h-full flex-none rounded-full bg-violet-600 dark:border-gray-950 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </div>
              </button>
              <div className='flex justify-between items-center gap-1'>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white dark:bg-gray-800'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white dark:bg-gray-800'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white dark:bg-gray-800'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 bg-white dark:bg-gray-800'>
                  <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex items-center flex-row justify-between w-full h-9 cursor-pointer'>
              <div className='w-0.5 h-[15%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[20%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[20%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[10%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[15%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[20%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[85%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[78%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[90%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[88%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[88%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[78%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[20%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
              <div className='w-0.5 h-[20%] rounded-full bg-white/30' />
            </div>
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-xs text-white'>01:50</span>
              <span className='font-semibold text-xs text-white'>03:55</span>
            </div>
          </div>
        </article>

        <section className="mb-3 grid grid-cols-2 gap-3">
          <article className="break-inside overflow-hidden relative flex flex-col gap-2 rounded-lg border text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <figure className="relative">
              <img className="w-full max-w-full h-full max-h-[5rem] object-cover" src="https://images.pexels.com/photos/3760956/pexels-photo-3760956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" data-author="Sound On" alt="portada" data-author-profile="https://www.pexels.com/es-es/@sound-on/"/>
              <button className="absolute w-6 h-6 top-3 right-3 rounded-full flex items-center justify-center bg-white text-rose-600">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"></path>
                </svg>
              </button>
            </figure>
            <section className="relative flex flex-col gap-1 px-3 pb-3 pt-4 mt-1">
              <button className="absolute -top-5 left-3 rounded-full w-7 h-7 flex items-center justify-center z-10 bg-black text-white ring-2 ring-white dark:bg-white dark:text-black dark:ring-gray-950">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd"></path>
                </svg>
              </button>
              <header className="flex items-center justify-between w-full">
                <h3 className="text-sm font-semibold">Maria Doe</h3>
                <span className="flex items-center gap-1 text-amber-500">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"></path>
                  </svg>
                  <span className="text-xs mt-0.5 font-medium text-black dark:text-gray-300">4.5</span>
                </span>
              </header>
              <p className="text-xs">Lorem ipsum dolor sit amet.</p>
            </section>
          </article>
          <article className="break-inside overflow-hidden relative flex flex-col gap-2 rounded-lg border text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <figure className="relative">
              <img className="w-full max-w-full h-full max-h-[5rem] object-cover" src="https://images.pexels.com/photos/3658708/pexels-photo-3658708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" data-author="Craig Adderley" alt="portada" data-author-profile="https://www.pexels.com/es-es/@thatguycraig000/" />
              <button className="absolute w-6 h-6 top-3 right-3 rounded-full flex items-center justify-center bg-white text-rose-600">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"></path>
                </svg>
              </button>
            </figure>
            <section className="relative flex flex-col gap-1 px-3 pb-3 pt-4 mt-1">
              <div className="absolute left-1/2 top-0 w-14 h-14 z-0 pointer-events-none bg-rose-500/40 blur-2xl" />
              <button className="absolute -top-5 left-3 rounded-full px-3 h-7 flex items-center justify-center z-10 text-xs font-semibold bg-black text-white ring-2 ring-white dark:bg-white dark:text-black dark:ring-gray-950">
                PLAY
              </button>
              <header className="flex items-center justify-between w-full">
                <h3 className="text-sm font-semibold">Jhonas</h3>
                <span className="flex items-center gap-1 text-amber-500">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"></path>
                  </svg>
                  <span className="text-xs mt-0.5 font-medium text-black dark:text-gray-300">4.5</span>
                </span>
              </header>
              <p className="text-xs">Lorem ipsum dolor sit ametaau.</p>
            </section>
          </article>
        </section>

        <article className="border shadow-md break-inside relative overflow-hidden flex items-center justify-between rounded-lg p-3 mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <div className="absolute left-1/2 top-0 w-14 h-14 bg-rose-500/30 blur-2xl"></div>
          <header className="flex items-center gap-3">
            <span className="text-xs font-semibold">02</span>
            <div className="flex items-center gap-4">
              <img className="flex-none w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/24.jpg" alt="avatar" loading="lazy" />
              <div className="grid flex-auto">
                <span className="text-xs text-gray-600 dark:text-gray-300">September 2023</span>
                <h2 className="text-sm font-semibold">Stephany</h2>
              </div>
            </div>
          </header>
          <button className='w-9 h-9 z-[1] inline-flex flex-none justify-center items-center rounded-full bg-rose-500 text-white' data-play='true'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
          </button>
        </article>

        <article className='group relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <img
            src="https://images.pexels.com/photos/2063352/pexels-photo-2063352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="Brett Sayles"
            data-author-profile="https://www.pexels.com/es-es/@brett-sayles/"
            className='w-full object-cover transition-transform duration-300 transform group-hover:scale-105'
            alt='cover'
          />
          <div className='absolute bottom-0 left-0 w-full p-3'>
            <div className='flex flex-col rounded-xl px-4 pb-4 pt-8 bg-black/80 text-white backdrop-blur-sm'>
              <div className='absolute left-1/2 -translate-x-1/2 w-11 top-3.5 rounded-full h-1 bg-white/20 cursor-row-resize' />
              <div className='flex items-center justify-between text-left'>
                <div>
                  <h1 className='font-semibold text-sm'>The best of Dire Straits</h1>
                  <p className='text-white'>Mr Dire Straits</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <button className='flex flex-none items-center justify-center rounded-full w-10 h-10 transition-colors duration-300 text-rose-500 bg-black/60 hover:bg-black/90'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' strokeWidth='2' width='18' height='18'>
                      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-between space-x-4 mt-4'>
                <span className='font-medium'>03:34</span>
                <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-white/20'>
                  <div className='absolute rounded-full left-0 w-1/2 h-full bg-white' />
                </div>
                <span className='font-medium'>08:14</span>
              </div>
              <div className='flex justify-between items-center mt-3'>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 text-white hover:bg-black/90'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 text-white hover:bg-black/90'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-9 h-9 transition-all bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='18' height='18'>
                    <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 text-white hover:bg-black/90'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 text-white hover:bg-black/90'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='w-full flex justify-between items-center'>
            <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
              <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
              <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-gray-900 text-white dark:bg-gray-100 dark:text-black'>
              <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
              <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black'>
              <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
              </svg>
            </button>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='grid w-full gap-3'>
            <div className='w-full flex items-center justify-between gap-4'>
              <div className='flex items-center gap-3'>
                <img
                  className='flex-none w-11 h-11 rounded-full object-cover'
                  src='https://randomuser.me/api/portraits/women/67.jpg'
                  alt='cover'
                  loading="lazy"
                />
                <div className='grid'>
                  <h5 className='truncate text-sm font-semibold'>Sunshine sound</h5>
                  <p className='text-xs text-gray-500'>Lookee Stefane</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300 ring-2 ring-transparent hover:bg-gray-200 dark:hover:bg-gray-900 focus:ring-violet-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                    <circle cx={12} cy={12} r={1}></circle>
                    <circle cx={6} cy={12} r={1}></circle>
                    <circle cx={18} cy={12} r={1}></circle>
                  </g>
                </svg>
              </button>
            </div>
            <div className='w-full flex justify-between items-center'>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-violet-600 focus:text-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-violet-600 focus:text-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-violet-600 text-white '>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-violet-600 focus:text-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-violet-600 focus:text-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <section className="grid grid-cols-2 gap-4">
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

        <section className='grid grid-cols-2 gap-3'>
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

        <section className="break-inside grid grid-cols-2 mb-3 gap-3" >
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

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside pt-10 rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <img
            src="https://images.pexels.com/photos/9106374/pexels-photo-9106374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="Bryce Carithers"
            data-author-profile="https://www.pexels.com/es-es/@bryce-carithers-11680701/"
            className='w-full absolute left-0 top-0 h-full object-cover'
            alt='cover'
          />
          <section className="w-full h-full flex flex-col relative p-4">
            <div className='relative w-full px-4 pb-4 pt-10 rounded-xl bg-black/80 backdrop-blur-sm flex flex-col text-xs'>
              <figure className="absolute -top-6 left-4 w-14 h-14 rounded-full overflow-hidden border-4 border-black">
                <img
                  src="https://images.pexels.com/photos/15977920/pexels-photo-15977920/free-photo-of-mujer-musica-musico-cantante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  data-author="Nadin Sh"
                  data-author-profile="https://www.pexels.com/es-es/@nadin-sh-78971847/"
                  className='w-full h-full rounded-full object-cover'
                  alt='cover'
                  loading="lazy"
                />
              </figure>
              <h2 className='text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 to-rose-500 block text-transparent bg-clip-text'> Dance With Gunes Ergun & Jam Couché Remix </h2>
              <div className='w-full flex items-center justify-between my-3'>
                <button className="flex justify-center items-center rounded-full w-9 h-9 transition-all bg-white text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </button>
                <button className="flex flex-none items-center justify-center rounded-full w-9 h-9 transition-colors duration-300 text-orange-500 bg-black/60 hover:bg-black/90">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                  </svg>
                </button>
              </div>
              <div className='flex items-center flex-row justify-between w-full h-9 cursor-pointer'>
                <div className='w-0.5 h-[15%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[20%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[60%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[20%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[10%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[15%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[20%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/80' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[85%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[78%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[90%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[88%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[88%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[78%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[20%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[60%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[50%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[40%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[30%] rounded-full bg-white/30' />
                <div className='w-0.5 h-[20%] rounded-full bg-white/30' />
              </div>
              <div className='flex items-center justify-between'>
                <span className='font-semibold text-xs text-white'>01:50</span>
                <span className='font-semibold text-xs text-white'>03:55</span>
              </div>
            </div>
          </section>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-2xl mb-3 text-sm overflow-hidden border-transparent'>
          <img
            src="https://images.pexels.com/photos/15340483/pexels-photo-15340483/free-photo-of-hombre-persona-musico-instrumento-musical.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="Chris S"
            data-author-profile="https://www.pexels.com/es-es/@chris-s-414051315/"
            className='absolute top-0 left-0 w-full h-full object-cover'
            alt='cover'
          />
          <div className='overflow-hidden backdrop-blur-sm bg-black/60 text-white'>
            <div className='p-4 space-y-4 relative overflow-hidden'>
              <section className='flex items-center justify-between'>
                <span className='text-base font-semibold'>Recommended</span>
              </section>
              <section className='w-full grid grid-cols-3 gap-2'>
                <div className='flex flex-col gap-1 group'>
                  <div className="h-14 rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Yan Krukau"
                      data-author-profile="https://www.pexels.com/es-es/@yankrukov/"
                      alt="Cover"
                      className='w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 group'>
                  <div className="h-14 rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="ANTONI SHKRABA production"
                      data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
                      alt="Cover"
                      className='w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 group'>
                  <div className="h-14 rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Anna Pou"
                      data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                      alt="Cover"
                      className='w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
              </section>
              <section className='flex items-center justify-between'>
                <span className='text-base font-semibold'>Recommended artists</span>
              </section>
              <section className="grid grid-cols-4 gap-1 mb-3">
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/76.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jhon</h2>
                </button>
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/76.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Tina</h2>
                </button>
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/78.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jhonas</h2>
                </button>
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/79.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Mathiaz</h2>
                </button>
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/16.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Fabio</h2>
                </button>
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/46.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Miller</h2>
                </button>
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/86.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jessy</h2>
                </button>
                <button className="w-full grid place-items-center p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/36.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jack</h2>
                </button>
              </section>
              <section className='flex items-center justify-between'>
                <span className='text-base font-semibold'>Top 10 albums</span>
              </section>
              <section className="flex gap-2 overflow-auto pb-3">
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Yan Krukau"
                    data-author-profile="https://www.pexels.com/es-es/@yankrukov/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="ANTONI SHKRABA production"
                    data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-xl p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='w-full flex flex-col'>
            <div className='space-y-4 relative overflow-hidden'>
              <section className='flex items-center justify-between'>
                <span className='text-base font-semibold'>Recommended</span>
              </section>
              <section className='w-full grid grid-cols-3 gap-2'>
                <div className='flex flex-col gap-1 group'>
                  <div className="h-14 rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Yan Krukau"
                      data-author-profile="https://www.pexels.com/es-es/@yankrukov/"
                      alt="Cover"
                      className='w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 group'>
                  <div className="h-14 rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="ANTONI SHKRABA production"
                      data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
                      alt="Cover"
                      className='w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 group'>
                  <div className="h-14 rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Anna Pou"
                      data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                      alt="Cover"
                      className='w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
              </section>
              <section className='flex items-center justify-between'>
                <span className='text-base font-semibold'>Recommended artists</span>
              </section>
              <section className="grid grid-cols-4 gap-1 mb-3">
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/76.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jhon</h2>
                </button>
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/76.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Tina</h2>
                </button>
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/78.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jhonas</h2>
                </button>
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/79.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Mathiaz</h2>
                </button>
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/16.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Fabio</h2>
                </button>
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/46.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Miller</h2>
                </button>
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/86.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jessy</h2>
                </button>
                <button className="w-full grid place-items-center p-1.5 rounded-md transition-colors duration-200 hover:bg-gray-200">
                  <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/36.jpg" alt="avatar" loading="lazy" />
                  <h2 className="text-xs font-medium mt-1">Jack</h2>
                </button>
              </section>
              <section className='flex items-center justify-between'>
                <span className='text-base font-semibold'>Top 10 albums</span>
              </section>
              <section className="flex gap-2 overflow-auto pb-3">
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Yan Krukau"
                    data-author-profile="https://www.pexels.com/es-es/@yankrukov/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="ANTONI SHKRABA production"
                    data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full max-w-[4rem]'>
                  <img
                    src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    data-author="Anna Pou"
                    data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                    alt="Cover"
                    className='w-full object-cover rounded'
                  />
                  <div className='w-full'>
                    <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                    <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                  </div>
                </div>
              </section>
            </div>
            <div className='w-full flex justify-between items-center pt-4'>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-gray-900 text-white dark:bg-gray-100 dark:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='flex items-start flex-1 gap-4'>
            <button type='button' className='flex-none inline-flex items-center justify-center rounded-full w-9 h-9 bg-blue-600'>
              <svg className='w-4 h-4' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path className='fill-white' d='M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z' fill='currentColor' />
              </svg>
            </button>
            <div className='grid'>
              <a href='#' className='font-bold'>Notion podcast</a>
              <p className='truncate mb-2 text-xs text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit consectetur adipiscing elit.</p>
            </div>
          </div>
          <span className='flex-none text-xs font-medium text-gray-600 dark:text-gray-400'>30:45</span>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className="absolute left-0 top-0 w-10 h-8 z-0 bg-rose-500/60 blur-2xl" />
          <div className='flex items-start flex-1 gap-4 relative z-[1]'>
            <button type='button' className='flex-none inline-flex items-center justify-center rounded-full w-9 h-9 bg-indigo-600 text-white' data-play='true'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15"><animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.33;1" values="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15;M13 15L8 18L8 6L13 9L13 15M13 9L18 12L18 12L13 15L13 9;M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6"></animate></path></svg>
            </button>
            <div className='flex-1 grid gap-1'>
              <a href='#' className='text-base font-bold'>Podcast</a>
              <div className='w-full rounded-full overflow-hidden h-[4px] whitespace-nowrap bg-gray-100 dark:bg-gray-800'>
                <div className='bg-indigo-600 h-full w-1/3'>
                  <span className='sr-only'>33%</span>
                </div>
              </div>
            </div>
          </div>
          <span className='flex-none text-xs font-medium text-gray-600 dark:text-gray-400'>30:45</span>
        </article>

        <section className='grid grid-cols-2 gap-3 break-inside'>
          <article className='relative border shadow-sm rounded-lg mb-3 text-sm overflow-hidden break-inside bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
            <div className='relative w-full h-32 overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/3756771/pexels-photo-3756771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                data-author='Sound On'
                data-author-profile='https://www.pexels.com/es-es/@sound-on/'
                className='object-cover w-full h-full'
                alt='cover'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col items-start w-full space-y-1 p-4'>
              <button className='relative rounded-full w-9 h-9 -mt-8 flex items-center justify-center shadow-lg bg-white text-black'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
                  <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                </svg>
              </button>
              <div className='grid w-full'>
                <h2 className='text-base font-semibold'>Anastacia</h2>
                <p className='text-xs'>Sick and tired</p>
              </div>
            </div>
          </article>
          <article className='relative shadow-sm rounded-lg mb-3 text-sm overflow-hidden break-inside bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
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
        </section>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='grid flex-1 p-4'>
            <div className='font-bold text-base leading-5'>New <br /> Releases</div>
          </div>
          <img
            className='absolute right-0 -top-0 w-28 h-28 object-cover rounded-full'
            src='https://images.pexels.com/photos/228842/pexels-photo-228842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            data-author='James Sutton'
            data-author-profile='https://www.pexels.com/es-es/@emuse-shutter/'
            alt='cover'
            loading='lazy'
          />
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
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

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='flex items-center gap-3 flex-1'>
            <div className='relative w-11 h-11 overflow-hidden rounded-full'>
              <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/20'>
                <button>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                    <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                  </svg>
                </button>
              </div>
              <img
                src='https://images.pexels.com/photos/3400600/pexels-photo-3400600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                data-author='Inga Seliverstova'
                data-author-profile='https://www.pexels.com/es-es/@inga-sv'
                alt='Cover'
                className='object-cover w-full h-full'
                loading="lazy"
              />
            </div>
            <div className='grid'>
              <h5 className='truncate text-sm font-semibold'>Sultans Of Swing</h5>
              <p className='truncate text-xs text-gray-500'>Dire Straits</p>
            </div>
          </div>
          <div className='flex flex-none items-center gap-1'>
            <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 text-rose-600 hover:bg-gray-100 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"></path></svg>
            </button>
            <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' width="18" height="18" viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='12' cy='12' r='1' />
                <circle cx='12' cy='5' r='1' />
                <circle cx='12' cy='19' r='1' />
              </svg>
            </button>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='flex items-center gap-3 flex-1'>
            <div className='relative w-11 h-11 overflow-hidden rounded-full'>
              <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/20'>
                <button>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                    <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                  </svg>
                </button>
              </div>
              <img
                src='https://images.pexels.com/photos/3400600/pexels-photo-3400600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                data-author='Inga Seliverstova'
                data-author-profile='https://www.pexels.com/es-es/@inga-sv'
                alt='Cover'
                className='object-cover w-full h-full'
                loading="lazy"
              />
            </div>
            <div className='grid'>
              <h5 className='truncate text-sm font-semibold'>Sultans Of Swing</h5>
              <p className='truncate text-xs text-gray-500'>Dire Straits</p>
            </div>
          </div>
          <div className='flex flex-none items-center gap-1'>
            <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.474-.673-3.41-.568-5.304 1.088L14.53 6.97a.75.75 0 1 1-1.06 1.061l-2-1.999l-.01-.01c-2.058-2.14-4.224-2.335-5.836-1.598M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clipRule="evenodd"></path></svg>
            </button>
            <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' width="18" height="18" viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='12' cy='12' r='1' />
                <circle cx='12' cy='5' r='1' />
                <circle cx='12' cy='19' r='1' />
              </svg>
            </button>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
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
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-black text-white dark:bg-white dark:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ring-2 ring-transparent focus:focus:ring-black dark:focus:ring-white'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className="absolute left-1/2 top-0 w-14 h-14 bg-indigo-500/30 blur-2xl" />
          <div className="absolute right-0 top-0 w-14 h-14 bg-green-500/40 blur-2xl" />
          <div className='grid place-items-center w-full gap-3'>
            <button className='absolute right-4 top-4 flex items-center justify-center w-9 h-9 transition-colors duration-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
            <img
              className='flex-none w-20 h-20 rounded-full object-cover'
              src='https://images.pexels.com/photos/9008771/pexels-photo-9008771.jpeg'
              data-author='Yan Krukau'
              data-author-profile='https://www.pexels.com/es-es/@yankrukov/'
              alt='album cover'
              loading="lazy"
            />
            <div className='w-full text-center grid'>
              <h5 className='text-lg font-medium'>Sunshine sound</h5>
              <p className='text-gray-500'>Lookee Stefane</p>
            </div>
            <div className='w-full flex items-center justify-between space-x-4'>
              <span className='text-xs font-semibold'>03:34</span>
              <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-gray-200 dark:bg-gray-800'>
                <div className='absolute rounded-full left-0 w-1/2 h-full bg-black dark:bg-white' />
              </div>
              <span className='text-xs font-semibold'>08:14</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-gray-900 text-white dark:bg-gray-100 dark:text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='grid w-full gap-3'>
            <div className='w-full flex items-center justify-between gap-4'>
              <div className='flex items-center gap-3'>
                <img
                  className='flex-none w-11 h-11 rounded-full object-cover'
                  src='https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  data-author='Papa Yaw'
                  data-author-profile='https://www.pexels.com/es-es/@papa-yaw-956993'
                  alt='album cover'
                  loading="lazy"
                />
                <div className='grid'>
                  <h5 className='truncate text-sm font-medium'>Sunshine sound</h5>
                  <p className='text-xs text-gray-500'>Lookee Stefane</p>
                </div>
              </div>
              <span className='px-1 h-5 text-xs rounded-sm inline-flex items-center font-medium bg-emerald-200 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'>Funcky</span>
            </div>
            <div className='w-full flex items-center justify-between space-x-4'>
              <span className='text-xs font-semibold'>03:34</span>
              <div className='relative rounded overflo-hidden flex-1 h-1 bg-gray-200 dark:bg-gray-800'>
                <div className='absolute rounded left-0 w-1/2 h-full bg-emerald-600 ' />
              </div>
              <span className='text-xs font-semibold'>08:14</span>
            </div>
          </div>
        </article>

        <article className='relative grid grid-cols-12 shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-indigo-600 text-white'>
          <div className="absolute right-0 top-0 w-14 h-14 z-0 pointer-events-none bg-pink-600/80 blur-2xl" />
          <div className='relative w-full h-full col-span-5'>
            <span className='absolute right-2 top-2 rounded text-xs py-1 px-2 text-white bg-[black]'>April, 2018 </span>
            <img
              src='https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='David Bartus'
              data-author-profile='https://www.pexels.com/es-es/@david-bartus-43782/'
              className='w-full h-full object-cover'
              alt='Imagen'
              loading="lazy"
            />
          </div>
          <div className='col-span-7 w-full flex flex-col justify-between p-4 gap-2'>
            <h1 className='font-semibold'>Boomerang</h1>
            <div className='flex justify-between items-center gap-2'>
              <p className='flex-1 text-xs font-medium'>Justine Forever and Therapie</p>
              <button className='flex flex-none items-center justify-center rounded-full w-7 h-7 bg-amber-400 text-black'>
                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden border-emerald-200 bg-white dark:bg-gray-950 dark:text-white dark:border-emerald-900'>
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

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg p-4 mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='flex items-center space-x-4 pr-4 text-sm'>
            <div className='flex-none flex items-center justify-center w-11 h-11 rounded-full font-semibold bg-blue-700 text-white'>RO</div>
            <div className='flex-auto grid'>
              <h2 className='font-bold block text-sm'>Robert D.</h2>
              <p className='text-xs truncate'>Clubbed to death and other</p>
            </div>
          </div>
          <button className='w-8 h-8 flex flex-none justify-center items-center rounded-full bg-black text-white dark:bg-gray-100 dark:text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
          </button>
          <div className='absolute bottom-0 left-0 w-full rounded-full overflow-hidden h-0.5 whitespace-nowrap bg-gray-100 dark:bg-gray-800'>
            <div className='bg-blue-700 h-full w-4/6'>
              <span className='sr-only'>33%</span>
            </div>
          </div>
        </article>

        <article className='relative grid grid-cols-12 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <img
            className='col-span-3 w-full h-full flex-none object-cover'
            src='https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            data-author='Martin Lopez'
            data-author-profile='https://www.pexels.com/es-es/@mediocrememories/'
            alt='cover'
            loading="lazy"
          />
          <div className='col-span-9 grid w-full p-3 gap-4'>
            <div className='flex items-center justify-between w-full gap-0.5'>
              <button className='flex-none flex justify-center items-center rounded-full w-8 h-8 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex-none flex justify-center items-center rounded-full w-8 h-8 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex-none flex justify-center items-center rounded-full w-8 h-8 transition-colors bg-blue-600 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
              </button>
              <button className='flex-none flex justify-center items-center rounded-full w-8 h-8 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex-none flex justify-center items-center rounded-full w-8 h-8 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800'>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='w-full rounded-full overflow-hidden h-1 bg-gray-100 dark:bg-gray-800'>
              <div className='bg-blue-600 h-full w-4/6'>
                <span className='sr-only'>33%</span>
              </div>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
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

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden border-transparent bg-white dark:bg-gray-950 dark:text-white'>
          <div className='relative'>
            <img
              src='https://images.pexels.com/photos/2079169/pexels-photo-2079169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Imagen cover'
              data-author='Lucas Pezeta'
              data-author-profile='https://www.pexels.com/es-es/@lucaspezeta/'
              className='object-cover w-full min-h-[20rem]'
              loading="lazy"
            />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between text-white bg-gradient-to-t from-black/10 to-transparent'>
              <div className='flex items-center justify-between p-4 w-full'>
                <div className='flex items-center'>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                      <path d='M15 18l-6-6 6-6' />
                    </svg>
                  </button>
                </div>
                <div className='flex items-center space-x-2'>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M16.5 2.25a3.25 3.25 0 0 0-3.2 3.824L8.57 9.386l-.068.053a3.25 3.25 0 1 0 0 5.121l.068.054l4.73 3.312q-.05.28-.05.574a3.25 3.25 0 1 0 .667-1.973L9.438 13.39c.2-.422.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136A3.25 3.25 0 1 0 16.5 2.25M14.75 5.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M6.5 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m10 6.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5" clipRule="evenodd"></path></svg>
                  </button>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                      <circle cx='12' cy='12' r='1' />
                      <circle cx='12' cy='5' r='1' />
                      <circle cx='12' cy='19' r='1' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-3 p-4 bg-black/20 backdrop-blur-sm border-t border-white/10'>
                <div className='flex items-center justify-between'>
                  <div className='grid'>
                    <h1 className='font-medium text-base'>Christmas songs</h1>
                    <p className='text-white/80'>Dire Straits</p>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <button className='flex flex-none items-center justify-center rounded-full w-10 h-10 transition-colors duration-300 hover:bg-white/20'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='18' height='18'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex flex-col justify-between space-y-4'>
                  <div className='flex items-center justify-between space-x-4'>
                    <span className='text-xs font-medium'>03:34</span>
                    <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-white/20'>
                      <div className='absolute rounded-full left-0 w-[70%] h-full bg-emerald-500' />
                    </div>
                    <span className='text-xs font-medium'>01:22</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                      <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                      <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full w-10 h-10 transition-colors duration-300 bg-emerald-500 text-white'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                      <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                      <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="border shadow-sm overflow-hidden break-inside grid grid-cols-12 rounded-xl mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
          <img
            className="w-full max-w-full h-full object-cover col-span-4"
            src="https://images.pexels.com/photos/1822503/pexels-photo-1822503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="Eduardo Dutra"
            data-author-profile="https://www.pexels.com/es-es/@edwardutra/"
            loading="lazy"
          />
          <div className="p-4 col-span-8 grid">
            <img className="flex-none w-12 h-12 rounded-full ring-2 ring-emerald-600 border-2 border-white dark:border-gray-950" src="https://randomuser.me/api/portraits/men/86.jpg" alt="avatar" loading="lazy" />
            <div className="flex flex-col">
              <a href="#" className="text-base font-semibold block">Jhonathan</a>
              <span className="text-gray-600 dark:text-gray-400">Musician and composer</span>
            </div>
          </div>
        </article>

        <article className="relative border shadow-sm overflow-hidden break-inside grid grid-cols-12 rounded-xl mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
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
                <p className="text-xs truncate text-gray-600 dark:text-gray-400">The best music for your ears</p>
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
            <p className="text-xs text-gray-600 dark:text-gray-400">Musician, composer and producer</p>
          </div>
        </article>

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

        <article className="border shadow-sm break-inside grid grid-cols-12 rounded-xl overflow-hidden mb-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900" >
          <div className="col-span-4">
            <img
              src="https://images.pexels.com/photos/2601189/pexels-photo-2601189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Imagen"
              className="w-full h-full aspect-square object-cover"
              data-author="Aleksandr Neplokhov"
              data-author-profile="https://www.pexels.com/es-es/@aleksandr-neplokhov-486399/"
              loading="lazy"
            />
          </div>
          <div className="col-span-8 flex items-center justify-between p-3 flex-1 gap-3">
            <header className="flex flex-col gap-1">
              <h2 className="text-base font-semibold leading-5">Massive</h2>
              <p className="text-xs">Mat cipher neto, Freakpass and Nik...</p>
            </header>
            <button className="flex flex-none justify-center items-center rounded-full w-8 h-8 transition-color duration-200 bg-gray-800 hover:bg-gray-700 text-white">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
              </svg>
            </button>
          </div>
        </article>

        <section className="break-inside grid grid-cols-2 mb-3 gap-3">
          <div className="flex flex-col gap-3">
            <article className="border shadow-sm break-inside rounded-md p-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
              <header className="w-full flex items-center justify-between">
                <h2 className="text-sm font-bold">Playlists</h2>
                <span className="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-semibold bg-amber-200 text-black">5</span>
              </header>
              <section className="flex items-center justify-between w-full mt-4">
                <div className="block">
                  <dt className="sr-only">Users</dt>
                  <dd className="flex justify-start -space-x-1.5">
                    <a href="#" className="inline-block -ml-1">
                      <img className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/12.jpg" alt="avatar" loading="lazy" />
                    </a>
                    <a href="#" className="inline-block -ml-1">
                      <img className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/men/13.jpg" alt="avatar" loading="lazy" />
                    </a>
                    <a href="#" className="inline-block -ml-1">
                      <span className="flex items-center justify-center text-[11px] font-medium w-6 h-6 rounded-full bg-rose-200 ring-2 ring-white dark:bg-gray-600 dark:ring-gray-950">+3</span>
                    </a>
                  </dd>
                </div>
                <button className="flex justify-center items-center rounded-full w-6 h-6 transition-colors duration-300 bg-blue-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="m11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"></path></svg>
                </button>
              </section>
            </article>
            <article className="border shadow-sm break-inside rounded-md p-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
              <header className="w-full flex items-center justify-between">
                <h2 className="text-sm font-bold">Playlists</h2>
                <span className="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-medium bg-green-200 text-black">2</span>
              </header>
              <section className="flex items-center justify-between mt-4">
                <div className="block">
                  <dt className="sr-only">Users</dt>
                  <dd className="flex justify-start -space-x-1.5">
                    <a href="#" className="inline-block -ml-1">
                      <img className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/14.jpg" alt="avatar" loading="lazy" />
                    </a>
                    <a href="#" className="inline-block -ml-1">
                      <img className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/men/15.jpg" alt="avatar" loading="lazy" />
                    </a>
                  </dd>
                </div>
                <button className="flex justify-center items-center rounded-full w-6 h-6 transition-colors duration-300 bg-rose-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="m11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"></path></svg>
                </button>
              </section>
            </article>
          </div>
          <article className="border shadow-sm break-inside flex flex-col justify-between rounded-md p-3 text-sm bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900">
            <header className="flex items-center justify-between">
              <span className="h-6 px-2 text-xs font-semibold rounded-md flex items-center justify-center bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300">NEW</span>
              <button className="inline-flex items-center justify-center w-7 h-7 transition-all rounded-full hover:bg-gray-100 dark:hover:bg-gray-900">
                <svg width="28" height="28" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                </svg>
              </button>
            </header>
            <section className="mt-3">
              <h2 className="text-lg font-bold leading-6">Authors of the week</h2>
              <p className="text-xs mt-1 text-gray-500">2 days ago</p>
            </section>
            <div className="flex items-center justify-between mt-auto">
              <div className="block">
                <dt className="sr-only">Users</dt>
                <dd className="flex justify-start -space-x-1.5">
                  <a href="#" className="inline-block -m-1">
                    <img className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/48.jpg" alt="avatar" loading="lazy" />
                  </a>
                  <a href="#" className="inline-block -m-1">
                    <img className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/men/15.jpg" alt="avatar" loading="lazy" />
                  </a>
                  <a href="#" className="inline-block -m-1">
                    <img className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/37.jpg" alt="avatar" loading="lazy" />
                  </a>
                </dd>
              </div>
              <button className="rounded-full flex items-center justify-center w-8 h-8 transition-all hover:bg-gray-100 dark:hover:bg-gray-900">
                <svg width="16" height="16" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                </svg>
              </button>
            </div>
          </article>
        </section>

        <article className='relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='relative w-full h-full flex flex-col justify-between min-h-[24rem] bg-[#3400de] text-white'>
            <img
              src="https://images.pexels.com/photos/7586585/pexels-photo-7586585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Los Muertos Crew"
              data-author-profile="https://www.pexels.com/es-es/@cristian-rojas/"
              className='object-cover w-full h-full absolute top-0 left-0'
              alt='Cover'
              loading='lazy'
            />
            <div className='flex flex-col justify-between absolute left-0 top-0 z-10 w-full h-full p-4'>
              <div className='flex items-center justify-between flex-none'>
                <button className='flex flex-none items-center justify-center rounded-full w-7 h-7 bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M15 18l-6-6 6-6' />
                  </svg>
                </button>
                <div className='flex items-center space-x-2'>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                    </svg>
                  </button>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                      <circle cx='12' cy='12' r='1' />
                      <circle cx='12' cy='5' r='1' />
                      <circle cx='12' cy='19' r='1' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='grid text-left gap-1'>
                <h1 className='text-xs'>Best Remixes</h1>
                <h2 className='w-full max-w-[10rem] leading-6 font-bold text-lg text-white'>The saxophone of the 80s</h2>
              </div>
            </div>
          </div>
          <div className='w-full relative'>
            <button className='absolute -top-10 right-6 rounded-full w-12 h-12 flex items-center justify-center z-10 bg-violet-600 text-white ring-4 ring-white dark:ring-gray-950'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
                <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
              </svg>
            </button>
            <div className='flex w-full flex-col px-4'>
              <h2 className='font-semibold text-gray-500'>Playlist</h2>
              <div className='flex flex-col mt-4'>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full'>
                      <img src='https://images.pexels.com/photos/228842/pexels-photo-228842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>Sultans Of Swing</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Dire Straits</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all bg-violet-600 text-white'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full border-4 ring-2 ring-white border-violet-600'>
                      <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/50'>
                        <button>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                            <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
                          </svg>
                        </button>
                      </div>
                      <img src='https://images.pexels.com/photos/9980327/pexels-photo-9980327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-9 h-9' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>It Feel So Good</h5>
                      <p className='text-white/80'>Sonique</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full'>
                      <img src='https://images.pexels.com/photos/8191522/pexels-photo-8191522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>A Girl Like You</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Edwin Collins</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full'>
                      <img src='https://images.pexels.com/photos/13580690/pexels-photo-13580690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>Sick and Tired</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Anastacia</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className='relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='absolute bottom-0 left-0 w-full z-10'>
            <div className='flex flex-col rounded-t-3xl p-4 backdrop-blur-sm bg-black/70 text-white'>
              <div className='absolute left-1/2 -translate-x-1/2 w-11 h-1 cursor-n-resize rounded-lg bg-white' />
              <div className='flex items-center justify-between text-left'>
                <div className='mt-5'>
                  <h1 className='font-semibold text-base'>Sultans Of Swing</h1>
                  <p>Dire Straits</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <button className='flex flex-none items-center justify-center rounded-full w-10 h-10 transition-colors duration-300 hover:bg-white/10'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' stroke='white' strokeWidth='2' width='18' height='18'>
                      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-between space-x-4 mt-4'>
                <span className='font-medium'>03:34</span>
                <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-[#ffffff53]'>
                  <div className='absolute rounded-full left-0 w-1/2 h-full bg-[#fcfcfc]' />
                </div>
                <span className='font-medium'>08:14</span>
              </div>
              <div className='flex justify-between items-center mt-3'>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-10 h-10 transition-all bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                    <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='relative w-full h-full flex flex-col justify-between min-h-[24rem] bg-[#3400de] text-white'>
            <img
              src="https://images.pexels.com/photos/14774012/pexels-photo-14774012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Diego Torrijos"
              data-author-profile="https://www.pexels.com/es-es/@diego-torrijos-393934430/"
              className='object-cover w-full h-full absolute top-0 left-0'
              alt='Cover'
              loading='lazy'
            />
            <div className='flex flex-col justify-between absolute left-0 top-0 z-10 w-full h-full p-4'>
              <div className='flex items-center justify-between flex-none'>
                <button className='flex flex-none items-center justify-center rounded-full w-7 h-7 bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M15 18l-6-6 6-6' />
                  </svg>
                </button>
                <div className='flex items-center space-x-2'>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                    </svg>
                  </button>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                      <circle cx='12' cy='12' r='1' />
                      <circle cx='12' cy='5' r='1' />
                      <circle cx='12' cy='19' r='1' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='grid text-left gap-1'>
                <h1 className='text-xs'>Best Remixes</h1>
                <h2 className='w-full max-w-[10rem] leading-6 font-bold text-xl text-white'>The selection of the best remixes of the year</h2>
              </div>
            </div>
          </div>
          <div className='w-full relative'>
            <button className='absolute -top-10 right-6 rounded-full w-12 h-12 flex items-center justify-center bg-emerald-600 text-white ring-4 ring-white dark:ring-gray-950'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
                <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
              </svg>
            </button>
            <div className='flex w-full flex-col px-4'>
              <h2 className='font-semibold text-gray-500'>Playlist</h2>
              <div className='flex flex-col mt-4'>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-md'>
                      <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/50'>
                        <button>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                            <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                          </svg>
                        </button>
                      </div>
                      <img src='https://images.pexels.com/photos/228842/pexels-photo-228842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-medium'>Sultans Of Swing</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Dire Straits</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all bg-slate-100 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-md'>
                      <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/50'>
                        <button>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                            <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
                          </svg>
                        </button>
                      </div>
                      <img src='https://images.pexels.com/photos/9980327/pexels-photo-9980327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-medium'>It Feel So Good</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Sonique</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#00dfa7' stroke='#00dfa7' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-md'>
                      <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/50'>
                        <button>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                            <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                          </svg>
                        </button>
                      </div>
                      <img src='https://images.pexels.com/photos/8191522/pexels-photo-8191522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-medium'>A Girl Like You</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Edwin Collins</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-md'>
                      <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/50'>
                        <button>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                            <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                          </svg>
                        </button>
                      </div>
                      <img src='https://images.pexels.com/photos/13580690/pexels-photo-13580690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-medium'>Sick and Tired</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Anastacia</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className='relative flex items-center justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='relative'>
            <div className='flex flex-col justify-between gap-2 absolute bottom-0 left-0 w-full h-full p-4 bg-gradient-to-t from-black to-transparent text-white'>
              <div className='w-full flex items-center justify-between'>
                <span className='inline-flex items-center rounded-sm text-xs py-0.5 px-1.5 text-black bg-white'>April, 2018 </span>
                <button className='flex-none flex justify-center items-center rounded-full transition-colors duration-300 w-10 h-10 hover:bg-white/10 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52l.01.011zm3.038 13.41l.465.59zM13.47 8.03a.75.75 0 1 0 1.06-1.06zM9.426 18.322C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zM11.47 6.032l2 1.998l1.06-1.06l-2-2z"></path></svg>
                </button>
              </div>
              <div className='flex items-center flex-row justify-between'>
                <div className='grid mr-auto'>
                  <span>Music</span>
                  <h3 className='font-semibold text-base'>Cameron Williamson</h3>
                </div>
                <button className='flex-none flex justify-center items-center rounded-full w-8 h-8 transition-colors bg-white text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26"><path fill="currentColor" d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></path></svg>
                </button>
              </div>
            </div>
            <img
              src='https://images.pexels.com/photos/8041064/pexels-photo-8041064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              data-author='ANTONI SHKRABA production'
              data-author-profile='https://www.pexels.com/es-es/@anthonyshkraba-production/'
              className='object-cover w-full'
              loading="lazy"
            />
          </div>
        </article>

        <article className='relative flex items-center flex-col justify-between gap-4 border shadow-sm break-inside rounded-lg mb-3 text-sm overflow-hidden bg-white dark:bg-gray-950 dark:text-white dark:border-gray-900'>
          <div className='absolute bottom-0 left-0 w-full z-20'>
            <div className='flex flex-col rounded-t-3xl p-4 backdrop-blur-sm bg-black/80 text-white'>
              <div className='absolute left-1/2 -translate-x-1/2 w-11 h-1 cursor-n-resize rounded-lg bg-white' />
              <div className='flex items-center justify-between text-left'>
                <div className='mt-5'>
                  <h1 className='font-semibold text-base'>Sultans Of Swing</h1>
                  <p>Dire Straits</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <button className='flex flex-none items-center justify-center rounded-full w-10 h-10 transition-colors duration-300 hover:bg-white/10'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' stroke='white' strokeWidth='2' width='18' height='18'>
                      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-between space-x-4 mt-4'>
                <span className='font-medium'>03:34</span>
                <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-[#ffffff53]'>
                  <div className='absolute rounded-full left-0 w-1/2 h-full bg-[#fcfcfc]' />
                </div>
                <span className='font-medium'>08:14</span>
              </div>
              <div className='flex justify-between items-center mt-3'>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-10 h-10 transition-all bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                    <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/10'>
                  <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
              <div className='mt-4 space-y-4'>
                <section className='flex items-center justify-between'>
                  <span className='text-base font-semibold'>Recommended</span>
                </section>
                <section className='w-full grid grid-cols-3 gap-2'>
                  <div className='flex flex-col gap-1'>
                    <img
                      src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Yan Krukau"
                      data-author-profile="https://www.pexels.com/es-es/@yankrukov/"
                      alt="Cover"
                      className='w-full object-cover rounded'
                    />
                    <div className='w-full'>
                      <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                      <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <img
                      src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="ANTONI SHKRABA production"
                      data-author-profile="https://www.pexels.com/es-es/@anthonyshkraba-production/"
                      alt="Cover"
                      className='w-full object-cover rounded'
                    />
                    <div className='w-full'>
                      <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                      <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <img
                      src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      data-author="Anna Pou"
                      data-author-profile="https://www.pexels.com/es-es/@anna-pou/"
                      alt="Cover"
                      className='w-full object-cover rounded'
                    />
                    <div className='w-full'>
                      <h4 className='truncate text-xs font-semibold'>The saxo of the 80s</h4>
                      <p className='truncate text-xs'>Yan Krukau and Pavel</p>
                    </div>
                  </div>
                </section>
                <section className='flex items-center justify-between'>
                  <span className='text-base font-semibold'>Recommended artists</span>
                </section>
                <section className="grid grid-cols-4 gap-3 mb-3">
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/76.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Jhon</h2>
                  </button>
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/76.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Tina</h2>
                  </button>
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/78.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Jhonas</h2>
                  </button>
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/79.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Mathiaz</h2>
                  </button>
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/16.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Fabio</h2>
                  </button>
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/46.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Miller</h2>
                  </button>
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/86.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Jessy</h2>
                  </button>
                  <button className="w-full grid place-items-center text-white">
                    <img className="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/36.jpg" alt="avatar" loading="lazy" />
                    <h2 className="text-xs font-medium mt-1">Jack</h2>
                  </button>
                </section>
              </div>
            </div>
          </div>
          <div className='relative w-full h-full flex flex-col justify-between min-h-[24rem] bg-[#3400de] text-white'>
            <img
              src="https://images.pexels.com/photos/12151147/pexels-photo-12151147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="Fabian Rubilar"
              data-author-profile="https://www.pexels.com/es-es/@fabian-rubilar-72154136/"
              className='object-cover w-full h-full absolute top-0 left-0'
              alt='Cover'
              loading='lazy'
            />
            <div className='flex flex-col justify-between absolute left-0 top-0 z-10 w-full h-full p-4'>
              <div className='flex items-center justify-between flex-none'>
                <button className='flex flex-none items-center justify-center rounded-full w-7 h-7 bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M15 18l-6-6 6-6' />
                  </svg>
                </button>
                <div className='flex items-center space-x-2'>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                    </svg>
                  </button>
                  <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-white/20'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                      <circle cx='12' cy='12' r='1' />
                      <circle cx='12' cy='5' r='1' />
                      <circle cx='12' cy='19' r='1' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='grid text-left gap-1'>
                <h1 className='text-xs'>Best Remixes</h1>
                <h2 className='w-full max-w-[10rem] leading-6 font-bold text-lg text-white'>The saxophone of the 80s</h2>
              </div>
            </div>
          </div>
          <div className='w-full relative'>
            <button className='absolute -top-10 right-6 rounded-full w-12 h-12 flex items-center justify-center z-10 bg-violet-600 text-white ring-4 ring-white dark:ring-gray-950'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
                <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
              </svg>
            </button>
            <div className='flex w-full flex-col px-4'>
              <h2 className='font-semibold text-gray-500'>Playlist</h2>
              <div className='flex flex-col mt-4'>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full'>
                      <img src='https://images.pexels.com/photos/228842/pexels-photo-228842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>Sultans Of Swing</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Dire Straits</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all bg-violet-600 text-white'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full border-4 ring-2 ring-white border-violet-600'>
                      <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center text-white bg-black/50'>
                        <button>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='20' height='20'>
                            <path fillRule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clipRule='evenodd' />
                          </svg>
                        </button>
                      </div>
                      <img src='https://images.pexels.com/photos/9980327/pexels-photo-9980327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-9 h-9' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>It Feel So Good</h5>
                      <p className='text-white/80'>Sonique</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full'>
                      <img src='https://images.pexels.com/photos/8191522/pexels-photo-8191522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>A Girl Like You</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Edwin Collins</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between -mx-4 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-900'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative overflow-hidden rounded-full'>
                      <img src='https://images.pexels.com/photos/13580690/pexels-photo-13580690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Cover' className='object-cover w-11 h-11' />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>Sick and Tired</h5>
                      <p className='text-gray-500 dark:text-gray-400'>Anastacia</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>
                    </button>
                    <button className='flex flex-none items-center justify-center rounded-full p-1'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <circle cx='12' cy='12' r='1' />
                        <circle cx='12' cy='5' r='1' />
                        <circle cx='12' cy='19' r='1' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  )
}