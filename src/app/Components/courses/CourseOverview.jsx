export default function CourseOverview({ data }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              Overview
            </span>

            <h2 className="text-4xl font-bold leading-tight text-slate-900">
              {data.title}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">{data.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
