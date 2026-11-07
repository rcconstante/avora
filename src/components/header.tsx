"use client";
import { useState } from "react";
import { Icon } from "./icon";
const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Service", "service"],
  ["FAQ", "faq"],
  ["Event", "event"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Avora home">
        AVORA
      </a>
      <nav
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
        id="main-navigation"
      >
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <span className="language" title="This website is in English">
          EN <span aria-hidden="true">›</span>
        </span>
        <span className="header-dot" aria-hidden="true">
          ·
        </span>
        <a className="contact-button" href="#contact">
          CONTACT
        </a>
      </div>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        <Icon name="menu" />
      </button>
    </header>
  );
}
