'use client';

import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  ChevronRight,
  CircleCheck,
  Code2,
  Database,
  FileCheck2,
  Files,
  KeyRound,
  Layers3,
  Menu,
  Network,
  Orbit,
  PackageCheck,
  Radio,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Waypoints,
  Zap,
  X,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductGallery from './product-gallery';

const outcomes = [
  {
    n: '01',
    title: '传输过程，有据可查',
    text: '从分享凭证、接收预检到传输历史，查看内容如何送达，以及节点持有的本地副本。',
  },
  {
    n: '02',
    title: '内容完整，可以验证',
    text: '通过内容哈希、分块或范围校验验证接收结果，让传输完成有可检查的依据。',
  },
  {
    n: '03',
    title: '留好备份，验证恢复',
    text: '用加密备份、清单校验和恢复演练管理数据恢复路径，并为重要内容保留独立副本。',
  },
];

const protocols = [
  {
    name: 'IROH',
    role: '点对点直连协议',
    desc: '原生文件与目录传输，根据可达性使用直连或 Relay 路径。',
    icon: Zap,
  },
  {
    name: 'SWARM',
    role: '分布式分片传输',
    desc: '基于 Iroh，通过签名清单、分块校验与多个 Provider 协作传输。',
    icon: UsersRound,
  },
  {
    name: 'AVRS',
    role: '可验证范围传输',
    desc: '使用 Bao / BLAKE3 验证数据范围，支持自适应调度与路径重选。',
    icon: FileCheck2,
  },
  {
    name: 'IPFS / KUBO',
    role: '生态互操作层',
    desc: '通过 Kubo 使用 CID、IPNS 与 MFS，连接公共 IPFS 生态。',
    icon: Network,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    const desktop = window.matchMedia('(min-width: 1051px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    desktop.addEventListener('change', closeOnDesktop);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      desktop.removeEventListener('change', closeOnDesktop);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main>
      <header className={`site-header ${headerScrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="IIEAO 首页">
          <Image
            src="/iieao-icon.png"
            width={38}
            height={38}
            alt="IIEAO"
            priority
          />
          <span>
            <strong>IIEAO</strong>
            <small>去中心化内容节点</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#why">核心理念</a>
          <a href="#how">技术架构</a>
          <a href="#abilities">产品图集</a>
          <a href="#vision">发展路线</a>
        </nav>
        <a className="header-cta" href="#abilities">
          探索产品 <ArrowRight size={16} />
        </a>
        <button
          className="menu"
          aria-label={mobileMenuOpen ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
      >
        <nav aria-label="移动端导航">
          <a href="#why" onClick={closeMobileMenu}>
            核心理念
          </a>
          <a href="#how" onClick={closeMobileMenu}>
            技术架构
          </a>
          <a href="#abilities" onClick={closeMobileMenu}>
            产品图集
          </a>
          <a href="#vision" onClick={closeMobileMenu}>
            发展路线
          </a>
          <a
            href="https://github.com/xuanxi369/IPFS-Desktop-Rust"
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
            style={{
              background: 'var(--mint)',
              borderColor: 'var(--teal)',
              color: 'var(--teal-dark)',
            }}
          >
            <Code2 size={18} /> 开源代码库
          </a>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> LOCAL-FIRST · CONTENT NODE
          </div>
          <h1>
            你的内容，
            <br />
            <em>你的本地节点。</em>
          </h1>
          <p className="hero-lead">
            把文件管理、设备协作和可验证传输放进同一个桌面工作台。从保存一份内容，到把它送往另一台设备，每一步都更清楚。
          </p>
          <div className="hero-actions">
            <a className="primary" href="#abilities">
              浏览新版工作台 <ArrowRight size={18} />
            </a>
            <a
              className="secondary"
              href="https://github.com/xuanxi369/IPFS-Desktop-Rust"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={18} /> 开源代码库
            </a>
          </div>
          <a className="source-version" href="#vision">
            当前项目版本 · 0.6.2-beta
          </a>
          <div className="hero-proof">
            <span>
              <i /> 本地优先架构
            </span>
            <span>
              <i /> 可验证传输
            </span>
            <span>
              <i /> IPFS 生态兼容
            </span>
          </div>
        </div>
        <div className="hero-visual" aria-label="IIEAO 产品界面">
          <div className="orbit-line orbit-one" />
          <div className="orbit-line orbit-two" />
          <div className="node node-a" />
          <div className="node node-b" />
          <div className="node node-c" />
          <div className="window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <b>IIEAO · LOCAL NODE</b>
            </div>
            <Image
              src="/product/dashboard.png"
              alt="IIEAO 控制面板"
              width={2878}
              height={1720}
              priority
              unoptimized
            />
          </div>
          <div className="status-card">
            <Layers3 size={21} />
            <div>
              <b>新版桌面工作台</b>
              <small>真实界面 · 2026.09.30</small>
            </div>
          </div>
        </div>
        <a className="scroll-hint" href="#why">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={15} />
        </a>
      </section>

      <ProductGallery />

      <section className="why section" id="why">
        <div className="section-heading">
          <p className="kicker">THE CHALLENGE</p>
          <h2>
            从保存到送达，
            <br />
            让内容始终有据可查。
          </h2>
          <p>
            一个本地优先的内容节点，不只管理文件，也帮助你看清副本、检查传输，并为恢复做好准备。
          </p>
        </div>
        <div className="outcome-grid">
          {outcomes.map((item) => (
            <article className="outcome" key={item.n}>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="outcome-line">
                <i />
              </div>
            </article>
          ))}
        </div>
        <div className="manifesto">
          <div className="manifesto-mark">&ldquo;</div>
          <p>
            真正的<strong>数据所有权</strong>，<br />
            不仅是能够下载，更是能够追溯、验证，
            <br />
            并为恢复保留可靠的依据。
          </p>
          <small>IIEAO · INFRASTRUCTURE FOR DATA SOVEREIGNTY</small>
        </div>
      </section>

      <section className="how section" id="how">
        <div className="section-heading centered light">
          <p className="kicker">TECHNICAL ARCHITECTURE</p>
          <h2>
            一个工作台，
            <br />
            清晰的传输分工。
          </h2>
          <p>
            Iroh 提供原生传输，Swarm 与 AVRS 扩展大文件协作，Kubo 负责公共 IPFS
            兼容。
          </p>
        </div>
        <div className="route-stage">
          <div className="route-source route-terminal">
            <span className="terminal-icon">
              <Files />
            </span>
            <b>内容源</b>
            <small>文件 · 目录 · 内容</small>
          </div>
          <div className="route-wire left-wire">
            <i />
            <i />
            <i />
          </div>
          <div className="route-core">
            <div className="core-rings">
              <span />
              <span />
            </div>
            <Image src="/iieao-icon.png" width={58} height={58} alt="" />
            <b>IIEAO</b>
            <small>本地内容节点</small>
          </div>
          <div className="route-wire right-wire">
            <i />
            <i />
            <i />
          </div>
          <div className="route-source route-terminal">
            <span className="terminal-icon">
              <CircleCheck />
            </span>
            <b>可验证交付</b>
            <small>传输 · 存储 · 恢复</small>
          </div>
        </div>
        <div className="protocol-grid">
          {protocols.map(({ name, role, desc, icon: Icon }) => (
            <article className="protocol" key={name}>
              <div className="protocol-top">
                <Icon size={20} />
                <span>{name}</span>
              </div>
              <h3>{role}</h3>
              <p>{desc}</p>
              <span
                className={`protocol-status ${name === 'AVRS' ? 'experimental' : ''}`}
              >
                <i />
                {name === 'AVRS' ? 'EXPERIMENTAL · 实验性' : '已实现 · BETA'}
              </span>
            </article>
          ))}
        </div>
        <div className="human-layer">
          <Sparkles size={18} />
          <span>用户视角</span>
          <b>“把这份文件发送给另一台设备”</b>
          <i />
          <span>系统执行</span>
          <b>接收预检 · 可用路径 · 完整性校验 · 任务记录</b>
        </div>
      </section>

      <section className="people section">
        <div className="section-heading centered">
          <p className="kicker">FOR EVERYONE</p>
          <h2>
            从个人文件，
            <br />
            到设备之间的协作。
          </h2>
        </div>
        <div className="people-grid">
          <article>
            <span>
              <PackageCheck />
            </span>
            <p>内容创作者</p>
            <h3>集中管理素材与交付文件。</h3>
            <small>
              搜索和标记创作素材，用分享凭证分发文件，并检查接收结果。
            </small>
          </article>
          <article>
            <span>
              <Waypoints />
            </span>
            <p>协作团队</p>
            <h3>协作从可信设备开始。</h3>
            <small>
              配对自己的设备，配置权限与选择性同步，通过完成回执确认内容送达。
            </small>
          </article>
          <article>
            <span>
              <KeyRound />
            </span>
            <p>个人用户</p>
            <h3>为私密内容留好恢复路径。</h3>
            <small>
              使用桌面私有保险库、加密备份和恢复演练，管理私密内容与独立备份。
            </small>
          </article>
          <article>
            <span>
              <Blocks />
            </span>
            <p>协议开发者</p>
            <h3>在真实节点上探索协议。</h3>
            <small>
              在同一工作台查看 Iroh、经典 Swarm、实验性 AVRS 与 Kubo/IPFS
              的不同能力。
            </small>
          </article>
        </div>
      </section>

      <section className="proof section">
        <div className="proof-copy">
          <p className="kicker">TRANSPARENCY BY DESIGN</p>
          <h2>
            看得见运行，
            <br />
            找得到线索。
          </h2>
          <p>
            从节点健康到存储占用，从脱敏诊断到基准历史，把运行中的变化转化为可查看、可对照的记录。截图中的结果仅代表一次本地运行。
          </p>
          <div className="proof-points">
            <span>
              <ShieldCheck /> 脱敏诊断报告
            </span>
            <span>
              <Radio /> 节点运行指标
            </span>
            <span>
              <Database /> 基准测试历史
            </span>
          </div>
        </div>
        <div className="proof-stack">
          <div className="stack-card back-two" />
          <div className="stack-card back-one" />
          <div className="stack-card main-card">
            <Image
              src="/product/benchmarks.png"
              alt="IIEAO 基准测试结果与历史记录"
              width={2447}
              height={1472}
              unoptimized
            />
          </div>
          <div className="mini-card">
            <Orbit />
            <div>
              <b>性能观测</b>
              <small>测试结果 · 历史记录</small>
            </div>
            <span>界面实拍</span>
          </div>
        </div>
      </section>

      <section className="vision section" id="vision">
        <div className="vision-orbit">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="vision-copy">
          <p className="kicker">ROADMAP</p>
          <h2>
            从可用的 Beta，
            <br />
            走向经得起验证的日常。
          </h2>
          <p>
            当前项目版本为
            0.6.2-beta。内容管理、多通道传输、可信设备与备份恢复已有实现；下一步将继续验证真实网络与长期运行体验。
          </p>
        </div>
        <div className="future-grid">
          <article>
            <span>01 · 已有实现</span>
            <h3>本地节点与可信设备</h3>
            <p>
              文件与目录收发、内容治理、私有保险库、加密备份，以及设备配对、权限和选择性同步。
            </p>
          </article>
          <article>
            <span>02 · 正在验证</span>
            <h3>真实网络与恢复能力</h3>
            <p>
              跨 NAT、Relay、断网重连、长期运行，以及 AVRS
              崩溃和跨重启恢复，是接下来的验证重点。
            </p>
          </article>
          <article>
            <span>03 · 发布门槛</span>
            <h3>可验证的安装与升级</h3>
            <p>
              继续完成 Windows、macOS、Linux 的真实安装、更新与回滚验收，处理
              Linux 依赖发布风险。
            </p>
          </article>
        </div>
        <p className="beta-note">
          Beta 阶段建议为重要内容保留独立备份。AVRS
          保持实验性；版本号不代表正式发布验收已经完成。
        </p>
      </section>

      <section className="closing section">
        <div className="closing-node">
          <Image src="/iieao-icon.png" width={68} height={68} alt="IIEAO" />
        </div>
        <p className="kicker">LOCAL-FIRST · VERIFIABLE · SOVEREIGN</p>
        <h2>
          让每一份文件，
          <br />
          <em>都有一条回家的路。</em>
        </h2>
        <p>查看开源项目、了解当前能力，参与本地内容节点的持续演进。</p>
        <div className="hero-actions centered-actions">
          <a
            className="primary teal-button"
            href="https://github.com/xuanxi369/IPFS-Desktop-Rust"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={18} /> 探索 IIEAO
          </a>
          <a className="secondary dark-secondary" href="#top">
            返回顶部 <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <Image src="/iieao-icon.png" width={34} height={34} alt="" />
          <span>
            <strong>IIEAO</strong>
            <small>去中心化内容节点</small>
          </span>
        </a>
        <p>为数据所有权、内容可追溯性与长期可访问性而设计。</p>
        <div>
          <a href="#why">核心理念</a>
          <a href="#how">技术架构</a>
          <a href="#abilities">产品图集</a>
          <a
            href="https://github.com/xuanxi369/IPFS-Desktop-Rust"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ChevronRight size={13} />
          </a>
        </div>
        <small>© 2026 IIEAO. Infrastructure for Data Sovereignty.</small>
      </footer>
    </main>
  );
}
