import { ArrowDown } from 'lucide-react'

function Asterisk({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
      strokeLinecap="round"
    >
      <path d="M50 8v84M8 50h84M20 20l60 60M80 20L20 80" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden px-5 pt-16 md:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <p className="mb-6 text-sm tracking-[0.3em] text-muted-foreground">
          视觉设计师 · 内容创作者
        </p>
        <h1 className="font-bold leading-[0.9] tracking-tight">
          <span className="block text-[18vw] md:text-[10rem]">ZHUO</span>
          <span className="text-outline block text-[18vw] md:text-[10rem]">
            CHEN
          </span>
        </h1>
        <div className="mt-8 flex max-w-xl items-start gap-4">
          <Asterisk className="animate-spin-slow mt-1 h-8 w-8 shrink-0 text-primary" />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            用图像讲故事，让设计有温度。
            <br />
            这是我的第一个 vibe coding 作品 —— 想法我来，代码 AI 写。
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-end justify-between pb-8">
        <p className="text-xs tracking-widest text-muted-foreground">
          杭州 · CHINA
        </p>
        <a
          href="#works"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          向下看作品
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
