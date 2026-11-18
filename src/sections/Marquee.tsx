const items = [
  '品牌视觉',
  '编辑设计',
  '动态海报',
  '摄影',
  '插画',
  '新媒体艺术',
  '内容创作',
]

function Strip({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((t) => (
        <span
          key={t}
          className="flex items-center text-sm font-medium tracking-widest"
        >
          <span className="px-6">{t}</span>
          <span className="text-primary">✳︎</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border py-4">
      <div className="animate-marquee flex w-max">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  )
}
