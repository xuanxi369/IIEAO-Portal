'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  productCategories,
  productImagePath,
  productScreens,
  type ProductCategory,
  type ProductScreen,
} from './product-screens';

function ScreenshotPreview({
  screen,
  index,
  count,
  onPrevious,
  onNext,
  onClose,
}: {
  screen: ProductScreen;
  index: number;
  count: number;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    const originalOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
      element?.close();
    };
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onPrevious();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onNext();
      }
    };
    const handleBackdrop = (event: MouseEvent) => {
      if (event.target !== element) return;
      const bounds = element.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      ) {
        element.close();
      }
    };
    element.addEventListener('keydown', handleKey);
    element.addEventListener('click', handleBackdrop);
    return () => {
      element.removeEventListener('keydown', handleKey);
      element.removeEventListener('click', handleBackdrop);
    };
  }, [onPrevious, onNext]);

  return (
    <dialog
      ref={dialog}
      className="screenshot-dialog"
      aria-labelledby="preview-title"
      aria-describedby="preview-description"
      onClose={onClose}
    >
      <div className="preview-toolbar">
        <div aria-live="polite">
          <span>{screen.english}</span>
          <h3 id="preview-title">{screen.title}</h3>
        </div>
        <button
          className="icon-button"
          type="button"
          aria-label="关闭截图预览"
          onClick={() => dialog.current?.close()}
        >
          <X size={23} />
        </button>
      </div>
      <div className="preview-image">
        <Image
          src={productImagePath(screen)}
          alt={`IIEAO ${screen.title}，完整应用截图`}
          width={screen.width}
          height={screen.height}
          unoptimized
        />
      </div>
      <div className="preview-footer">
        <p id="preview-description">{screen.description}</p>
        <div className="preview-controls">
          <a href={productImagePath(screen)} target="_blank" rel="noreferrer">
            查看原图 <ArrowUpRight size={16} />
          </a>
          <div className="preview-pagination">
            <button
              className="icon-button"
              type="button"
              aria-label="上一张截图"
              onClick={onPrevious}
            >
              <ArrowLeft size={20} />
            </button>
            <span aria-live="polite">
              {index + 1} / {count}
            </span>
            <button
              className="icon-button"
              type="button"
              aria-label="下一张截图"
              onClick={onNext}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default function ProductGallery() {
  const [category, setCategory] = useState<ProductCategory>('全部');
  const [previewId, setPreviewId] = useState<string | null>(null);
  const visibleScreens = productScreens.filter(
    (screen) => category === '全部' || screen.category === category,
  );
  const previewIndex = visibleScreens.findIndex(
    (screen) => screen.id === previewId,
  );
  const preview = visibleScreens[previewIndex];
  const movePreview = (delta: number) => {
    const nextIndex =
      (previewIndex + delta + visibleScreens.length) % visibleScreens.length;
    setPreviewId(visibleScreens[nextIndex].id);
  };

  return (
    <section
      className="abilities section product-tour"
      id="abilities"
      aria-labelledby="tour-title"
    >
      <div className="tour-heading">
        <div className="section-heading">
          <p className="kicker">INSIDE IIEAO · PRODUCT TOUR</p>
          <h2 id="tour-title">
            你的内容节点，
            <br />
            现在看得更清楚。
          </h2>
          <p>
            从第一份文件，到设备之间的协作，再到节点的日常维护。走进新版工作台，看看每一步如何发生。
          </p>
        </div>
        <div className="tour-edition">
          <strong>11</strong>
          <span>张真实界面截图</span>
          <small>2026.09.30 · 桌面端</small>
        </div>
      </div>
      <div className="tour-filter-row">
        <fieldset className="tour-filters">
          <legend className="sr-only">按产品能力筛选截图</legend>
          {productCategories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              aria-controls="product-grid"
              onClick={() => setCategory(item)}
            >
              {item}
              <span>
                {item === '全部'
                  ? productScreens.length
                  : productScreens.filter((screen) => screen.category === item)
                      .length}
              </span>
            </button>
          ))}
        </fieldset>
        <p className="tour-hint" aria-live="polite">
          {visibleScreens.length} 张界面 · 点击图片放大
        </p>
      </div>
      <div className="product-grid" id="product-grid">
        {visibleScreens.map((screen) => (
          <article className="screen-card" key={screen.id}>
            <button
              className="screen-shot"
              type="button"
              onClick={() => setPreviewId(screen.id)}
              aria-label={`放大查看：${screen.title}`}
              aria-haspopup="dialog"
            >
              <div className="screen-chrome" aria-hidden="true">
                <span>
                  <i />
                  <i />
                  <i />
                </span>
                <small>{screen.english}</small>
                <Expand size={14} />
              </div>
              <Image
                src={productImagePath(screen)}
                alt={`IIEAO ${screen.title}界面`}
                width={screen.width}
                height={screen.height}
                unoptimized
              />
              <span className="screen-expand">
                <Expand size={15} /> 查看界面
              </span>
            </button>
            <div className="screen-copy">
              <div className="screen-meta">
                <span>{screen.category}</span>
                {screen.experimental && (
                  <span className="experimental-badge">实验性 · AVRS</span>
                )}
              </div>
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
              <ul className="screen-tags" aria-label="功能要点">
                {screen.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        {category === '全部' && (
          <aside className="tour-note">
            <span className="kicker">A NODE OF YOUR OWN</span>
            <h3>
              保存、发送、验证。
              <br />
              让每一步都有依据。
            </h3>
            <p>界面背后，是本地内容管理、可验证传输和可恢复运行的持续打磨。</p>
            <a href="#vision">
              了解当前进展 <ArrowRight size={18} />
            </a>
          </aside>
        )}
      </div>
      {preview && (
        <ScreenshotPreview
          screen={preview}
          index={previewIndex}
          count={visibleScreens.length}
          onPrevious={() => movePreview(-1)}
          onNext={() => movePreview(1)}
          onClose={() => setPreviewId(null)}
        />
      )}
    </section>
  );
}
