import Image from "next/image";
import { ArrowDown, ArrowRight, Blocks, Check, ChevronRight, CircleCheck, Code2, Database, FileCheck2, Files, KeyRound, Menu, Network, Orbit, PackageCheck, Radio, RefreshCcw, Route, Send, ShieldCheck, Sparkles, UsersRound, Waypoints, Zap } from "lucide-react";

const outcomes = [
  { n: "01", title: "它现在在哪里？", text: "内容不再只是某个云端列表里的名字。你看得见本机副本、节点状态与每一次传输路径。" },
  { n: "02", title: "它还是原来的它吗？", text: "分享凭证、内容标识与完整性检查，让接收不再依赖一句“应该没问题”。" },
  { n: "03", title: "它还能回来吗？", text: "从备份、恢复到副本治理，让重要内容拥有一条可理解、可执行的回家路线。" },
];

const protocols = [
  { name: "IROH", role: "直接抵达", desc: "为设备之间的直接发送寻找更短的路径。", icon: Zap },
  { name: "SWARM", role: "协力传输", desc: "把大内容拆成可协作的片段，由多个来源共同送达。", icon: UsersRound },
  { name: "AVRS", role: "按需取回", desc: "围绕可验证区间组织恢复，让缺失的部分准确回来。", icon: FileCheck2 },
  { name: "IPFS / KUBO", role: "连接生态", desc: "保持内容寻址与既有 IPFS 世界的互操作能力。", icon: Network },
];

