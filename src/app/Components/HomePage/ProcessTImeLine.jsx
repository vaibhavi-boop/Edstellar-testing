export function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      title: "Stakeholder Alignment",
      description:
        "Define succession objectives, critical leadership roles, competency framework, and participant groups.",
    },
    {
      step: "02",
      title: "Assessment Design",
      description:
        "Select validated assessment instruments, simulations, and 360-degree feedback mechanisms.",
    },
    {
      step: "03",
      title: "Assessment Administration",
      description:
        "Conduct psychometric assessments, leadership evaluations, simulations, and structured interviews.",
    },
    {
      step: "04",
      title: "Data Integration",
      description:
        "Combine assessment outputs into a unified leadership readiness and potential profile.",
    },
    {
      step: "05",
      title: "Talent Review",
      description:
        "Facilitate calibration discussions with leadership teams to identify successors and risk areas.",
    },
    {
      step: "06",
      title: "Development Planning",
      description:
        "Create personalized development roadmaps and succession readiness plans.",
    },
  ];

  return (
    <section className="bg-[#0A1628] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Assessment Process
          </span>

          <h2 className="mt-4 text-[clamp(40px,5vw,72px)] leading-[0.95] font-semibold">
            Succession Planning
            <span className="font-serif italic font-normal">
              {" "}
              Process Timeline
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            A structured multi-stage process that identifies leadership
            potential, evaluates readiness, and creates evidence-based
            succession pipelines.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-px bg-slate-700 hidden md:block" />

          <div className="space-y-12">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative grid gap-8 md:grid-cols-[80px_1fr]"
              >
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-lime-400 bg-[#13233B] text-xl font-semibold text-lime-400">
                    {item.step}
                  </div>
                </div>

                <div className="pb-8">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
