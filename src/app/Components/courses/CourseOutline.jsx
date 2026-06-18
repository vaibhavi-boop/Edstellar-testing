export default function CourseOutline({ curriculum }) {
  return (
    <section id="course-outline" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Course Outline
          </span>

          <h2 className="text-4xl font-bold text-slate-900">
            ESG Data Assurance and Reporting Training Curriculum
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            A structured curriculum designed to help teams understand ESG data
            governance, assurance standards, internal controls, and reporting
            frameworks.
          </p>
        </div>

        <div className="space-y-6">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.module}
                </h3>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {item.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
