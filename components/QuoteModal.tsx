"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function QuoteModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Thank you! Your quote request has been sent.");
      onClose();
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="relative w-full max-w-2xl rounded-3xl bg-[#07131B] p-8 border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            <h2 className="text-4xl font-black text-white">
              Request a Quote
            </h2>

            <p className="mt-2 text-gray-400">
              Tell us about your project and we'll get back to you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-5"
            >
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="rounded-xl bg-[#111C24] p-4 text-white outline-none"
              />

              <input
                placeholder="Company"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                className="rounded-xl bg-[#111C24] p-4 text-white outline-none"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="rounded-xl bg-[#111C24] p-4 text-white outline-none"
              />

              <input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="rounded-xl bg-[#111C24] p-4 text-white outline-none"
              />

              <select
                required
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
                className="rounded-xl bg-[#111C24] p-4 text-white outline-none"
              >
                <option value="">Select a Service</option>
                <option>Printing</option>
                <option>Signage</option>
                <option>Vehicle Branding</option>
                <option>Shopfitting</option>
                <option>CNC Cutting</option>
                <option>Large Format Printing</option>
                <option>Vinyl Stickers</option>
                <option>Other</option>
              </select>

              <textarea
                required
                rows={6}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="rounded-xl bg-[#111C24] p-4 text-white outline-none resize-none"
              />

              <button
                disabled={loading}
                className="mt-2 rounded-xl bg-[#00A651] py-4 font-bold text-white hover:bg-[#00C853] transition"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </span>
                ) : (
                  "SEND QUOTE REQUEST"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}