"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, WhatsappLogo, ChatCircleDots, X } from "@phosphor-icons/react";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { enquiry, useEnquiryOpen } from "@/components/ui/enquiry-store";
import { defaultSiteSettings, getSiteSettings } from "@/sanity/site-settings";

/**
 * Three sticky floating actions (Call, WhatsApp, Enquiry) plus the enquiry popup
 * modal. Mounted once at the page root (via the async StickyActions wrapper
 * below, which fetches CMS contact info). Any CTA can open the modal via the store.
 */
function StickyActionsClient({ phone, whatsapp }: { phone: string; whatsapp: string }) {
  const open = useEnquiryOpen();

  // lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && enquiry.close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* sticky buttons */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
        <a
          href={`tel:${phone}`}
          aria-label="Call us"
          className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full bg-emerald-600 text-white shadow-[0_14px_30px_-8px_rgba(21,118,214,0.6)] transition-all hover:-translate-y-1 hover:bg-emerald-700"
        >
          <Phone size={24} weight="fill" />
        </a>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-1 hover:brightness-105"
        >
          <WhatsappLogo size={26} weight="fill" />
        </a>
        <button
          onClick={() => enquiry.open()}
          aria-label="Open enquiry form"
          className="relative grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full bg-gold-400 text-pine-900 shadow-[0_14px_30px_-8px_rgba(255,198,46,0.7)] transition-all hover:-translate-y-1 hover:bg-gold-300"
        >
          <ChatCircleDots size={26} weight="fill" />
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold-400/60" />
        </button>
      </div>

      {/* enquiry popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-pine-900/60 backdrop-blur-sm"
              onClick={() => enquiry.close()}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Enquiry form"
            >
              {/* header */}
              <div className="sticky top-0 flex items-start justify-between gap-4 rounded-t-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white sm:p-7">
                <div>
                  <h3 className="font-display text-2xl font-bold">Get free counselling</h3>
                  <p className="mt-1 text-sm text-white/80">
                    Fill this in and a counsellor calls you back within a day.
                  </p>
                </div>
                <button
                  onClick={() => enquiry.close()}
                  aria-label="Close"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>

              <div className="p-6 sm:p-7">
                <EnquiryForm compact />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Server wrapper: fetches CMS contact info (falling back to the defaults if
 * unset) and renders the client component. Import and mount this — not
 * StickyActionsClient directly — so every page picks up CMS edits.
 */
export async function StickyActions() {
  const { phoneDial, whatsapp } = await getSiteSettings();
  return (
    <StickyActionsClient
      phone={phoneDial || defaultSiteSettings.phoneDial}
      whatsapp={whatsapp || defaultSiteSettings.whatsapp}
    />
  );
}
