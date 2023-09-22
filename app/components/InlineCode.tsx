export default function InlineCode({ children }: { children: string }) {
  return (
    <span className="font-mono bg-zinc-100 px-1 py-1 text-zinc-600 rounded-sm">
      {children}
    </span>
  )
}