const chapters = [
  { tag: "01 · CONTENT OWNERSHIP", title: "保存，不只是放进去。", text: "IIEAO 让文件拥有清晰的归属：它在哪里、占用了多少空间、有哪些副本、是否仍然健康。你管理的是内容，而不是一串看不懂的后台任务。", image: "/product/files.png", alt: "IIEAO 文件与内容管理界面", icon: Files, notes: ["内容寻址", "本地优先", "副本可见"] },
  { tag: "02 · VERIFIED DELIVERY", title: "发送之前，先把信任说清楚。", text: "选择文件或文件夹，IIEAO 会生成可分享的凭证。接收方先检查来源、版本、网络与保存空间，再决定接收——重要内容的交付，也应该有确认感。", image: "/product/send-receive.png", alt: "IIEAO 发送与接收界面", icon: Send, notes: ["分享凭证", "接收预检", "完整性确认"] },
  { tag: "03 · MANY PATHS, ONE INTENT", title: "你只说目标，路径交给节点。", text: "直连、分片协作、区间恢复或 IPFS 兼容发布，不该成为使用门槛。IIEAO 根据内容与网络状态组织传输，同时保留清晰的过程与结果。", image: "/product/swarm.png", alt: "IIEAO Swarm 多源传输界面", icon: Route, notes: ["智能路由", "多源协作", "进度可见"] },
  { tag: "04 · RECOVERABLE BY DESIGN", title: "真正的安全，是失去之后还能回来。", text: "备份、私密空间、恢复点与存储治理被放在同一套体验中。不是等意外发生才寻找工具，而是在日常使用里持续保留选择。", image: "/product/storage-governance.png", alt: "IIEAO 备份与存储治理界面", icon: RefreshCcw, notes: ["加密保护", "备份恢复", "空间治理"] },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="IIEAO 首页"><Image src="/iieao-icon.png" width={38} height={38} alt="IIEAO" priority /><span><strong>IIEAO</strong><small>你的内容，你的节点</small></span></a>
        <nav aria-label="主导航"><a href="#why">为什么</a><a href="#how">如何工作</a><a href="#abilities">能做什么</a><a href="#vision">愿景</a></nav>
        <a className="header-cta" href="#abilities">探索产品 <ArrowRight size={16} /></a><button className="menu" aria-label="导航菜单"><Menu /></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> LOCAL-FIRST · CONTENT NODE</div>
          <h1>让每一份文件，<br /><em>都有一条回家的路。</em></h1>
          <p className="hero-lead">IIEAO 把分散的存储与传输协议，变成一个人人都能使用的本地内容节点。保存、发送、接收、恢复——不必先读懂协议，先告诉它你想做什么。</p>
          <div className="hero-actions"><a className="primary" href="#how">看它如何工作 <ArrowRight size={18} /></a><a className="secondary" href="https://github.com/xuanxi369/IPFS-Desktop-Rust" target="_blank" rel="noreferrer"><Code2 size={18} /> 查看源代码</a></div>
          <div className="hero-proof"><span><i /> 数据留在身边</span><span><i /> 传输可以验证</span><span><i /> 兼容 IPFS 生态</span></div>
        </div>
        <div className="hero-visual" aria-label="IIEAO 产品界面">
          <div className="orbit-line orbit-one" /><div className="orbit-line orbit-two" /><div className="node node-a" /><div className="node node-b" /><div className="node node-c" />
          <div className="window"><div className="window-bar"><span /><span /><span /><b>IIEAO · LOCAL NODE</b></div><Image src="/product/dashboard.png" alt="IIEAO 控制面板" width={1920} height={1080} priority /></div>
          <div className="status-card"><span className="pulse" /><div><b>节点在线</b><small>你的内容路径正在运行</small></div></div>
        </div>
        <a className="scroll-hint" href="#why"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a>
      </section>

      <section className="why section" id="why">
        <div className="section-heading"><p className="kicker">THE QUESTION</p><h2>文件离开电脑之后，<br />我们失去了什么？</h2><p>过去，我们习惯把内容交出去，再相信它会一直在那里。IIEAO 想把确定感重新交还给每一个人。</p></div>
        <div className="outcome-grid">{outcomes.map((item) => <article className="outcome" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><div className="outcome-line"><i /></div></article>)}</div>
        <div className="manifesto"><div className="manifesto-mark">“</div><p>我们相信，<strong>拥有数据</strong>不只是能够下载它。<br />而是知道它在哪里，能够证明它，<br />也能在需要时，把它带回来。</p><small>IIEAO · CONTENT BELONGS TO PEOPLE</small></div>
      </section>

      <section className="how section" id="how">
        <div className="section-heading centered light"><p className="kicker">HOW IT WORKS</p><h2>一个目标，背后可以有很多条路。</h2><p>IIEAO 把协议留在引擎室，把结果带到你面前。</p></div>
        <div className="route-stage">
          <div className="route-source route-terminal"><span className="terminal-icon"><Files /></span><b>你的内容</b><small>文件 · 文件夹 · 数据</small></div>
          <div className="route-wire left-wire"><i /><i /><i /></div>
          <div className="route-core"><div className="core-rings"><span /><span /></div><Image src="/iieao-icon.png" width={58} height={58} alt="" /><b>IIEAO</b><small>意图路由器</small></div>
          <div className="route-wire right-wire"><i /><i /><i /></div>
          <div className="route-source route-terminal"><span className="terminal-icon"><CircleCheck /></span><b>可信结果</b><small>送达 · 保存 · 恢复</small></div>
        </div>
        <div className="protocol-grid">{protocols.map(({ name, role, desc, icon: Icon }) => <article className="protocol" key={name}><div className="protocol-top"><Icon size={20} /><span>{name}</span></div><h3>{role}</h3><p>{desc}</p><span className="protocol-status"><i /> READY</span></article>)}</div>
        <div className="human-layer"><Sparkles size={18} /><span>你看到的是</span><b>“把这个文件安全地送给他”</b><i /><span>IIEAO 处理的是</span><b>路径、连接、校验与恢复</b></div>
      </section>

      <section className="abilities section" id="abilities">
        <div className="section-heading"><p className="kicker">WHAT IT ENABLES</p><h2>围绕内容的一生，<br />而不是某一次上传。</h2><p>从文件进入节点的那一刻，到它被分享、被验证、被找回，每一步都在同一个清晰的空间里发生。</p></div>
        <div className="chapter-list">{chapters.map(({ tag, title, text, image, alt, icon: Icon, notes }, index) => <article className={`chapter ${index % 2 ? "reverse" : ""}`} key={tag}><div className="chapter-copy"><span className="chapter-icon"><Icon /></span><p className="chapter-tag">{tag}</p><h3>{title}</h3><p>{text}</p><div className="note-row">{notes.map(note => <span key={note}><Check size={13} />{note}</span>)}</div></div><div className="product-frame"><div className="frame-top"><i /><i /><i /><span>IIEAO DESKTOP</span></div><Image src={image} alt={alt} width={1920} height={1080} /><div className="frame-glow" /></div></article>)}</div>
      </section>

      <section className="people section">
        <div className="section-heading centered"><p className="kicker">MADE FOR REAL LIFE</p><h2>不是所有人都要成为节点专家。<br />但每个人都值得拥有自己的节点。</h2></div>
        <div className="people-grid">
          <article><span><PackageCheck /></span><p>给创作者</p><h3>让作品有出处，也有归处。</h3><small>整理素材、分享成品、保留可验证的内容标识。</small></article>
          <article><span><Waypoints /></span><p>给团队</p><h3>让大文件传递，不再只有一条窄路。</h3><small>直连与多源协作，在不同网络里找到合适路径。</small></article>
          <article><span><KeyRound /></span><p>给每个家庭</p><h3>让珍贵的记录，掌握在自己手里。</h3><small>本地保存、私密保护、备份与恢复形成一套日常习惯。</small></article>
          <article><span><Blocks /></span><p>给建设者</p><h3>让开放协议，拥有真正可用的入口。</h3><small>在统一桌面体验里连接 Iroh、Swarm、AVRS 与 IPFS。</small></article>
        </div>
      </section>

      <section className="proof section">
        <div className="proof-copy"><p className="kicker">VISIBLE BY DEFAULT</p><h2>复杂可以留在底层，<br />但过程不该藏起来。</h2><p>节点健康、网络状态、内容副本、传输进度与命名发布，都以可以理解的方式被看见。清晰，本身就是一种安全感。</p><div className="proof-points"><span><ShieldCheck /> 本地安全边界</span><span><Radio /> 节点实时状态</span><span><Database /> 可解释的存储</span></div></div>
        <div className="proof-stack"><div className="stack-card back-two" /><div className="stack-card back-one" /><div className="stack-card main-card"><Image src="/product/local-transfer.png" alt="IIEAO 本地传输界面" width={1920} height={1080} /></div><div className="mini-card"><Orbit /><div><b>Iroh 传输</b><small>直连优先 · Relay 可达</small></div><span>在线</span></div></div>
      </section>

      <section className="vision section" id="vision">
        <div className="vision-orbit"><span /><span /><span /><span /></div>
        <div className="vision-copy"><p className="kicker">THE VISION</p><h2>从一台电脑，<br />到属于你的数据基础设施。</h2><p>IIEAO 的未来，不是让每个人维护一堆协议，而是让个人拥有一个持续在线、可以迁移、值得信任的内容家园。</p></div>
        <div className="future-grid"><article><span>现在</span><h3>一个统一的本地内容节点</h3><p>保存、发送、接收、恢复与治理，在同一个桌面空间完成。</p></article><article><span>下一站</span><h3>设备之间的可信内容网络</h3><p>电脑、家庭设备与可信伙伴彼此协作，让内容自然流动。</p></article><article><span>更远处</span><h3>人人拥有的数据主权</h3><p>名字可以延续，内容可以迁移，选择权始终属于创造和保存它的人。</p></article></div>
      </section>

      <section className="closing section"><div className="closing-node"><Image src="/iieao-icon.png" width={68} height={68} alt="IIEAO" /></div><p className="kicker">YOUR CONTENT · YOUR NODE · YOUR WAY</p><h2>下一代网络，不只连接设备。<br /><em>它把掌控感还给人。</em></h2><p>从今天保存的第一份文件开始，建立属于你的内容节点。</p><div className="hero-actions centered-actions"><a className="primary teal-button" href="https://github.com/xuanxi369/IPFS-Desktop-Rust" target="_blank" rel="noreferrer"><Code2 size={18} /> 走近 IIEAO</a><a className="secondary dark-secondary" href="#top">回到顶部 <ArrowRight size={18} /></a></div></section>

      <footer><a className="brand footer-brand" href="#top"><Image src="/iieao-icon.png" width={34} height={34} alt="" /><span><strong>IIEAO</strong><small>你的内容，你的节点</small></span></a><p>为内容的所有权、流动与长久可达而设计。</p><div><a href="#why">故事</a><a href="#how">工作方式</a><a href="#abilities">产品</a><a href="https://github.com/xuanxi369/IPFS-Desktop-Rust" target="_blank" rel="noreferrer">GitHub <ChevronRight size={13} /></a></div><small>© 2026 IIEAO. Content belongs to people.</small></footer>
    </main>
  );
}
