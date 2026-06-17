export function Instruments() {
  const instruments = [
    "Talogy InView Leadership",
    "Diamond Leadership Profile",
    "Saville Wave Professional",
    "Talogy 360",
    "DiSC Work of Leaders",
    "VirtualAC",
    "Hogan Leadership Forecast",
    "Leadership Circle",
    "Executive Assessment Center",
  ];

  return (
    <section className="bg-[#FAFAF7] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-6xl text-[#0A1628]">
          Assessment
          <span className="font-serif italic"> instruments</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {instruments.map((item) => (
            <div key={item} className="rounded-lg border bg-white p-8">
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
