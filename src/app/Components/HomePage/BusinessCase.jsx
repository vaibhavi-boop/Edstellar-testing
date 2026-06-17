export function BusinessCase() {
  return (
    <section className="bg-[#EDE9DD] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Why It Matters
            </span>

            <h2 className="mt-5 text-6xl leading-none text-[#0A1628]">
              Leadership continuity
              <span className="font-serif italic font-normal">
                {" "}
                without disruption.
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              "Identify high-potential leaders.",
              "Reduce leadership transition risks.",
              "Strengthen internal talent pipelines.",
              "Support strategic workforce planning.",
            ].map((item) => (
              <div key={item} className="border-b pb-6">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
