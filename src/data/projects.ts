export interface Project {
  id: string
  title: string
  category: string
  year: string
  description: string
  cover: { from: string; to: string; mark: string }
}

export const projects: Project[] = [
  {
    id: 'neon-night',
    title: '霓虹夜市',
    category: '品牌视觉',
    year: '2026',
    description:
      '为一个深夜美食市集做的整套品牌视觉。从招牌字体到摊位导视，把市井烟火气和赛博霓虹揉在一起，让「逛夜市」这件事变得又旧又新。',
    cover: { from: '#1a0b2e', to: '#ff2e88', mark: '霓' },
  },
  {
    id: 'mountain-zine',
    title: '山河志',
    category: '编辑设计',
    year: '2025',
    description:
      '一本关于徒步与山野的独立杂志创刊号。大量留白、手工感的网格和粗粝的黑白照片，试图在纸面上还原山里的风和安静。',
    cover: { from: '#0e2415', to: '#8fbf6a', mark: '山' },
  },
  {
    id: 'pixel-echo',
    title: '像素回声',
    category: '动态海报',
    year: '2025',
    description:
      '为独立音乐节设计的动态海报系列。8-bit 像素颗粒随音乐节拍跳动、碎裂、重组，复古游戏美学撞上现场音乐。',
    cover: { from: '#101d42', to: '#41b3ff', mark: '回' },
  },
  {
    id: 'fog-views',
    title: '雾中风景',
    category: '摄影系列',
    year: '2024',
    description:
      '连续三个冬天在清晨拍下的城市。雾把熟悉的地标变成陌生的剪影，这个系列记录的是「看不清」本身的美感。',
    cover: { from: '#2b2d30', to: '#9aa5ad', mark: '雾' },
  },
  {
    id: 'daily-doodle',
    title: '一日一画',
    category: '插画项目',
    year: '2024',
    description:
      '坚持了一整年的自我练习：每天一幅小画，主题不限。365 张画最后拼成一面墙，见证了手感和想法的缓慢生长。',
    cover: { from: '#3d1a04', to: '#ffb347', mark: '画' },
  },
  {
    id: 'city-slices',
    title: '城市切片',
    category: '新媒体艺术',
    year: '2023',
    description:
      '把城市监控画面、街景和人流数据切片重组的生成艺术实验。每一块「切片」都是城市某一秒的心跳。',
    cover: { from: '#23074d', to: '#cc5333', mark: '切' },
  },
]
