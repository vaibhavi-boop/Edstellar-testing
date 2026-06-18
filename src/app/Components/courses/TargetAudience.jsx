export default function TargetAudience({ audience, prerequisites }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              Target Audience
            </span>

            <h2 className="text-4xl font-bold leading-tight text-slate-900">
              Who Should Attend This Training?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This course is ideal for professionals involved in ESG reporting,
              sustainability data, compliance, finance, audit, and investor
              communication.
            </p>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audience.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Prerequisites
              </h3>

              <p className="text-base leading-7 text-slate-700">
                {prerequisites}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
