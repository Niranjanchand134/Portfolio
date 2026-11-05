import type { Exp } from "../data";
import { SkillIcon } from "./SkillIcon";

export const Head = ({
  label,
  title,
  sub,
}: {
  label?: string;
  title: string;
  sub?: string;
}) => (
  <div className="section-head">
    {label && <p className="lbl">/ {label}</p>}
    <h2>{title}</h2>
    {sub && <p className="sub">{sub}</p>}
  </div>
);

export const Chips = ({
  items,
  big = false,
  showIcons = false,
}: {
  items: string[];
  big?: boolean;
  showIcons?: boolean;
}) => (
  <ul className={big ? "chips big" : "chips"}>
    {items.map((i) => (
      <li key={i} className="chip-item">
        {showIcons && (
          <span className="chip-icon" aria-hidden="true">
            <SkillIcon name={i} />
          </span>
        )}
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

export const ExpRow = ({ item }: { item: Exp }) => (
  <div className="exp-row">
    <div className={`exp-logo${item.logoVariant ? ` ${item.logoVariant}-logo` : ""}`} aria-hidden="true">
      {item.logo ? (
        <img src={item.logo} alt="" loading="lazy" />
      ) : (
        <span className="exp-logo-fallback">{item.logoText ?? item.o[0]}</span>
      )}
    </div>
    <div className="exp-content">
      <div className="exp-org">{item.o}</div>
      <div className="exp-role">{item.t}</div>
      {item.location && <div className="exp-location">{item.location}</div>}
      {item.p && (
        <ul className="exp-points">
          {item.p.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
    <div className="exp-date">{item.w}</div>
  </div>
);

export const Rows = ({ items }: { items: Exp[] }) => (
  <div className="exp-list">
    {items.map((e) => (
      <ExpRow key={e.o + e.w} item={e} />
    ))}
  </div>
);
