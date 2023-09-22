import Nav from './components/Nav'
import About from './components/About'
import Code from './components/Code'
import Languages from './components/Languages'
import Motion from './components/Motion'

export default function Home() {
  return (
    <div className="relative flex flex-col items-start lg:flex-row-reverse container mx-auto w-full lg:w-2/3 xl:w-1/2 py-16 sm:py-32 lg:py-16  px-8 sm:px-12 lg:px-0">
      <Nav />
      <main className="flex flex-col flex-1 lg:pr-16">
        <About />

        <Code />

        <Languages />

        <Motion />
      </main>
      <div className="fixed top-0 z-10 bg-gradient-to-b from-white from-35% w-full h-28 -ml-4" />
    </div>
  )
}
