'use client';

import Image from "next/image";
import { ArrowDown, ArrowRight, Blocks, Check, ChevronRight, CircleCheck, Code2, Database, Download, FileCheck2, Files, KeyRound, Menu, Network, Orbit, PackageCheck, Radio, RefreshCcw, Route, Send, ShieldCheck, Sparkles, UsersRound, Waypoints, Zap, X } from "lucide-react";
import { Fragment, useState, useEffect } from "react";

import { DownloadDialog } from "@/components/download-dialog";
import { useI18n } from "@/components/i18n-provider";
import { LanguageChips, LanguageSwitcher } from "@/components/language-switcher";
import { REPOSITORY_URL } from "@/lib/downloads";
import { PRODUCT_IMAGES, type ProductImage } from "@/lib/product-images";

// 协议名与技术标识不随语言变化，位置与字典中 protocols 的顺序一一对应
const PROTOCOL_NAMES = ["IROH", "SWARM", "AVRS", "IPFS / KUBO"];
const PROTOCOL_ICONS = [Zap, UsersRound, FileCheck2, Network];

// 章节配图与图标同样按语言无关的顺序排列（图片清单由 scripts/generate-image-variants.mjs 生成）
const CHAPTER_VISUALS = [
  { image: PRODUCT_IMAGES.files, icon: Files },
  { image: PRODUCT_IMAGES['send-receive'], icon: Send },
  { image: PRODUCT_IMAGES.swarm, icon: Route },
  { image: PRODUCT_IMAGES['storage-governance'], icon: RefreshCcw },
];

/**
 * 截图的档位选择交给浏览器（srcSet + sizes）；这里声明的展示宽度与 globals.css 的
 * 断点保持一致：≤1050px 单列铺满，桌面上约占半栏。
 */
const SECTION_SHOT_SIZES = '(max-width: 1050px) 92vw, 48vw';
const HERO_SHOT_SIZES = '(max-width: 1050px) 92vw, 50vw';

/**
 * 产品截图：预生成的静态 WebP + 内联模糊占位（LQIP）。
 *
 * 这里刻意不用 next/image —— 生产环境没有绑定图像优化器，/_next/image 只会把原始
 * PNG 原样回源（400KB 级），首访时就是“空白 → 突然出现”。静态 WebP 体积约为原
 * PNG 的 15%~25%，且不依赖运行时的图像转换。
 */
