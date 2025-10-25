import { FC } from "react";

const caseStudies = [
  {
    company: "Skyscanner",
    role: "Global Search Monetization PM",
    summary:
      "Grew the monetization channel by aligning product and sales teams, prioritizing visitor experience, and driving data-informed iteration.",
    stats: [
      "+25% conversion rate",
      "+18% partner revenue",
      "-12% complaint volume",
    ],
  },
  {
    company: "Nexon",
    role: "Platform PM",
    summary:
      "Shipped experiment-driven updates for the global game launcher, enabling confident rollouts and reducing release time across regions.",
    stats: [
      "3x faster release cadence",
      "Millions of MAU migrated",
      "Company-wide launch standard",
    ],
  },
];

const CaseStudies: FC = () => {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-background text-foreground">
      <div className="w-full px-4 sm:px-6 md:container md:mx-auto md:px-6">
        <div className="mb-12 md:mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-semibold">Evidence of impact</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            선택과 집중, 데이터 기반 실행, 그리고 빠른 실험으로 만들어 낸 대표적인 프로젝트들입니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="rounded-2xl border border-border/40 bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">{study.role}</p>
                </div>
                <span className="rounded-full border border-primary/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Focus
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {study.summary}
              </p>

              <ul className="mt-8 flex flex-wrap gap-3 text-sm text-foreground">
                {study.stats.map((item) => (
                  <li key={item} className="rounded-full bg-muted px-4 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
