/**
 * 简体中文文案（基准字典）。
 *
 * 其它语种以此结构为准，键名与层级保持一致：
 * 新增或修改文案时先改这里，再同步到 en / es / de / fr / ru。
 */
const zh = {
  meta: {
    title: 'IIEAO — 去中心化个人内容节点',
    description:
      'IIEAO 是一个安全保存、发送、验证和恢复个人文件的本地内容节点，同时兼容 IPFS。',
    ogDescription: '你的内容，你的节点，去中心化的个人存储实现。',
    twitterDescription: '去中心化的个人存储实现。',
  },

  brand: {
    tagline: '去中心化内容节点',
  },

  a11y: {
    homeLabel: 'IIEAO 首页',
    mainNav: '主导航',
    openMenu: '打开导航菜单',
    closeMenu: '关闭导航菜单',
    heroVisual: 'IIEAO 产品界面',
    dashboardAlt: 'IIEAO 控制面板',
    languageSwitch: '切换界面语言',
    languageMenuLabel: '界面语言',
  },

  nav: {
    why: '核心理念',
    how: '技术架构',
    abilities: '产品能力',
    vision: '发展路线',
  },

  header: {
    download: '下载',
    explore: '探索产品',
  },

  mobileNav: {
    download: '下载客户端',
    repo: '开源代码库',
  },

  hero: {
    eyebrow: 'LOCAL-FIRST · CONTENT NODE',
    titleLine1: '构建个人数据',
    titleLine2: '主权基础设施。',
    lead: 'IIEAO 将分散的存储与传输协议整合为统一的本地内容节点，通过内容寻址、可验证传输与多协议路由，让用户真正拥有数据的控制权与可追溯性。',
    download: '下载客户端',
    architecture: '查看技术架构',
    repo: '开源代码库',
    proofs: ['本地优先架构', '可验证传输', 'IPFS 生态兼容'],
    windowTitle: 'IIEAO · LOCAL NODE',
    dashboardAlt: 'IIEAO 控制面板',
    statusTitle: '节点运行中',
    statusSub: '内容传输路径已建立',
    scroll: 'SCROLL TO DISCOVER',
  },

  why: {
    kicker: 'THE CHALLENGE',
    titleLine1: '数据托管之后，',
    titleLine2: '用户失去了什么？',
    lead: '传统云存储模式下，用户对数据的控制权止于上传操作。IIEAO 致力于重构这一范式，让数据主权回归用户。',
    items: [
      {
        n: '01',
        title: '全程可追溯的传输路径',
        text: '每一次数据流转都拥有清晰的传输轨迹，从本地副本到节点状态，让内容流动透明可控。',
      },
      {
        n: '02',
        title: '密码学级的完整性验证',
        text: '基于内容寻址与哈希校验的分享机制，确保接收端获得的数据与源端完全一致。',
      },
      {
        n: '03',
        title: '架构级的容错与恢复',
        text: '多副本治理、增量备份与可验证恢复构成完整的数据生命周期管理体系。',
      },
    ],
    manifesto: {
      lead: '真正的',
      strong: '数据所有权',
      text: '，\n不仅是能够下载，更是能够追溯、验证，\n并在必要时完整恢复。',
      signature: 'IIEAO · INFRASTRUCTURE FOR DATA SOVEREIGNTY',
    },
  },

  how: {
    kicker: 'TECHNICAL ARCHITECTURE',
    title: '意图驱动的智能路由层。',
    lead: 'IIEAO 将协议复杂性封装于路由引擎，向用户暴露语义化的传输接口。',
    source: { title: '内容源', sub: '文件 · 目录 · 数据流' },
    core: { title: 'IIEAO', sub: '协议路由引擎' },
    delivery: { title: '可验证交付', sub: '传输 · 存储 · 恢复' },
    protocols: [
      { role: '点对点直连协议', desc: '利用 NAT 穿透与 Relay 机制建立设备间最优传输路径。' },
      { role: '分布式分片传输', desc: '将大文件切分为可并行传输的数据块，多源协同高效送达。' },
      { role: '可验证区间恢复', desc: '基于 Merkle 树的增量恢复机制，精确重建缺失数据片段。' },
      { role: '生态互操作层', desc: '兼容 IPFS 网络协议栈，打通去中心化存储生态系统。' },
    ],
    status: 'INTEGRATED',
    human: {
      userLabel: '用户视角',
      userQuote: '“将此文件安全传输至目标节点”',
      systemLabel: '系统执行',
      systemText: '路径发现 · 协议选择 · 完整性校验 · 状态同步',
    },
  },

  abilities: {
    kicker: 'CORE CAPABILITIES',
    titleLine1: '覆盖内容全生命周期的',
    titleLine2: '系统化管理能力。',
    lead: '从内容标识生成到跨节点传输，从完整性验证到副本治理，IIEAO 提供完整的数据管理基础设施。',
    chapters: [
      {
        tag: '01 · CONTENT OWNERSHIP',
        title: '内容归属，一目了然。',
        text: 'IIEAO 通过内容寻址（CID）为每个文件建立唯一标识，实现本地优先的数据管理架构。副本分布、存储占用、健康状态均可实时查询，让内容真正掌握在用户手中。',
        alt: 'IIEAO 文件与内容管理界面',
        notes: ['内容寻址标识', '本地优先架构', '副本透明管理'],
      },
      {
        tag: '02 · VERIFIED DELIVERY',
        title: '可验证的传输协议。',
        text: '生成加密分享凭证时，系统会附带内容哈希、版本信息与网络拓扑。接收方在接受传输前可完成来源验证、完整性预检与存储空间评估——关键数据的交付需要工程级的可靠性保障。',
        alt: 'IIEAO 发送与接收界面',
        notes: ['加密分享凭证', '完整性预检', '哈希校验机制'],
      },
      {
        tag: '03 · MANY PATHS, ONE INTENT',
        title: '智能路由，协议无感。',
        text: '用户只需声明传输意图，IIEAO 会根据网络拓扑、内容大小与节点状态自动选择最优协议组合：点对点直连、多源分片协作、IPFS 网关发布或可验证区间恢复，让复杂性被系统吸收。',
        alt: 'IIEAO Swarm 多源传输界面',
        notes: ['自适应路由', '多协议融合', '传输状态可观测'],
      },
      {
        tag: '04 · RECOVERABLE BY DESIGN',
        title: '数据韧性，设计为先。',
        text: '备份不是事后补救，而是系统的内生能力。加密私密空间、增量快照、Merkle 树验证与副本策略治理构成完整的数据韧性架构，让重要内容始终拥有可追溯的恢复路径。',
        alt: 'IIEAO 备份与存储治理界面',
        notes: ['端到端加密', '增量备份快照', '副本策略治理'],
      },
    ],
  },

  people: {
    kicker: 'FOR EVERYONE',
    titleLine1: '专业级的基础设施，',
    titleLine2: '消费级的使用体验。',
    items: [
      {
        label: '内容创作者',
        title: '建立作品的可验证出处链。',
        text: '管理创作素材、分发最终成品、保留内容标识与版本历史。',
      },
      {
        label: '协作团队',
        title: '突破大文件传输的带宽瓶颈。',
        text: '利用多源协作与点对点直连，在复杂网络环境中实现高效传输。',
      },
      {
        label: '个人用户',
        title: '建立私有的数据韧性体系。',
        text: '端到端加密、增量备份与可验证恢复构成完整的数据保护方案。',
      },
      {
        label: '协议开发者',
        title: '统一的去中心化协议接入层。',
        text: '在单一界面中集成 Iroh、Swarm、AVRS 与 IPFS 协议栈。',
      },
    ],
  },

  proof: {
    kicker: 'TRANSPARENCY BY DESIGN',
    titleLine1: '可观测性是',
    titleLine2: '系统可靠性的基石。',
    lead: '节点健康度、网络拓扑、内容副本分布、传输进度与命名发布状态均以结构化方式呈现。透明性本身即是安全性的重要维度。',
    points: ['本地安全边界', '节点实时遥测', '结构化存储元数据'],
    imageAlt: 'IIEAO 本地传输界面',
    miniCard: {
      title: 'Iroh 传输层',
      sub: '直连优先 · Relay 可达',
      status: '运行中',
    },
  },

  vision: {
    kicker: 'ROADMAP',
    titleLine1: '从个人节点，',
    titleLine2: '到个人数据主权网络。',
    lead: 'IIEAO 的长期愿景是构建一个由用户主权节点组成的去中心化内容网络，让数据所有权、可移植性与互操作性成为基础设施的内生属性。',
    items: [
      {
        label: '当前阶段',
        title: '统一的本地内容节点',
        text: '集成多协议传输、内容寻址存储、可验证恢复与副本治理于单一桌面应用。',
      },
      {
        label: '下一里程碑',
        title: '跨设备的可信内容网络',
        text: '通过设备间的加密通道与信任机制，让内容在个人设备网络中无缝流动。',
      },
      {
        label: '长期愿景',
        title: '用户主权的数据基础设施',
        text: '身份可迁移、内容可移植、历史可追溯——数据主权真正归属于创造它的人。',
      },
    ],
  },

  closing: {
    kicker: 'LOCAL-FIRST · VERIFIABLE · SOVEREIGN',
    titleLine1: '下一代互联网基础设施，',
    titleLine2: '从重构数据主权开始。',
    lead: '从今天开始构建属于你的去中心化内容节点，让数据真正掌握在自己手中。',
    download: '下载客户端',
    explore: '探索 IIEAO',
    backToTop: '返回顶部',
  },

  footer: {
    description: '为数据所有权、内容可追溯性与长期可访问性而设计。',
    copyright: '© 2025 IIEAO. 为数据主权而构建的基础设施。',
  },

  downloads: {
    title: '下载 IIEAO 桌面客户端',
    desc: (version: string) =>
      `选择你的系统，获取最新版本 v${version}。安装包由 Cloudflare R2 直链分发。`,
    close: '关闭下载面板',
    groupCount: (count: number) => `${count} 个安装包`,
    recommended: '推荐',
    action: '下载',
    footNote: '直链下载不经过第三方中转',
    repoLink: '查看开源代码',
    targets: {
      'windows-setup': {
        title: 'Windows 安装程序',
        note: 'x64 系统 · 引导式安装，自动创建快捷方式',
      },
      'windows-msi': {
        title: 'Windows 安装包',
        note: 'x64 系统 · 适合批量部署与静默安装',
      },
      'macos-dmg': {
        title: 'macOS 磁盘映像',
        note: 'Intel 芯片 · 拖入「应用程序」即可安装',
      },
    },
  },
};

export default zh;
