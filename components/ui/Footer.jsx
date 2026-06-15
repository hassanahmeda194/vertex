"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#033C2D] via-[#064635] to-[#033C2D] text-white">
      {/* Top Gradient Line */}
      <div className="h-[3px] bg-gradient-to-r from-[#033C2D] via-[#BD9541] to-[#1F2429]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/vertex-logo..png"
                alt="Vertex"
                width={50}
                height={50}
                className="rounded-md"
              />

              <div>
                <h3 className="font-bold">Vertex</h3>
                <p className="text-xs uppercase tracking-[2px] text-[#BD9541]">
                  Print Solutions
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/70">
              Printing Excellence. Delivering Impact.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#BD9541]">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <Link href="/services">Designing</Link>
              </li>
              <li>
                <Link href="/services">Panaflex Printing</Link>
              </li>
              <li>
                <Link href="/services">UV DTF Sticker</Link>
              </li>
              <li>
                <Link href="/services">Bill Books</Link>
              </li>
              <li>
                <Link href="/services">Letterhead</Link>
              </li>
              <li>
                <Link href="/services">Pamphlet</Link>
              </li>
              <li>
                <Link href="/services">Tri-Folder</Link>
              </li>
              <li>
                <Link href="/services">Visiting Cards</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#BD9541]">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/order">Book an Order</Link>
              </li>
              <li>
                <Link href="/quote">Request a Quote</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/login">Customer Login</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#BD9541]">
              Get In Touch
            </h4>

            <div className="space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#BD9541]" />
                <span>Karachi, Pakistan</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-[#BD9541]" />
                <span>+92 308 2283078</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[#BD9541]" />
                <span>vertexprintsolutions@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle size={16} className="mt-1 text-[#BD9541]" />
                <span>WhatsApp Us</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.236 2.686.236v2.963H15.83c-1.491 0-1.956.931-1.956 1.887v2.26h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.099 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} Vertex Print Solutions. All Rights
            Reserved.
          </p>

          <p>Printing Excellence. Delivering Impact.</p>
        </div>
      </div>
    </footer>
  );
}
