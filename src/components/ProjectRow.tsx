import { Link } from "react-router-dom";
import type { Project } from "../data";
import { Chips } from "./ui";

export default function ProjectRow({ p }: { p: Project }) {
  return (
    <Link className="prow" to={`/${p.grp === "work" ? "work" : "projects"}/${p.id}`}>
      <span className="w">{p.yr}</span>
      <div className="prow-body">
        <h3>
          {p.n} <span className="prow-tag">· {p.tag}</span>
        </h3>
        <p>{p.b}</p>
        <Chips items={p.stack} />
      </div>
      <span className="more" aria-hidden="true">›</span>
    </Link>
  );
}
