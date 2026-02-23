import { ArrowRightIcon } from "lucide-react";
import { GhostButton } from "./Buttons";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 2xl:pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
          <div className="relative z-10">
            <motion.h2
              className="text-2xl sm:text-4xl font-semibold mb-6"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
              }}
            >
              Experience Premium & Reliable Products – Built to Last, Designed
              to Impress
            </motion.h2>
            <motion.p
              className="max-sm:text-sm text-slate-400 mb-10 max-w-xl mx-auto"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.2,
              }}
            >
              Discover the difference with Brand SphereX. 🌟 Our products are
              expertly crafted for your everyday needs, combining durability,
              style, and performance. From design to function, every detail is
              made to impress and built to stand the test of time. 💎 Experience
              the quality you truly deserve — reliable solutions that elevate
              your daily life.
            </motion.p>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.3,
              }}
            >
              <a href="https://amzn.to/3M9AolC">
                <GhostButton className="px-8 py-3 gap-2">
                  Start your Shoping <ArrowRightIcon size={20} />
                </GhostButton>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
