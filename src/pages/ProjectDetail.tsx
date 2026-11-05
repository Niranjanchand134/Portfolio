import { Link, Navigate, useParams } from "react-router-dom";
import { D } from "../data";
import { Chips } from "../components/ui";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = D.projects.find((x) => x.id === id);
  usePageTitle(p ? `${p.n} case study` : undefined);
  if (!p) return <Navigate to="/" replace />;

  return (
    <section className="s">
      <Link className="back-link" to={p.grp === "work" ? "/work" : "/projects"}>
        ‹ Back
      </Link>
      <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)" }}>{p.n}</h1>
      <p className="sub">{p.b}</p>
      <Chips items={[p.tag, p.role, p.yr]} />
      <div className="cards">
        <div className="card">
          <h3>Challenge</h3>
          <p>{p.ch}</p>
        </div>
        <div className="card">
          <h3>Solution</h3>
          <p>{p.so}</p>
        </div>
        <div className="card">
          <h3>Results</h3>
          <ul className="disc">
            {p.re.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h3>Built with</h3>
        <Chips items={p.stack} />
      </div>
      {p.link && (
        <div style={{ marginTop: "24px" }}>
          <a className="btn p" href={p.link} target="_blank" rel="noopener noreferrer">
            Visit project
          </a>
        </div>
      )}
    </section>
  );
}
