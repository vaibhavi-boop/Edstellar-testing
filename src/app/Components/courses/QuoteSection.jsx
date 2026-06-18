export default function QuoteSection({ cta }) {
  return (
    <section id="enquire" className="bg-[#050816] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-indigo-200">
              Request Quote
            </span>

            <h2 className="text-4xl font-bold leading-tight">{cta.title}</h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {cta.description}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <input
                type="email"
                placeholder="Business Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <textarea
                placeholder="Training Requirement"
                rows="4"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500"
              >
                {cta.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
