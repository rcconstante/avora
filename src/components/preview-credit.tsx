"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./preview-credit.module.css";

type PreviewCreditProps = { sourceHref: string; theme: "verilo" | "avora" };

export function PreviewCredit({ sourceHref, theme }: PreviewCreditProps) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  return (
    <>
      <div className={styles.clearance} aria-hidden="true" />
      <aside
        ref={root}
        className={`${styles.credit} ${styles[theme]}`}
        aria-label="Preview and developer credits"
        data-open={open}
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") setOpen(true);
        }}
        onPointerLeave={() => {
          if (!root.current?.contains(document.activeElement)) setOpen(false);
        }}
        onFocusCapture={(event) => {
          if (event.target.matches(":focus-visible")) setOpen(true);
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
          }
        }}
      >
        <div
          id={panelId}
          className={styles.panel}
          aria-hidden={!open}
          inert={!open}
        >
          <div className={styles.developer}>
            <span className={styles.preview}>
              <span aria-hidden="true" />
              Preview only
            </span>
            <span className={styles.label}>Developed by</span>
            <strong className={styles.name}>Richmond Constante</strong>
          </div>
          <div className={styles.source}>
            <span className={styles.sourceLabel}>Sources</span>
            <a
              className={styles.sourceLink}
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the original design source on Dribbble (opens in a new tab)"
              title="Original design on Dribbble"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M7.1 4.5c4.1 4.7 7.1 10.2 8.4 15.8M3.2 10c5.7.4 10.8-1.2 15-5.1M5.2 18c3.4-5.3 8.5-7.5 15.6-6.2" />
              </svg>
            </a>
          </div>
        </div>
        <button
          className={styles.trigger}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={
            open
              ? "Hide developer credits"
              : "Show developer credits and sources"
          }
          onClick={() => setOpen((current) => !current)}
        >
          RC
        </button>
      </aside>
    </>
  );
}
