import { D } from "../data";
import { Head } from "../components/ui";
import ProjectRow from "../components/ProjectRow";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Projects({ group }: { group: "work" | "me" }) {
  const work = group === "work";
  usePageTitle(work ? "Work" : "Projects");
  return (
    <section className="s">
      <Head
        label={work ? "Work" : "Projects"}
        title={work ? "Products I help build" : "My projects"}
        sub={work ? "Descriptions of products I help build and scale." : "Personal projects, academic work and experiments."}
      />
      <div>
        {D.projects
          .filter((p) => p.grp === group)
          .map((p) => (
            <ProjectRow key={p.id} p={p} />
          ))}
      </div>
    </section>
  );
}
