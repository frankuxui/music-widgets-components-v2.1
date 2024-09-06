import './globals.css'
import Header from '@/components/header'

export const metadata = {
  title: 'Music widgets components - Componentes de React para aplicaciones de música',
  description: 'Componentes de interfaz para aplicaciones de música, creados con React y Next.js. Totalmente adaptables a cualquier dispositivo, con soporte para modos claro y oscuro. Ideal para desarrollar experiencias musicales modernas y accesibles. Diseñado por Frankuxui.',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='min-h-screen w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
