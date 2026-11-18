const tags = ['品牌设计', '编辑排版', '动态设计', '插画', '摄影', '文案策划']

export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">关于</h2>
        </div>
        <div className="md:col-span-8">
          <p className="max-w-[65ch] text-lg leading-relaxed text-foreground md:text-xl">
            我是卓辰，一名视觉设计师和内容创作者。相信好设计不是装饰，
            而是把复杂的信息讲成一个让人愿意看完的故事。
            平时画画、拍照、写点东西，最近在研究怎么和 AI 一起工作 ——
            这个网站就是成果之一。
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
