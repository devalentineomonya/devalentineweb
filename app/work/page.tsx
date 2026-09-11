import { WorkCard } from "@/components/ui/work-card";
import { workProjects } from "@/data/work";

export default function WorkPage() {
  const activeProjects = workProjects.filter((p) => !p.archived);
  const archivedProjects = workProjects.filter((p) => p.archived);

  return (
    <main className="flex-grow w-full px-6 flex flex-col pb-24 pt-12 sm:pt-20">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">
          Work.
        </h1>
        <p className="font-mono text-sm text-gray-600 mb-16 max-w-2xl">
          A collection of robust, scalable applications and tools I've built to
          solve real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {activeProjects.map((project) => (
            <div
              key={project.title}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <WorkCard project={project} />
            </div>
          ))}
        </div>

        {archivedProjects.length > 0 && (
          <>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-8 mt-32 border-t border-black pt-16 text-black">
              Archived.
            </h2>
            <div className="flex flex-col gap-4 w-full opacity-80 hover:opacity-100 transition-opacity duration-300">
              {archivedProjects.map((project) => (
                <WorkCard key={project.title} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
