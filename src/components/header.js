import AppLogo from './app-logo'
import ThemeSwitch from './theme-switch'

export default function Header () {
  return (
    <header className='fixed z-40 top-0 left-0 w-full flex items-center justify-between py-6 bg-gradient-to-b from-white/30 to-transparent backdrop-blur-sm dark:from-black/30'>
      <div className='w-full flex items-center justify-between px-6'>
        <AppLogo />
        <ThemeSwitch />
      </div>
    </header>
  )
}