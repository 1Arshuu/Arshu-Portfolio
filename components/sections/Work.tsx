"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightUpLine, RiPlayCircleLine } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { PROJECTS, WORK_FILTERS, type Project, type ProjectStatus } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Amber status pill for in-progress / coming-soon projects. */
function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "live") return null;
  const text = status === "in-progress" ? "In Progress" : "Coming Soon";
  return (
    <span className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-accent text-[10px] uppercase tracking-wider text-amber-400">
      {text}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const violet = index % 2 === 1;
  const glow = violet ? "rgba(123,97,255,0.16)" : "rgba(212,168,67,0.16)";

  const inner = (
    <div className="relative grid grid-cols-1 gap-8 p-8 md:grid-cols-[1fr_380px] md:items-center md:p-10">
      {/* Info */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className={`font-accent text-[11px] uppercase tracking-wider ${violet ? "text-violet" : "text-gold"}`}>
            {project.tag}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="mt-4 flex items-center gap-3 font-heading text-3xl font-bold text-ink md:text-[2.6rem]">
          {project.name}
          {project.url && (
            <RiArrowRightUpLine className="text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
          )}
        </h3>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted">
          {project.description}
        </p>
        {project.url && (
          <span className="mt-5 inline-block font-accent text-[11px] text-dim">
            {project.url.replace("https://", "")}
          </span>
        )}
      </div>

      {/* Preview placeholder — film-frame styled */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:h-60">
        {/* film perforations */}
        <div className="absolute inset-y-0 left-0 flex w-4 flex-col justify-around bg-black/30 px-1">
          {Array.from({ length: 6 }).map((_, k) => (
            <span key={k} className="h-2 w-2 rounded-[2px] bg-white/15" />
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 flex w-4 flex-col justify-around bg-black/30 px-1">
          {Array.from({ length: 6 }).map((_, k) => (
            <span key={k} className="h-2 w-2 rounded-[2px] bg-white/15" />
          ))}
        </div>
        <RiPlayCircleLine
          className={`${violet ? "text-violet" : "text-gold"} opacity-60 transition-transform duration-500 group-hover:scale-110`}
          size={44}
        />
        <span
          className="absolute font-display text-6xl italic"
          style={{ opacity: 0.08, color: violet ? "#7B61FF" : "#D4A843" }}
        >
          {project.name
            .split(/[\s/]+/)
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </span>
        <span className="absolute bottom-3 font-accent text-[9px] uppercase tracking-wider text-dim">
          {"// preview"}
        </span>
      </div>
    </div>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: EASE }}
    >
      <TiltCard
        intensity={5}
        glow={glow}
        className="group glass glass-highlight overflow-hidden rounded-3xl"
      >
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="block"
          >
            {inner}
          </a>
        ) : (
          inner
        )}
      </TiltCard>
    </motion.div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]["value"]>("all");

  const visible = useMemo(
    () =>
      filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="work" className="relative w-full px-6 py-20 md:px-10 md:py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label="04 — Selected Work"
          serif="Work that"
          sans="speaks."
          size="text-5xl md:text-7xl"
        />

        <p className="mt-7 max-w-lg font-body text-lg text-muted">
          Apps, websites, and products built for real businesses.
        </p>

        {/* Filter tabs */}
        <div className="mt-10 flex items-center gap-8">
          {WORK_FILTERS.map((tab) => {
            const active = filter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value)}
                className="group relative font-accent text-xs uppercase tracking-widest transition-colors"
                style={{ color: active ? "#D4A843" : "#56535f" }}
              >
                {tab.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-gold to-violet transition-all duration-300"
                  style={{ width: active ? "100%" : "0%" }}
                />
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <motion.div layout className="mt-14 flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
