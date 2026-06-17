import Image from "next/image";
const benefits = [
  {
    title: "In-person/Virtual",
    description: "Expert-led training delivered anywhere, anytime",
    image: "/In-person_Virtual.webp",
  },
  {
    title: "Effective",
    description: "Transformative with high retention",
    image: "/Effective.webp",
  },
  {
    title: "Experiential",
    description: "Deeper comprehension with hands-on exercises",
    image: "/Experiential.webp",
  },
  {
    title: "Interactive",
    description: "Real-time clarification and feedback",
    image: "/Interactive.webp",
  },
  {
    title: "Customized",
    description: "Tailored to business goals",
    image: "/Customized.webp",
  },
];
function Latest() {
  return (
    <section className="py-16 bg-white flex flex-col gap-6">
      <h2 className="text-3xl text-center">
        Transform Your Organizational Learning with a <br />
        Premier Corporate Training Provider
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-[20px] font-semibold text-[#2E52D9] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-base leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Latest;
