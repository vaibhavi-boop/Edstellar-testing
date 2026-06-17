export default function Hero() {
  return (
    <section className="bg-[#FAFAF7] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.8fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Lifecycle Assessments
            </span>

            <h1 className="mt-6 text-[clamp(48px,6vw,88px)] leading-[0.95] font-semibold text-[#0A1628]">
              Succession Planning Assessments,
              <span className="font-serif italic font-normal">
                {" "}
                an evidence-based leadership pipeline.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Build leadership bench strength with validated succession planning
              assessments, behavioral evidence and simulation-based evaluation
              frameworks.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-full bg-[#0A1628] px-8 py-4 text-white">
                Request Assessment
              </button>

              <button className="rounded-full border border-slate-300 px-8 py-4">
                View Instruments
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#F4F1E8] p-8">
            <h3 className="mb-6 text-sm uppercase tracking-[0.2em]">
              Assessment Instruments
            </h3>

            <div className="space-y-3">
              {[
                "Talogy InView Leadership",
                "Saville Wave Professional",
                "Talogy 360",
                "DiSC Work of Leaders",
                "VirtualAC",
                "Diamond Leadership",
              ].map((item) => (
                <div key={item} className="rounded-md border bg-white p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
