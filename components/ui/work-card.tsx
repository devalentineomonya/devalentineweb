import { CornerDots } from "@/components/ui/corner-dots";
import { BrowserFrame, PhoneFrame } from "@/components/ui/device-frames";
import { ArrowRightIcon } from "@/components/ui/icons";
import { WorkProject } from "@/data/work";

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case "Personal":
    case "Brand":
      return "bg-black text-white";
    case "Volunteer":
      return "bg-gray-200";
    default:
      return "bg-white";
  }
};

export const WorkCard = ({ project }: { project: WorkProject }) => {
  if (project.archived) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative flex flex-col sm:flex-row sm:items-center justify-between border border-black p-4"
      >
        <CornerDots />
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
          <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">
            Archived
          </span>
        </div>
        <p className="font-mono text-sm text-gray-700 max-w-xl sm:text-right">
          {project.description}
        </p>
      </a>
    );
  }

  const { featured } = project;
  const domain = new URL(project.url).hostname.replace(/^www\./, "");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col border border-black bg-white"
    >
      <CornerDots />

      {project.image && (
        <div
          className={`relative overflow-hidden border-b border-black bg-gray-50 ${
            featured ? "h-[420px] sm:h-[440px]" : "h-[420px] sm:h-80"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(#00000026_1px,transparent_1px)] bg-[size:16px_16px]"
          />
          <span
            className={`absolute left-4 top-4 z-10 border border-black px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest ${getCategoryBadgeClass(project.category)}`}
          >
            {project.category}
          </span>

          <div
            className={`absolute left-1/2 top-14 hidden aspect-[16/10] -translate-x-1/2 transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:block ${
              featured ? "w-[82%]" : "w-[86%]"
            }`}
          >
            <BrowserFrame
              src={project.image}
              alt={`${project.title} desktop preview`}
              sizes={
                featured
                  ? "(max-width: 1200px) 82vw, 950px"
                  : "(max-width: 768px) 86vw, 500px"
              }
              domain={domain}
            />
          </div>

          <div className="absolute left-1/2 top-10 h-[560px] w-[260px] -translate-x-1/2 transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:hidden">
            <PhoneFrame
              src={project.mobileImage ?? project.image}
              alt={`${project.title} mobile preview`}
              sizes="260px"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          {project.year && (
            <span className="shrink-0 pt-1 font-mono text-xs tabular-nums text-gray-600">
              {project.year}
            </span>
          )}
        </div>
        <p
          className={`font-mono text-sm leading-7 mb-6 text-gray-800 group-hover:text-black transition-colors duration-300 ${
            featured ? "max-w-3xl" : ""
          }`}
        >
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] uppercase font-bold tracking-widest border border-black px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-black bg-gray-50 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover:bg-black group-hover:text-white sm:px-6">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-current" />
          {project.status ?? "Live"}
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate normal-case tracking-normal font-medium">
            {domain}
          </span>
          <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
};
