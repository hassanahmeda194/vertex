"use client";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Send,
} from "lucide-react";

export default function ContactInfoForm() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          {/* Left Side */}
          <div>
            <div className="space-y-4">
              {/* Whatsapp */}
              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="text-green-600" />
                  </div>

                  <div>
                    <p className="text-xs uppercase text-slate-500">WhatsApp</p>

                    <h4 className="font-bold text-[#021B52]">
                      +92 318 2287473
                    </h4>

                    <p className="text-sm text-slate-500">
                      Fastest response • Tap to chat
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#021B52]">
                    <Phone className="text-[#D8A53B]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase text-slate-500">Phone</p>

                    <h4 className="font-bold text-[#021B52]">
                      +92 318 2287473
                    </h4>

                    <p className="text-sm text-slate-500">Mon-Sat • 10am-9pm</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <Mail className="text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-xs uppercase text-slate-500">Email</p>

                    <h4 className="font-bold text-[#021B52]">
                      hello@vertexprint.com
                    </h4>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <MapPin className="text-pink-600" />
                  </div>

                  <div>
                    <p className="text-xs uppercase text-slate-500">Address</p>

                    <h4 className="font-bold text-[#021B52]">
                      Karachi, Pakistan
                    </h4>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3 pt-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-white">
                  f
                </button>

                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border bg-white hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#021B52]"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[32px] border bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-3xl font-bold text-[#021B52]">
              Send us a message
            </h2>

            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="+92 3xx xxxxxxx"
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What do you need printed?"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Quantity, size, deadline, any special requirements..."
                  className="w-full rounded-xl border p-4 outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D8A53B] py-4 font-semibold text-[#021B52]"
              >
                <Send size={18} />
                Send Message
              </button>

              <p className="text-center text-xs text-slate-500">
                Your message opens in WhatsApp for the fastest reply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
