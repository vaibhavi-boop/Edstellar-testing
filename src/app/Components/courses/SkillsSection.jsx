export default function SkillsSection({ skills }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Key Skills Covered
          </span>

          <h2 className="text-4xl font-bold text-slate-900">
            Skills Your Team Will Gain
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Build practical ESG reporting and assurance capabilities that help
            teams deliver accurate, auditable, and investor-ready disclosures.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                <span className="text-xl font-bold text-indigo-600">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
