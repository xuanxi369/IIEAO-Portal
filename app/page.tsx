'use client';

import Image from "next/image";
import { ArrowDown, ArrowRight, Blocks, Check, ChevronRight, CircleCheck, Code2, Database, FileCheck2, Files, KeyRound, Menu, Network, Orbit, PackageCheck, Radio, RefreshCcw, Route, Send, ShieldCheck, Sparkles, UsersRound, Waypoints, Zap, X } from "lucide-react";
import { useState, useEffect } from "react";

const outcomes = [
  { n: "01", title: "全程可追溯的传输路径", text: "每一次数据流转都拥有清晰的传输轨迹，从本地副本到节点状态，让内容流动透明可控。" },
  { n: "02", title: "密码学级的完整性验证", text: "基于内容寻址与哈希校验的分享机制，确保接收端获得的数据与源端完全一致。" },
  { n: "03", title: "架构级的容错与恢复", text: "多副本治理、增量备份与可验证恢复构成完整的数据生命周期管理体系。" },
];

const protocols = [
  { name: "IROH", role: "点对点直连协议", desc: "利用NAT穿透与Relay机制建立设备间最优传输路径。", icon: Zap },
  { name: "SWARM", role: "分布式分片传输", desc: "将大文件切分为可并行传输的数据块，多源协同高效送达。", icon: UsersRound },
  { name: "AVRS", role: "可验证区间恢复", desc: "基于Merkle树的增量恢复机制，精确重建缺失数据片段。", icon: FileCheck2 },
  { name: "IPFS / KUBO", role: "生态互操作层", desc: "兼容IPFS网络协议栈，打通去中心化存储生态系统。", icon: Network },
];

