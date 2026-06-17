import BlogCard from "../BlogCard";
function Blogs() {
  return (
    <section className="py-16 bg-white flex flex-col gap-6">
      <h2 className="text-3xl text-center">Edstellar Resources</h2>
      <div className="max-w-[1280px] mx-auto">
        <BlogCard />
      </div>
    </section>
  );
}

export default Blogs;
