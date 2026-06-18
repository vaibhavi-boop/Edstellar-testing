export default function LearningOutcomes({ outcomes }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Learning Outcomes
          </span>

          <h2 className="text-4xl font-bold text-slate-900">
            What Your Team Will Learn
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            By the end of this ESG Data Assurance and Reporting training,
            participants will be able to manage ESG data, apply assurance
            standards, and prepare reliable sustainability reports.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                ✓
              </div>

              <p className="text-base leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