function ProductShot({
  image,
  alt,
  sizes,
  priority = false,
}: {
  image: ProductImage;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    // 已预生成多档静态 WebP 并内联 LQIP；改用 next/image 反而会回退到运行时原图直通
    // oxlint-disable-next-line next/no-img-element
    <img
      className="product-shot"
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      alt={alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      style={{ backgroundImage: `url("${image.blurDataURL}")` }}
    />
  );
}

const PEOPLE_ICONS = [PackageCheck, Waypoints, KeyRound, Blocks];
const PROOF_ICONS = [ShieldCheck, Radio, Database];

export default function Home() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

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

  const protocols = t.how.protocols.map((protocol, index) => ({
    ...protocol,
    name: PROTOCOL_NAMES[index],
    icon: PROTOCOL_ICONS[index],
  }));

  const chapters = t.abilities.chapters.map((chapter, index) => ({
    ...chapter,
    ...CHAPTER_VISUALS[index],
  }));

  return (
    <main>
      <header className={`site-header ${headerScrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label={t.a11y.homeLabel}><Image src="/iieao-icon.png" width={38} height={38} alt="IIEAO" priority /><span><strong>IIEAO</strong><small>{t.brand.tagline}</small></span></a>
        <nav aria-label={t.a11y.mainNav}><a href="#why">{t.nav.why}</a><a href="#how">{t.nav.how}</a><a href="#abilities">{t.nav.abilities}</a><a href="#vision">{t.nav.vision}</a></nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <button className="header-download" type="button" onClick={() => setDownloadOpen(true)}><Download size={15} /> {t.header.download}</button>
          <a className="header-cta" href="#abilities">{t.header.explore} <ArrowRight size={16} /></a>
        </div>
        <button 
          className="menu" 
          aria-label={mobileMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <a href="#why" onClick={closeMobileMenu}>{t.nav.why}</a>
          <a href="#how" onClick={closeMobileMenu}>{t.nav.how}</a>
          <a href="#abilities" onClick={closeMobileMenu}>{t.nav.abilities}</a>
          <a href="#vision" onClick={closeMobileMenu}>{t.nav.vision}</a>
          <button className="mobile-download" type="button" onClick={() => { closeMobileMenu(); setDownloadOpen(true); }}>
            <Download size={18} /> {t.mobileNav.download}
          </button>
          <a href={REPOSITORY_URL} target="_blank" rel="noreferrer" onClick={closeMobileMenu} style={{background: 'var(--mint)', borderColor: 'var(--teal)', color: 'var(--teal-dark)'}}>
            <Code2 size={18} /> {t.mobileNav.repo}
          </a>
        </nav>
        <LanguageChips />
      </div>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> {t.hero.eyebrow}</div>
          <h1>{t.hero.titleLine1}<br /><em>{t.hero.titleLine2}</em></h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions"><button className="primary" type="button" onClick={() => setDownloadOpen(true)}><Download size={18} /> {t.hero.download}</button><a className="secondary" href="#how">{t.hero.architecture} <ArrowRight size={18} /></a><a className="secondary" href={REPOSITORY_URL} target="_blank" rel="noreferrer"><Code2 size={18} /> {t.hero.repo}</a></div>
          <div className="hero-proof">{t.hero.proofs.map((proof) => <span key={proof}><i /> {proof}</span>)}</div>
        </div>
        <div className="hero-visual" aria-label={t.a11y.heroVisual}>
          <div className="orbit-line orbit-one" /><div className="orbit-line orbit-two" /><div className="node node-a" /><div className="node node-b" /><div className="node node-c" />
          <div className="window"><div className="window-bar"><span /><span /><span /><b>{t.hero.windowTitle}</b></div><ProductShot image={PRODUCT_IMAGES.dashboard} alt={t.hero.dashboardAlt} sizes={HERO_SHOT_SIZES} priority /></div>
          <div className="status-card"><span className="pulse" /><div><b>{t.hero.statusTitle}</b><small>{t.hero.statusSub}</small></div></div>
        </div>
        <a className="scroll-hint" href="#why"><span>{t.hero.scroll}</span><ArrowDown size={15} /></a>
      </section>

      <section className="why section" id="why">
        <div className="section-heading"><p className="kicker">{t.why.kicker}</p><h2>{t.why.titleLine1}<br />{t.why.titleLine2}</h2><p>{t.why.lead}</p></div>
        <div className="outcome-grid">{t.why.items.map((item) => <article className="outcome" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><div className="outcome-line"><i /></div></article>)}</div>
        <div className="manifesto"><div className="manifesto-mark">{'"'}</div><p>{t.why.manifesto.lead}<strong>{t.why.manifesto.strong}</strong>{t.why.manifesto.text.split('\n').map((line, index) => <Fragment key={`${index}-${line}`}>{index > 0 ? <br /> : null}{line}</Fragment>)}</p><small>{t.why.manifesto.signature}</small></div>
      </section>

      <section className="how section" id="how">
        <div className="section-heading centered light"><p className="kicker">{t.how.kicker}</p><h2>{t.how.title}</h2><p>{t.how.lead}</p></div>
        <div className="route-stage">
          <div className="route-source route-terminal"><span className="terminal-icon"><Files /></span><b>{t.how.source.title}</b><small>{t.how.source.sub}</small></div>
          <div className="route-wire left-wire"><i /><i /><i /></div>
          <div className="route-core"><div className="core-rings"><span /><span /></div><Image src="/iieao-icon.png" width={58} height={58} alt="" /><b>{t.how.core.title}</b><small>{t.how.core.sub}</small></div>
          <div className="route-wire right-wire"><i /><i /><i /></div>
          <div className="route-source route-terminal"><span className="terminal-icon"><CircleCheck /></span><b>{t.how.delivery.title}</b><small>{t.how.delivery.sub}</small></div>
        </div>
        <div className="protocol-grid">{protocols.map(({ name, role, desc, icon: Icon }) => <article className="protocol" key={name}><div className="protocol-top"><Icon size={20} /><span>{name}</span></div><h3>{role}</h3><p>{desc}</p><span className="protocol-status"><i /> {t.how.status}</span></article>)}</div>
        <div className="human-layer"><Sparkles size={18} /><span>{t.how.human.userLabel}</span><b>{t.how.human.userQuote}</b><i /><span>{t.how.human.systemLabel}</span><b>{t.how.human.systemText}</b></div>
      </section>

      <section className="abilities section" id="abilities">
        <div className="section-heading"><p className="kicker">{t.abilities.kicker}</p><h2>{t.abilities.titleLine1}<br />{t.abilities.titleLine2}</h2><p>{t.abilities.lead}</p></div>
        <div className="chapter-list">{chapters.map(({ tag, title, text, image, alt, icon: Icon, notes }, index) => <article className={`chapter ${index % 2 ? "reverse" : ""}`} key={tag}><div className="chapter-copy"><span className="chapter-icon"><Icon /></span><p className="chapter-tag">{tag}</p><h3>{title}</h3><p>{text}</p><div className="note-row">{notes.map((note, noteIndex) => <span key={`${noteIndex}-${note}`}><Check size={13} />{note}</span>)}</div></div><div className="product-frame"><div className="frame-top"><i /><i /><i /><span>IIEAO DESKTOP</span></div><ProductShot image={image} alt={alt} sizes={SECTION_SHOT_SIZES} /><div className="frame-glow" /></div></article>)}</div>
      </section>

      <section className="people section">
        <div className="section-heading centered"><p className="kicker">{t.people.kicker}</p><h2>{t.people.titleLine1}<br />{t.people.titleLine2}</h2></div>
        <div className="people-grid">
          {t.people.items.map((item, index) => {
            const Icon = PEOPLE_ICONS[index];
            return <article key={item.label}><span><Icon /></span><p>{item.label}</p><h3>{item.title}</h3><small>{item.text}</small></article>;
          })}
        </div>
      </section>

      <section className="proof section">
        <div className="proof-copy"><p className="kicker">{t.proof.kicker}</p><h2>{t.proof.titleLine1}<br />{t.proof.titleLine2}</h2><p>{t.proof.lead}</p><div className="proof-points">{t.proof.points.map((point, index) => { const Icon = PROOF_ICONS[index]; return <span key={point}><Icon /> {point}</span>; })}</div></div>
        <div className="proof-stack"><div className="stack-card back-two" /><div className="stack-card back-one" /><div className="stack-card main-card"><ProductShot image={PRODUCT_IMAGES['local-transfer']} alt={t.proof.imageAlt} sizes={SECTION_SHOT_SIZES} /></div><div className="mini-card"><Orbit /><div><b>{t.proof.miniCard.title}</b><small>{t.proof.miniCard.sub}</small></div><span>{t.proof.miniCard.status}</span></div></div>
      </section>

      <section className="vision section" id="vision">
        <div className="vision-orbit"><span /><span /><span /><span /></div>
        <div className="vision-copy"><p className="kicker">{t.vision.kicker}</p><h2>{t.vision.titleLine1}<br />{t.vision.titleLine2}</h2><p>{t.vision.lead}</p></div>
        <div className="future-grid">{t.vision.items.map((item) => <article key={item.label}><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="closing section"><div className="closing-node"><Image src="/iieao-icon.png" width={68} height={68} alt="IIEAO" /></div><p className="kicker">{t.closing.kicker}</p><h2>{t.closing.titleLine1}<br /><em>{t.closing.titleLine2}</em></h2><p>{t.closing.lead}</p><div className="hero-actions centered-actions"><button className="primary teal-button" type="button" onClick={() => setDownloadOpen(true)}><Download size={18} /> {t.closing.download}</button><a className="secondary dark-secondary" href={REPOSITORY_URL} target="_blank" rel="noreferrer"><Code2 size={18} /> {t.closing.explore}</a><a className="secondary dark-secondary" href="#top">{t.closing.backToTop} <ArrowRight size={18} /></a></div></section>

      <footer><a className="brand footer-brand" href="#top"><Image src="/iieao-icon.png" width={34} height={34} alt="" /><span><strong>IIEAO</strong><small>{t.brand.tagline}</small></span></a><p>{t.footer.description}</p><div><a href="#why">{t.nav.why}</a><a href="#how">{t.nav.how}</a><a href="#abilities">{t.nav.abilities}</a><a href={REPOSITORY_URL} target="_blank" rel="noreferrer">GitHub <ChevronRight size={13} /></a></div><small>{t.footer.copyright}</small></footer>

      <DownloadDialog open={downloadOpen} onOpenChange={setDownloadOpen} />
    </main>
  );
}
