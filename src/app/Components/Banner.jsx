import React from "react";
import { CheckCircle2, Download } from "lucide-react";

function Banner({ data }) {
  return (
    <section className="w-full bg-[#101C31] text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-[60%,40%] gap-12 items-center">
        <div className="space-y-10">
          <nav className="text-sm flex items-center flex-wrap gap-1 opacity-80">
            {data.breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {index !== data.breadcrumb.length - 1 && (
                  <span className="text-[#BFDB38]">{">"}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-[#BFDB38]">{data.titleHighlight}</span>{" "}
            {data.titleRest}
          </h1>

          {/* Description */}
          <p className="text-base leading-relaxed max-w-2xl">
            {data.description}
          </p>

          {/* Features */}
          <ul className="space-y-4 pt-4">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#BFDB38]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-[#BFDB38] text-black font-semibold py-3 px-8 rounded-full">
              Request a Strategy Consultation
            </button>

            <button className="border border-white py-3 px-8 rounded-full flex items-center gap-2">
              <span>Download Brochure</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src={data.image}
            alt={data.titleHighlight}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
