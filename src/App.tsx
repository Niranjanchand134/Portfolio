import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dock from "./components/Dock";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const { pathname, state } = useLocation();

  // Scroll to top on page change, unless we are heading for the contact section.
  useEffect(() => {
    if (!(state as { scroll?: string } | null)?.scroll) window.scrollTo(0, 0);
  }, [pathname, state]);

  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
      </div>
      <main key={pathname} className="wrap pg" id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Projects group="work" />} />
          <Route path="/projects" element={<Projects group="me" />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Dock />
    </>
  );
}
