import Image from 'next/image'

export default function Intro() {
  return (
    <section id="intro" className="sm:mr-24 mb-16 mt-16">
      <Image
        src="/tino.png"
        width={64}
        height={64}
        alt="Tino Zhabinskiy"
        className="mb-8"
      />
      <p className="mb-4 leading-relaxed">
        <span className="font-semibold">Tino Zhabinskiy&nbsp;</span>(
        <a href="mailto:hey@tino.works" className="border-b border-zinc-700">
          hey@tino.works
        </a>
        )
      </p>
      <p className="mb-4 leading-relaxed">
        Tools: Cinema 4D, Redshift, Octane, Blender, Houdini, After Effects,
        ZBrush, Substance Painter, Marvelous Designer.
      </p>
    </section>
  )
}
