import { ArrowUp, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-sm tracking-[0.3em] text-muted-foreground">
          有想法？聊聊
        </p>
        <a
          href="https://github.com/zhuochenjiang915-blip"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex items-center gap-3 text-4xl font-bold tracking-tight transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-6xl"
        >
          <Github className="h-8 w-8 md:h-12 md:w-12" aria-hidden="true" />
          来 GitHub 找我
        </a>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>© 2026 Zhuo Chen · 和 Kimi 一起 vibe 出来的第一个网站</p>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            回到顶部
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
