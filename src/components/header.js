import AppLogo from './app-logo'
import ThemeSwitch from './theme-switch'

export default function Header () {
  return (
    <header className='fixed z-40 top-0 left-0 w-full flex items-center justify-between py-4'>
      <div className='w-full flex items-center justify-between px-6'>
        <AppLogo />
        <ThemeSwitch />
      </div>
    </header>
  )
}