const framework = [
  {
    no: "I",
    title: "Leadership Potential Assessment",
    para: "Psychometric instruments measuring the internal characteristics, personality, cognitive style, and leadership potential, that predict whether someone will succeed at a higher level. Self-reported and standardised against norm groups.",
  },
  {
    no: "II",
    title: "Multi-Rater Behavioural Evidence",
    para: "Psychometric instruments measuring the internal characteristics, personality, cognitive style, and leadership potential, that predict whether someone will succeed at a higher level. Self-reported and standardised against norm groups.",
  },
  {
    no: "III",
    title: "Simulation-Based Performance Evidence",
    para: "Psychometric instruments measuring the internal characteristics, personality, cognitive style, and leadership potential, that predict whether someone will succeed at a higher level. Self-reported and standardised against norm groups.",
  },
];

export function Framework() {
  return (
    <section className="bg-[#EDE9DD] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-5xl font-semibold text-[#0A1628]">
          Multi-method
          <span className="font-serif italic"> framework</span>
        </h2>

        <div className="grid gap-1 md:grid-cols-3">
          {framework.map((item) => (
            <div
              key={item.no}
              className="bg-white border-t-2 border-lime-400 p-8"
            >
              <div className="font-serif text-4xl italic text-lime-500">
                {item.no}
              </div>

              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
