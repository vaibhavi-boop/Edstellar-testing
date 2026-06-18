export default function WhyEdstellar({ items }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Why Edstellar
          </span>

          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Edstellar for Corporate Training?
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Edstellar delivers customized, instructor-led corporate training
            programs designed for global teams and enterprise learning needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
