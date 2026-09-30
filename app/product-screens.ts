export const productCategories = [
  '全部',
  '节点与内容',
  '设备与传输',
  '生态与诊断',
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type ProductScreen = {
  id: string;
  title: string;
  english: string;
  category: Exclude<ProductCategory, '全部'>;
  description: string;
  tags: string[];
  width: number;
  height: number;
  source: string;
  experimental?: boolean;
};

// Keep source filenames and intrinsic dimensions with the product copy so each
// supplied screenshot can be traced and refreshed without guessing its purpose.
export const productScreens: ProductScreen[] = [
  {
    id: 'dashboard',
    title: '看清节点的每一刻',
    english: 'DASHBOARD',
    category: '节点与内容',
    width: 2878,
    height: 1720,
    source: 'Screenshot 2026-09-30 201301.png',
    description:
      '在总览中查看节点健康、Kubo 运行状态与带宽变化，让日常维护从一个清晰的入口开始。',
    tags: ['节点健康', '运行状态', '带宽观测'],
  },
  {
    id: 'devices',
    title: '让自己的设备建立信任',
    english: 'TRUSTED DEVICES',
    category: '设备与传输',
    width: 2878,
    height: 1715,
    source: 'Screenshot 2026-09-30 201333.png',
    description:
      '通过配对建立可信设备关系，管理权限、心跳和选择性同步。接收端验证并保存内容后，才返回完成回执。',
    tags: ['设备配对', '权限与撤销', '选择性同步'],
  },
  {
    id: 'files',
    title: '文件之外，还有清楚的归属',
    english: 'CONTENT MANAGEMENT',
    category: '节点与内容',
    width: 2877,
    height: 1716,
    source: 'Screenshot 2026-09-30 201342.png',
    description:
      '集中浏览本地内容，搜索、标记并查看详情。内容索引与所有权记录，让文件的来源和节点副本都有据可查。',
    tags: ['内容索引', '搜索与标签', '副本管理'],
  },
  {
    id: 'storage-governance',
    title: '知道空间用在哪里',
    english: 'STORAGE GOVERNANCE',
    category: '节点与内容',
    width: 2879,
    height: 1721,
    source: 'Screenshot 2026-09-30 201356.png',
    description:
      '按内容类型查看磁盘占用，区分共享数据与可释放空间。通过回收站、清理预览和复核，管理当前节点持有的副本。',
    tags: ['容量分布', '回收站', '清理预览'],
  },
  {
    id: 'send-receive',
    title: '从一个入口，开始一次交付',
    english: 'SEND & RECEIVE',
    category: '设备与传输',
    width: 2878,
    height: 1717,
    source: 'Screenshot 2026-09-30 201409.png',
    description:
      '选择文件或目录，生成分享凭证，或粘贴凭证接收。下载前检查版本、空间、可达性和目标路径，再跟进传输状态。',
    tags: ['文件与目录', '分享凭证', '接收预检'],
  },
  {
    id: 'local-transfer',
    title: '设备之间，直接传递',
    english: 'IROH TRANSFER',
    category: '设备与传输',
    width: 2879,
    height: 1720,
    source: 'Screenshot 2026-09-30 201419.png',
    description:
      'Iroh 提供原生文件与目录传输，使用 Ticket 分享内容。查看直连或 Relay 路径，以及当前任务和传输历史。',
    tags: ['原生 Iroh', '直连 / Relay', '传输历史'],
  },
  {
    id: 'swarm',
    title: '把大文件交给多源协作',
    english: 'CLASSIC SWARM',
    category: '设备与传输',
    width: 2879,
    height: 1723,
    source: 'Screenshot 2026-09-30 201427.png',
    description:
      '通过签名清单与分块校验组织多 Provider 传输，查看分块进度，管理发布和下载会话，并支持暂停与继续。',
    tags: ['签名清单', '多源分块', '会话恢复'],
  },
  {
    id: 'avrs',
    title: '按范围传输，逐段验证',
    english: 'AVRS RANGE TRANSFER',
    category: '设备与传输',
    width: 2875,
    height: 1717,
    source: 'Screenshot 2026-09-30 201435.png',
    experimental: true,
    description:
      '围绕单一 Blob 使用 Bao / BLAKE3 验证数据范围，支持自适应调度和路径重选。真实跨网与跨重启恢复仍在验收中。',
    tags: ['范围验证', '自适应调度', '独立传输会话'],
  },
  {
    id: 'ipns',
    title: '为变化的内容保留一个名字',
    english: 'IPNS PUBLISH & RESOLVE',
    category: '生态与诊断',
    width: 2879,
    height: 1718,
    source: 'Screenshot 2026-09-30 201443.png',
    description:
      '通过 Kubo 管理 IPNS 密钥、发布与解析，让稳定的名称指向更新后的内容，并查看发布记录和兼容状态。',
    tags: ['Kubo 兼容桥', '名称发布', '解析与记录'],
  },
  {
    id: 'advanced-tools',
    title: '需要深入时，工具就在手边',
    english: 'MFS & DIAGNOSTICS',
    category: '生态与诊断',
    width: 2878,
    height: 1717,
    source: 'Screenshot 2026-09-30 201503.png',
    description:
      '在高级工具中使用 MFS、查看运行指标并导出脱敏诊断报告，为定位节点、存储和网络问题提供线索。',
    tags: ['MFS 工具', '运行指标', '脱敏诊断'],
  },
  {
    id: 'benchmarks',
    title: '让性能变化有迹可循',
    english: 'BENCHMARK HISTORY',
    category: '生态与诊断',
    width: 2447,
    height: 1472,
    source: 'Screenshot 2026-09-30 201536.png',
    description:
      '查看基准测试结果、历史记录与带宽控制。截图展示的是一次本地运行，实际表现取决于设备、内容和网络环境。',
    tags: ['基准结果', '历史对照', '带宽控制'],
  },
];

export const productImagePath = (screen: ProductScreen) =>
  `/product/${screen.id}.png`;
