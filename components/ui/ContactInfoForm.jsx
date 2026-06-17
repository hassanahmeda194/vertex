"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function ContactInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "923082283078";

    const message = `
New Contact Form Submission

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-[#F7F8F5] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          {/* LEFT SIDE (same as yours) */}
          <div>
            <div className="space-y-4">
              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">WhatsApp</p>
                    <h4 className="font-bold text-[#033C2D]">
                      +92 308 2283078
                    </h4>
                    <p className="text-sm text-slate-500">
                      Fastest response • Tap to chat
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#033C2D]">
                    <Phone className="text-[#BD9541]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Phone</p>
                    <h4 className="font-bold text-[#033C2D]">
                      +92 308 2283078
                    </h4>
                    <p className="text-sm text-slate-500">Mon-Sat • 10am-9pm</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E2ECE7]">
                    <Mail className="text-[#033C2D]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Email</p>
                    <h4 className="font-bold text-[#033C2D]">
                      vertexprintsolutions@gmail.com
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-5 shadow-sm">
                <div>
                  <MapPin className="text-[#BD9541]" />
                  <p className="text-xs uppercase text-slate-500">Address</p>
                  <h4 className="font-bold text-[#033C2D]">
                    Karachi, Pakistan
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[32px] border bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-3xl font-bold text-[#033C2D]">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                required
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 3xx xxxxxxx"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                required
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                required
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What do you need printed?"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Quantity, size, deadline..."
                className="w-full rounded-xl border p-4 outline-none"
                required
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#BD9541] py-4 font-semibold text-[#033C2D]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
