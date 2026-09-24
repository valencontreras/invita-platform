"use client";

import { motion, type Variants } from "framer-motion";
import { siteConfig, whatsappLink } from "@/lib/content/site";
import { ctaGhost, ctaPrimary } from "./cta";
import { ChatGlyph, EnvelopeGlyph } from "./icons";

const whatsappMessage = `Hola, me interesan las invitaciones digitales de ${siteConfig.name} para mi boda.`;

const staggerContainer: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const riseItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * The hero is the only place allowed to move without the visitor asking: the
 * envelope seal breathes behind the wordmark.
 *
 * Reduced motion is not decided here with `useReducedMotion()` — that hook
 * answers differently on the server and in the browser, which made React report
 * a hydration mismatch. `globals.css` neutralises the animation through the
 * `data-reveal` and `data-hero-pulse` hooks instead.
 */
export function Hero() {
  return (
    <section className="bg-forest px-6 pt-14 pb-20 text-ivory sm:px-10 sm:pt-20 sm:pb-28">
      <motion.div
        data-reveal
        className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="shown"
      >
        <motion.div
          variants={riseItem}
          className="relative flex h-20 w-20 items-center justify-center"
        >
          <motion.span
            aria-hidden
            data-hero-pulse
            className="absolute inset-0 rounded-full border border-gold/40"
            animate={{ opacity: [0.5, 0], scale: [1, 1.5] }}
            transition={{ duration: 3.6, ease: "easeOut", repeat: Infinity }}
          />
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/70">
            <EnvelopeGlyph className="h-7 w-7 text-gold" />
          </span>
        </motion.div>

        <motion.p
          variants={riseItem}
          className="mt-7 font-display text-sm tracking-[0.45em] uppercase"
        >
          {siteConfig.name}
        </motion.p>

        <motion.h1
          variants={riseItem}
          className="mt-6 font-display text-[2.1rem] leading-[1.15] sm:text-5xl lg:text-6xl"
        >
          Una invitación digital hecha para tu boda
        </motion.h1>

        <motion.p
          variants={riseItem}
          className="mt-6 max-w-xl text-base leading-relaxed text-sage sm:text-lg"
        >
          Cuenta regresiva, confirmación de asistencia y galería de fotos en una página propia.
          La compartes por WhatsApp y cada respuesta llega sola a tus manos.
        </motion.p>

        <motion.div
          variants={riseItem}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimary}
          >
            Quiero mi invitación
            <ChatGlyph className="h-4 w-4" />
          </a>
          <a href="#ejemplos" className={ctaGhost}>
            Ver ejemplos
          </a>
        </motion.div>

        <motion.p variants={riseItem} className="mt-7 text-sm text-sage">
          Te respondemos el mismo día por WhatsApp.
        </motion.p>
      </motion.div>

      <div aria-hidden className="mx-auto mt-16 h-px w-24 bg-gold/40 sm:mt-20" />
    </section>
  );
}
