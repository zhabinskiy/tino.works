export default function About() {
  return (
    <section id="about" className="mr-24 mb-28 mt-16">
      <p className="mb-4 leading-relaxed">
        Hey there! I'm <span className="font-semibold">Tino</span>, a tech-savvy
        curious <span className="font-semibold">designer</span>, and an{' '}
        <span className="font-semibold">engineer</span> that deeply cares about
        aesthetics and experience. Love to tinker with code and build stuff.
      </p>
      <p className="mb-8 leading-relaxed">Father of two. Dog owner. Gamer.</p>
      <a
        href="https://icons8.com"
        target="_blank"
        className="relative inline-flex items-center text-sm text-zinc-500 py-2 rounded-md hover:text-zinc-600 hover:underline hover:underline-offset-2 active:scale-95 transition duration-150"
      >
        <span className="absolute -left-4 w-1.5 h-1.5 rounded-full mr-3 bg-green-500" />
        Currently: Technical 3D Lead at Icons8{' '}
        <span className="inline-block">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0 w-3 h-3 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            ></path>
          </svg>
        </span>
      </a>
    </section>
  )
}
