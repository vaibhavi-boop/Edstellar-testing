export default function CertificateSection({ certificate }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              Course Certificate
            </span>

            <h2 className="text-4xl font-bold leading-tight text-slate-900">
              {certificate.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {certificate.description}
            </p>

            <a
              href="#enquire"
              className="mt-8 inline-block rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Get Team Training Quote
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="rounded-xl border-4 border-indigo-100 bg-white p-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-600">
                Certificate of Completion
              </p>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                ESG Data Assurance and Reporting
              </h3>

              <p className="mt-4 text-slate-600">
                Awarded after successful completion of the corporate training
                program.
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="font-semibold text-slate-900">Edstellar</p>
                <p className="text-sm text-slate-500">
                  Corporate Training Certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
