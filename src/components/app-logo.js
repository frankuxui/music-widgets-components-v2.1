import Link from 'next/link'

export default function AppLogo () {
  return (
    <div>
      <Link href="/" className="px-4 h-10 rounded inline-flex items-center justify-center font-semibold bg-black/10 backdrop-blur-md dark:bg-white/10">Music Widgets Components</Link>
    </div>
  )
}