const chapters = [
  { tag: "01 · CONTENT OWNERSHIP", title: "内容归属，一目了然。", text: "IIEAO 通过内容寻址（CID）为每个文件建立唯一标识，实现本地优先的数据管理架构。副本分布、存储占用、健康状态均可实时查询，让内容真正掌握在用户手中。", image: "/product/files.png", alt: "IIEAO 文件与内容管理界面", icon: Files, notes: ["内容寻址标识", "本地优先架构", "副本透明管理"] },
  { tag: "02 · VERIFIED DELIVERY", title: "可验证的传输协议。", text: "生成加密分享凭证时，系统会附带内容哈希、版本信息与网络拓扑。接收方在接受传输前可完成来源验证、完整性预检与存储空间评估——关键数据的交付需要工程级的可靠性保障。", image: "/product/send-receive.png", alt: "IIEAO 发送与接收界面", icon: Send, notes: ["加密分享凭证", "完整性预检", "哈希校验机制"] },
  { tag: "03 · MANY PATHS, ONE INTENT", title: "智能路由，协议无感。", text: "用户只需声明传输意图，IIEAO 会根据网络拓扑、内容大小与节点状态自动选择最优协议组合：点对点直连、多源分片协作、IPFS 网关发布或可验证区间恢复，让复杂性被系统吸收。", image: "/product/swarm.png", alt: "IIEAO Swarm 多源传输界面", icon: Route, notes: ["自适应路由", "多协议融合", "传输状态可观测"] },
  { tag: "04 · RECOVERABLE BY DESIGN", title: "数据韧性，设计为先。", text: "备份不是事后补救，而是系统的内生能力。加密私密空间、增量快照、Merkle 树验证与副本策略治理构成完整的数据韧性架构，让重要内容始终拥有可追溯的恢复路径。", image: "/product/storage-governance.png", alt: "IIEAO 备份与存储治理界面", icon: RefreshCcw, notes: ["端到端加密", "增量备份快照", "副本策略治理"] },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main>
      <header className={`site-header ${headerScrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="IIEAO 首页"><Image src="/iieao-icon.png" width={38} height={38} alt="IIEAO" priority /><span><strong>IIEAO</strong><small>去中心化内容节点</small></span></a>
        <nav aria-label="主导航"><a href="#why">核心理念</a><a href="#how">技术架构</a><a href="#abilities">产品能力</a><a href="#vision">发展路线</a></nav>
        <a className="header-cta" href="#abilities">探索产品 <ArrowRight size={16} /></a>
        <button 
          className="menu" 
          aria-label={mobileMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <a href="#why" onClick={closeMobileMenu}>核心理念</a>
          <a href="#how" onClick={closeMobileMenu}>技术架构</a>
          <a href="#abilities" onClick={closeMobileMenu}>产品能力</a>
          <a href="#vision" onClick={closeMobileMenu}>发展路线</a>
          <a href="https://github.com/xuanxi369/IPFS-Desktop-Rust" target="_blank" rel="noreferrer" onClick={closeMobileMenu} style={{background: 'var(--mint)', borderColor: 'var(--teal)', color: 'var(--teal-dark)'}}>
            <Code2 size={18} /> 开源代码库
          </a>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> LOCAL-FIRST · CONTENT NODE</div>
          <h1>构建个人数据<br /><em>主权基础设施。</em></h1>
          <p className="hero-lead">IIEAO 将分散的存储与传输协议整合为统一的本地内容节点，通过内容寻址、可验证传输与多协议路由，让用户真正拥有数据的控制权与可追溯性。</p>
          <div className="hero-actions"><a className="primary" href="#how">查看技术架构 <ArrowRight size={18} /></a><a className="secondary" href="https://github.com/xuanxi369/IPFS-Desktop-Rust" target="_blank" rel="noreferrer"><Code2 size={18} /> 开源代码库</a></div>
          <div className="hero-proof"><span><i /> 本地优先架构</span><span><i /> 可验证传输</span><span><i /> IPFS 生态兼容</span></div>
        </div>
        <div className="hero-visual" aria-label="IIEAO 产品界面">
          <div className="orbit-line orbit-one" /><div className="orbit-line orbit-two" /><div className="node node-a" /><div className="node node-b" /><div className="node node-c" />
          <div className="window"><div className="window-bar"><span /><span /><span /><b>IIEAO · LOCAL NODE</b></div><Image src="/product/dashboard.png" alt="IIEAO 控制面板" width={1920} height={1080} priority /></div>
          <div className="status-card"><span className="pulse" /><div><b>节点运行中</b><small>内容传输路径已建立</small></div></div>
        </div>
        <a className="scroll-hint" href="#why"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a>
      </section>

      <section className="why section" id="why">
        <div className="section-heading"><p className="kicker">THE CHALLENGE</p><h2>数据托管之后，<br />用户失去了什么？</h2><p>传统云存储模式下，用户对数据的控制权止于上传操作。IIEAO 致力于重构这一范式，让数据主权回归用户。</p></div>
        <div className="outcome-grid">{outcomes.map((item) => <article className="outcome" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><div className="outcome-line"><i /></div></article>)}</div>
        <div className="manifesto"><div className="manifesto-mark">"</div><p>真正的<strong>数据所有权</strong>，<br />不仅是能够下载，更是能够追溯、验证，<br />并在必要时完整恢复。</p><small>IIEAO · INFRASTRUCTURE FOR DATA SOVEREIGNTY</small></div>
      </section>

      <section className="how section" id="how">
        <div className="section-heading centered light"><p className="kicker">TECHNICAL ARCHITECTURE</p><h2>意图驱动的智能路由层。</h2><p>IIEAO 将协议复杂性封装于路由引擎，向用户暴露语义化的传输接口。</p></div>
        <div className="route-stage">
          <div className="route-source route-terminal"><span className="terminal-icon"><Files /></span><b>内容源</b><small>文件 · 目录 · 数据流</small></div>
          <div className="route-wire left-wire"><i /><i /><i /></div>
          <div className="route-core"><div className="core-rings"><span /><span /></div><Image src="/iieao-icon.png" width={58} height={58} alt="" /><b>IIEAO</b><small>协议路由引擎</small></div>
          <div className="route-wire right-wire"><i /><i /><i /></div>
          <div className="route-source route-terminal"><span className="terminal-icon"><CircleCheck /></span><b>可验证交付</b><small>传输 · 存储 · 恢复</small></div>
        </div>
        <div className="protocol-grid">{protocols.map(({ name, role, desc, icon: Icon }) => <article className="protocol" key={name}><div className="protocol-top"><Icon size={20} /><span>{name}</span></div><h3>{role}</h3><p>{desc}</p><span className="protocol-status"><i /> INTEGRATED</span></article>)}</div>
        <div className="human-layer"><Sparkles size={18} /><span>用户视角</span><b>"将此文件安全传输至目标节点"</b><i /><span>系统执行</span><b>路径发现 · 协议选择 · 完整性校验 · 状态同步</b></div>
      </section>

      <section className="abilities section" id="abilities">
        <div className="section-heading"><p className="kicker">CORE CAPABILITIES</p><h2>覆盖内容全生命周期的<br />系统化管理能力。</h2><p>从内容标识生成到跨节点传输，从完整性验证到副本治理，IIEAO 提供完整的数据管理基础设施。</p></div>
        <div className="chapter-list">{chapters.map(({ tag, title, text, image, alt, icon: Icon, notes }, index) => <article className={`chapter ${index % 2 ? "reverse" : ""}`} key={tag}><div className="chapter-copy"><span className="chapter-icon"><Icon /></span><p className="chapter-tag">{tag}</p><h3>{title}</h3><p>{text}</p><div className="note-row">{notes.map(note => <span key={note}><Check size={13} />{note}</span>)}</div></div><div className="product-frame"><div className="frame-top"><i /><i /><i /><span>IIEAO DESKTOP</span></div><Image src={image} alt={alt} width={1920} height={1080} /><div className="frame-glow" /></div></article>)}</div>
      </section>

      <section className="people section">
        <div className="section-heading centered"><p className="kicker">FOR EVERYONE</p><h2>专业级的基础设施，<br />消费级的使用体验。</h2></div>
        <div className="people-grid">
          <article><span><PackageCheck /></span><p>内容创作者</p><h3>建立作品的可验证出处链。</h3><small>管理创作素材、分发最终成品、保留内容标识与版本历史。</small></article>
          <article><span><Waypoints /></span><p>协作团队</p><h3>突破大文件传输的带宽瓶颈。</h3><small>利用多源协作与点对点直连，在复杂网络环境中实现高效传输。</small></article>
          <article><span><KeyRound /></span><p>个人用户</p><h3>建立私有的数据韧性体系。</h3><small>端到端加密、增量备份与可验证恢复构成完整的数据保护方案。</small></article>
          <article><span><Blocks /></span><p>协议开发者</p><h3>统一的去中心化协议接入层。</h3><small>在单一界面中集成 Iroh、Swarm、AVRS 与 IPFS 协议栈。</small></article>
        </div>
      </section>

      <section className="proof section">
        <div className="proof-copy"><p className="kicker">TRANSPARENCY BY DESIGN</p><h2>可观测性是<br />系统可靠性的基石。</h2><p>节点健康度、网络拓扑、内容副本分布、传输进度与命名发布状态均以结构化方式呈现。透明性本身即是安全性的重要维度。</p><div className="proof-points"><span><ShieldCheck /> 本地安全边界</span><span><Radio /> 节点实时遥测</span><span><Database /> 结构化存储元数据</span></div></div>
        <div className="proof-stack"><div className="stack-card back-two" /><div className="stack-card back-one" /><div className="stack-card main-card"><Image src="/product/local-transfer.png" alt="IIEAO 本地传输界面" width={1920} height={1080} /></div><div className="mini-card"><Orbit /><div><b>Iroh 传输层</b><small>直连优先 · Relay 可达</small></div><span>运行中</span></div></div>
      </section>

      <section className="vision section" id="vision">
        <div className="vision-orbit"><span /><span /><span /><span /></div>
        <div className="vision-copy"><p className="kicker">ROADMAP</p><h2>从个人节点，<br />到个人数据主权网络。</h2><p>IIEAO 的长期愿景是构建一个由用户主权节点组成的去中心化内容网络，让数据所有权、可移植性与互操作性成为基础设施的内生属性。</p></div>
        <div className="future-grid"><article><span>当前阶段</span><h3>统一的本地内容节点</h3><p>集成多协议传输、内容寻址存储、可验证恢复与副本治理于单一桌面应用。</p></article><article><span>下一里程碑</span><h3>跨设备的可信内容网络</h3><p>通过设备间的加密通道与信任机制，让内容在个人设备网络中无缝流动。</p></article><article><span>长期愿景</span><h3>用户主权的数据基础设施</h3><p>身份可迁移、内容可移植、历史可追溯——数据主权真正归属于创造它的人。</p></article></div>
      </section>

      <section className="closing section"><div className="closing-node"><Image src="/iieao-icon.png" width={68} height={68} alt="IIEAO" /></div><p className="kicker">LOCAL-FIRST · VERIFIABLE · SOVEREIGN</p><h2>下一代互联网基础设施，<br /><em>从重构数据主权开始。</em></h2><p>从今天开始构建属于你的去中心化内容节点，让数据真正掌握在自己手中。</p><div className="hero-actions centered-actions"><a className="primary teal-button" href="https://github.com/xuanxi369/IPFS-Desktop-Rust" target="_blank" rel="noreferrer"><Code2 size={18} /> 探索 IIEAO</a><a className="secondary dark-secondary" href="#top">返回顶部 <ArrowRight size={18} /></a></div></section>

      <footer><a className="brand footer-brand" href="#top"><Image src="/iieao-icon.png" width={34} height={34} alt="" /><span><strong>IIEAO</strong><small>去中心化内容节点</small></span></a><p>为数据所有权、内容可追溯性与长期可访问性而设计。</p><div><a href="#why">核心理念</a><a href="#how">技术架构</a><a href="#abilities">产品能力</a><a href="https://github.com/xuanxi369/IPFS-Desktop-Rust" target="_blank" rel="noreferrer">GitHub <ChevronRight size={13} /></a></div><small>© 2025 IIEAO. Infrastructure for Data Sovereignty.</small></footer>
    </main>
  );
}
