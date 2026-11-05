import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { D } from "../data";
import { Chips, Head, Rows } from "../components/ui";
import ProjectRow from "../components/ProjectRow";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle();
  const location = useLocation();
  const state = location.state as { scroll?: string } | null;

  useEffect(() => {
    if (state?.scroll === "contact") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const timer = setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location.key, state]);

  const mine = D.projects.filter((p) => p.grp === "me");
  const skills = Object.values(D.skills).flat();

  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("contact")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <section className="hero home">
        <div className="me">
          <div className="avatar" role="img" aria-label={D.name}>
            {D.photo ? <img src={D.photo} alt={D.name} /> : D.ini}
          </div>
          <span className="tg t1">Node.js</span>
          <span className="tg t2">python</span>
          <span className="tg t3">TypeScript</span>
        </div>
        <div>
          <span className="pill">
            <i aria-hidden="true" />
            {D.status}
          </span>
          <h1>
            Hi, I’m <em>{D.first}</em>
          </h1>
          <p className="role">{D.role}</p>
          <p className="sub">{D.lede}</p>
          <div className="cta-row">
            <a className="btn p" href="#contact" onClick={handleContactScroll}>
              Get in touch
            </a>
            <Link className="btn" to="/work">
              See my work
            </Link>
          </div>
          <Chips items={D.ach} />
          <div className="soc">
            {D.links.map((l) => (
              <a key={l[0]} href={l[1]} target="_blank" rel="noopener noreferrer">
                {l[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="s">
        <Head label="About" title="Hi, nice to meet you" />
        <p className="sub">{D.about}</p>
        <blockquote className="q">“{D.quote}”</blockquote>
      </section>

      <section className="s">
        <Head label="Experience" title="Work Experience" />
        <Rows items={D.exp} />
      </section>

      <section className="s">
        <Head label="Education" title="Where I study" />
        <Rows items={D.edu} />
      </section>

      <section className="s">
        <Head label="Skills" title="Tools & Technologies" />
        <Chips items={skills} big showIcons />
      </section>

      <section className="s">
        <Head label="Projects" title="I like building things" sub="Personal projects, academic work and experiments." />
        <div>
          {mine.map((p) => (
            <ProjectRow key={p.id} p={p} />
          ))}
        </div>
        <p className="mt-[22px] flex flex-wrap gap-3">
          <Link className="btn" to="/projects">
            All projects ›
          </Link>
          <Link className="btn" to="/work">
            Work at Crimson Tech ›
          </Link>
        </p>
      </section>

      <section className="s ctr" id="contact">
        <Head label="Contact" title="Get in touch" />
        <p className="sub">
          Want to chat? Send me an email at{" "}
          <a className="font-semibold text-accent" href={`mailto:${D.email}`}>
            {D.email}
          </a>{" "}
          and I’ll reply when I can.
        </p>
        <div className="cta-row">
          <a className="btn p" href={`mailto:${D.email}`}>
            Email me
          </a>
          {D.links.map((l) => (
            <a key={l[0]} className="btn" href={l[1]} target="_blank" rel="noopener noreferrer">
              {l[0]}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
