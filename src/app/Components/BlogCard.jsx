import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title:
      "Top Change Management Activities, Games and Exercises for Employees",
    slug: "/blog/change-management-activities-exercises-games-for-employees",
    image: "/change.webp",
    category: "Employee Activities, Games & Exercises",
    date: "June 11, 2026",
    type: "BLOG",
  },
  {
    title: "Top 40 Leadership Activities, Games and Exercises for Employees",
    slug: "/blog/leadership-activities-exercises-games-for-employees",
    image: "/employees.webp",
    category: "Employee Activities, Games & Exercises",
    date: "June 11, 2026",
    type: "BLOG",
  },
  {
    title:
      "Best Decision Making Games, Activities, and Exercises for Employees",
    slug: "/blog/decision-making-activities-exercises-games-for-employees",
    image: "/exercises.webp",
    category: "Employee Activities, Games & Exercises",
    date: "June 11, 2026",
    type: "BLOG",
  },
];

export default function BlogCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg"
        >
          <Link href={item.slug}>
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </Link>

          <div className="p-5">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-xs font-semibold uppercase text-white">
                Blog
              </span>

              <span className="text-sm text-gray-600">{item.category}</span>
            </div>

            <Link
              href={item.slug}
              className="block text-xl font-semibold leading-snug text-gray-900 hover:text-blue-600"
            >
              {item.title}
            </Link>

            <p className="mt-4 text-sm text-gray-500">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
