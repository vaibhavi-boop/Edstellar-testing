import Link from "next/link";
import { Mail, CheckCircle2 } from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2E2F72] text-white">
      {/* Top Contact Bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-10">
          <div className="flex flex-wrap items-center justify-center gap-6 py-5 text-sm md:text-base">
            <span className="font-semibold">Reach Us:</span>

            <a
              href="mailto:contact@edstellar.com"
              className="flex items-center gap-2 text-white/90"
            >
              <Mail size={18} />
              contact@edstellar.com
            </a>

            <span className="hidden md:block h-5 w-px bg-white/20" />

            <a href="tel:+16822974830" className="text-white/90">
              🇺🇸 +1 682 297 4830
            </a>

            <span className="hidden md:block h-5 w-px bg-white/20" />

            <a href="tel:+441514534009" className="text-white/90">
              🇬🇧 +44 151 453 4009
            </a>

            <span className="hidden md:block h-5 w-px bg-white/20" />

            <a href="tel:+916364833830" className="text-white/90">
              🇮🇳 +91 636 483 3830
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr]">
          {/* Left Column */}
          <div>
            <img
              src="/Edstellar.svg"
              className="h-15 brightness(0) invert(1)"
              alt="Edstellar"
            />
            <p className="max-w-sm text-[17px] leading-8 text-white/90">
              Edstellar is a one-stop instructor-led corporate training and
              coaching solution that addresses organizational upskilling and
              talent transformation needs globally.
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-bold uppercase">
              Follow Us
            </h3>

            <div className="flex gap-3">
              <SocialIcon>
                <FaLinkedinIn />
              </SocialIcon>

              <SocialIcon>
                <FaFacebookF />
              </SocialIcon>

              <SocialIcon>
                <FaXTwitter />
              </SocialIcon>

              <SocialIcon>
                <FaInstagram />
              </SocialIcon>

              <SocialIcon>
                <FaYoutube />
              </SocialIcon>
            </div>

            <div className="mt-10">
              <h4 className="mb-4 text-xl font-semibold">
                Quality and Compliance
              </h4>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-lime-400" />
                  ISO 9001:2015 Certified
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-lime-400" />
                  ISO 27001:2022 Certified
                </div>
              </div>
            </div>
          </div>

          {/* Training Programs */}
          <FooterColumn
            title="Training Programs"
            links={[
              "IT & Technical Training",
              "Management Training",
              "Leadership Training",
              "Behavioral Training",
              "Compliance Training",
              "Social Impact Training",
              "Browse All 2,000+ Courses",
            ]}
          />

          {/* Excellence */}
          <FooterColumn
            title="Excellence"
            links={[
              "Sales Excellence",
              "Marketing Excellence",
              "Operational Excellence",
              "Finance Excellence",
              "HR Excellence",
              "IT Excellence",
              "Customer Service",
              "Leadership Excellence",
              "Quality Management",
            ]}
          />

          {/* Platform */}
          <FooterColumn
            title="Platform"
            links={[
              "Training Management Software",
              "How it Works",
              "FAQ's",
              "Corporate Training Catalog",
              "Stellar AI",
              "Skill Matrix",
              "HRMS Integration",
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              "About us",
              "Who We Serve",
              "CEO Retreats",
              "Pricing",
              "Training Delivery",
              "Partner with Edstellar",
              "Careers",
              "Contact Us",
            ]}
          />

          {/* Resources */}
          <div>
            <FooterColumn
              title="Resources"
              links={["Blog", "L&D Resources", "Sitemap"]}
            />

            <div className="mt-10">
              <h3 className="mb-5 text-xl font-semibold">Trainers</h3>

              <div className="space-y-4">
                <a
                  href="#"
                  title="Click Here to View Trainer"
                  className="block text-white/90 hover:text-white"
                >
                  Trainer
                </a>

                <a
                  href="#"
                  title="Click Here to View Join as Trainer"
                  className="block text-white/90 hover:text-white"
                >
                  Join as Trainer
                </a>

                <a
                  href="#"
                  title="Click Here to View Write for Us"
                  className="block text-white/90 hover:text-white"
                >
                  Write for Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/20 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-white/70">
              © 2021–2026 Edstellar. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-white/70">
              <a href="#">Modern Slavery</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Footer Links */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold">{title}</h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              title={`Click Here to View ${link}`}
              className="text-white/90 transition hover:text-white"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icons */
function SocialIcon({ children }) {
  return (
    <a
      href="#"
      className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-lg transition hover:bg-white/20"
    >
      {children}
    </a>
  );
}
