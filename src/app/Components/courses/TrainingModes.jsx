export default function TrainingModes({ modes }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Training Modes
          </span>

          <h2 className="text-4xl font-bold text-slate-900">
            Flexible Training Delivery Options
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Choose the delivery format that works best for your team, whether
            remote, in-office, or at an external training venue.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {modes.map((mode, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {mode.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-indigo-600">
                {mode.subtitle}
              </p>

              <ul className="mt-6 space-y-3">
                {mode.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex gap-3 text-base leading-7 text-slate-700"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
