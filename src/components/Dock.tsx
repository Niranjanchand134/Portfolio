import type { ReactElement } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const icons: Record<string, ReactElement> = {
  home: <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />,
  work: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </>
  ),
  projects: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
};

const Icon = ({ k }: { k: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {icons[k]}
  </svg>
);

const links = [
  { to: "/", label: "Home", k: "home", end: true },
  { to: "/work", label: "Work", k: "work", end: false },
  { to: "/projects", label: "Projects", k: "projects", end: false },
];

export default function Dock() {
  const { theme, toggle } = useTheme();
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("contact")?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <nav className="dock" aria-label="Primary navigation">
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          className="dock-item"
          aria-label={l.label}
          title={l.label}
        >
          <Icon k={l.k} />
        </NavLink>
      ))}
      <Link
        to="/"
        state={{ scroll: "contact" }}
        onClick={handleContactClick}
        className="dock-item"
        aria-label="Contact"
        title="Contact"
      >
        <Icon k="contact" />
      </Link>
      <button
        type="button"
        onClick={toggle}
        className="dock-item"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        <Icon k={theme === "dark" ? "sun" : "moon"} />
      </button>
    </nav>
  );
}
