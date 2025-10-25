import { FC } from "react";

const experiences = [
  {
    company: "라인 플러스",
    role: "Lead Product Manager",
    period: "2022 - Present",
    highlights: [
      "E2E product ownership for growth and engagement initiatives across Asia.",
      "Built cross-functional OKR system that increased roadmap confidence and alignment.",
      "Scaled experimentation pipeline that doubled the number of validated bets per quarter.",
    ],
  },
  {
    company: "Skyscanner",
    role: "Product Manager",
    period: "2019 - 2022",
    highlights: [
      "Led global monetization vertical balancing traveler UX and revenue growth.",
      "Delivered ML-powered ranking improvements used by 100M+ monthly visitors.",
      "Mentored product teams across Seoul, Singapore, London, and Barcelona offices.",
    ],
  },
  {
    company: "Nexon",
    role: "Product Manager",
    period: "2016 - 2019",
    highlights: [
      "Owned the world-wide launcher and platform modernization program.",
      "Coordinated multi-studio launch readiness with agile release playbook.",
      "Cultivated data-driven decision culture for live-ops teams.",
    ],
  },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/40">
      <div className="w-full px-4 sm:px-6 md:container md:mx-auto md:px-6">
        <div className="mb-12 md:mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Experience</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Product leadership across global teams</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            조직의 성장과 고객 가치를 동시에 높이기 위해 팀을 이끌어 온 여정입니다.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="rounded-2xl border border-border/40 bg-card p-8 shadow-sm transition hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{experience.company}</h3>
                  <p className="text-sm text-muted-foreground">{experience.role}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{highlight}</span>
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

export default Experience;
