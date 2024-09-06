import AppLogo from './app-logo'
import ThemeSwitch from './theme-switch'

export default function Header () {
  return (
    <header className='px-6 w-full flex items-center justify-between py-6'>
      <AppLogo />
      <ThemeSwitch />
    </header>
  )
}