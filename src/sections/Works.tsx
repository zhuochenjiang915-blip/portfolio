import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { projects, type Project } from '@/data/projects'

function Cover({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{
        background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
      }}
    >
      <span
        aria-hidden="true"
        className="absolute -bottom-6 -right-2 select-none text-[7rem] font-bold leading-none text-white/25"
      >
        {project.cover.mark}
      </span>
    </div>
  )
}

export default function Works() {
  const [active, setActive] = useState<Project | null>(null)
  const [open, setOpen] = useState<Project | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = previewRef.current
    if (!el) return
    el.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 110}px)`
  }

  return (
    <section id="works" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">作品</h2>
        <p className="text-sm text-muted-foreground">2023 — 2026</p>
      </div>

      <div onMouseMove={onMouseMove} onMouseLeave={() => setActive(null)}>
        <ul>
          {projects.map((p, i) => (
            <li key={p.id} className="border-t border-border last:border-b">
              <button
                type="button"
                onClick={() => setOpen(p)}
                onMouseEnter={() => setActive(p)}
                onFocus={() => setActive(p)}
                onBlur={() => setActive(null)}
                className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-[3rem_1fr_auto_auto_2rem] md:gap-6 md:py-7"
              >
                <span className="text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xl font-bold tracking-tight transition-all group-hover:translate-x-2 group-hover:text-primary md:text-3xl">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground md:hidden">
                    {p.category} · {p.year}
                  </span>
                </span>
                <span className="hidden text-sm text-muted-foreground md:block">
                  {p.category}
                </span>
                <span className="hidden text-sm text-muted-foreground md:block">
                  {p.year}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  aria-hidden="true"
                />
              </button>
              {/* 移动端直接在列表里展示封面 */}
              <Cover project={p} className="mb-5 h-40 w-full lg:hidden" />
            </li>
          ))}
        </ul>

        {/* 桌面端跟随光标的悬浮封面预览 */}
        <div
          ref={previewRef}
          aria-hidden="true"
          className={`pointer-events-none fixed left-0 top-0 z-30 hidden h-48 w-72 transition-opacity duration-200 lg:block ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {active && <Cover project={active} className="h-full w-full shadow-2xl" />}
        </div>
      </div>

      {/* 点击行打开项目详情 */}
      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-lg border-border bg-card p-0">
          {open && (
            <>
              <Cover project={open} className="h-56 w-full" />
              <DialogHeader className="p-6 text-left">
                <DialogTitle className="text-2xl font-bold tracking-tight">
                  {open.title}
                </DialogTitle>
                <p className="text-sm text-primary">
                  {open.category} · {open.year}
                </p>
                <DialogDescription className="pt-2 text-base leading-relaxed text-muted-foreground">
                  {open.description}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
