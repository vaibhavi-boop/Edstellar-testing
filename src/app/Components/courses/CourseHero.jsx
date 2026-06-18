export default function CourseHero({ data }) {
  return (
    <section className="bg-[#050816] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-indigo-300">
            Corporate Training Course
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            {data.title}
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
            {data.description}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Duration</p>
              <h3 className="mt-1 text-lg font-semibold">{data.duration}</h3>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Delivery Type</p>
              <h3 className="mt-1 text-lg font-semibold">
                {data.deliveryType}
              </h3>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Available In</p>
              <h3 className="mt-1 text-lg font-semibold">
                {data.languagesCount}
              </h3>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#course-outline"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              View Course Outline
            </a>

            <a
              href="#enquire"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Enquire Now
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Looking for multiple trainings? Get a detailed quote for group
            training.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <img
              src={data.image}
              alt={data.title}
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
