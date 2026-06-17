"use client";

import FAQItem from "./FAQItem";

export default function FAQSection({ data }) {
  if (!data || !data.items?.length) return null;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-slate-950 mb-12">
          {data.title}
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-24">
          {data.para}
        </p>

        <div className="space-y-4">
          {data.items.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
