export default function Intro() {
  return (
    <section id="intro" className="sm:mr-24 mb-16 mt-16">
      <img
        src="https://pbs.twimg.com/profile_images/1742709434902523904/bSNxSzIG_400x400.jpg"
        width={64}
        height={64}
        alt="Tino Zhabinskiy"
        className="mb-8 rounded-full"
      />
      <p className="mb-4 leading-relaxed">
        <span className="font-semibold">Tino Zhabinskiy&nbsp;</span>(
        <a href="mailto:hey@tino.works" className="border-b border-zinc-700">
          hey@tino.works
        </a>
        )
      </p>
      <p className="mb-4 leading-relaxed">
        Tools: Cinema 4D, Redshift, Octane, Houdini, Blender, After Effects,
        ZBrush, Substance Painter, Marvelous Designer.
      </p>
      <p className="mt-12 pt-12 border-t border-zinc-300 text-zinc-500 leading-relaxed">
        While I&apos;m working on the updated version of my site, you can check my latest works on <a href="https://dribbble.com/0x_tino" target="_blank" className="border-b border-zinc-700 text-zinc-900">Dribbble</a> or follow me on <a href="https://twitter.com/0x_tino" target="_blank" className="border-b border-zinc-700 text-zinc-900">Twitter</a>.
      </p>
    </section>
  )
}
