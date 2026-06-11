"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="bg-[#F4F5F7]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/vertex-logo..png"
                alt="Vertex Print Solutions"
                width={200}
                height={200}
                className="object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2 rounded-full bg-[#ECEFF3] px-3 py-2">
              {navLinks.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2 text-sm font-medium transition ${
                    index === 0
                      ? "rounded-full bg-white text-[#1F2937] shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <Link
                href="services"
                className="rounded-full bg-[#D9A63A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c89527]"
              >
                Book an Order
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Gradient Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />
    </>
  );
}
