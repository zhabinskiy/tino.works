interface CardProps {
  link: string
  title: string
  children: React.ReactNode
}

export default function Card(prop: CardProps) {
  const { link, title, children } = prop

  return (
    <a
      href={link}
      target="_blank"
      className="inline-block p-5 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition duration-150 active:border-zinc-300 active:bg-zinc-100"
    >
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed tracking-wide">
        {children}
      </p>
    </a>
  )
}
