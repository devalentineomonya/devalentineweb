import { FadeUp } from "@/components/ui/fade-up";
import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/components/layout/section-layout";
import { WorkCard } from "@/components/ui/work-card";
import { workProjects } from "@/data/work";
import { ArrowRightIcon } from "@/components/ui/icons";

export const WorkSection = () => (
  <SectionLayout id="work" title="My Work.">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {workProjects
        .filter((p) => !p.archived)
        .slice(0, 3)
        .map((project, idx) => (
          <FadeUp
            key={project.title}
            delay={0.1 * (idx + 1)}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <WorkCard project={project} />
          </FadeUp>
        ))}
    </div>

    <FadeUp delay={0.4}>
      <div className="mt-8 flex justify-end">
        <Button href="/work" variant="white">
          VIEW ALL PROJECTS
          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </FadeUp>
  </SectionLayout>
);
