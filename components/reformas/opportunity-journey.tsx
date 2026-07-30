"use client"

import { useEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion"
import { Check, CheckCircle2, Pause, Play } from "lucide-react"

type OpportunityJourneyProps = {
  label: string
  demo: string
  status: string
  items: readonly (readonly [string, string])[]
  activity: readonly string[]
  footer: string
  pauseLabel: string
  playLabel: string
  selectLabel: string
}

export function OpportunityJourney({
  label,
  demo,
  status,
  items,
  activity,
  footer,
  pauseLabel,
  playLabel,
  selectLabel,
}: OpportunityJourneyProps) {
  const reduceMotion = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)
  const [manualPause, setManualPause] = useState(false)
  const [interactionPause, setInteractionPause] = useState(false)
  const pointerX = useMotionValue(50)
  const pointerY = useMotionValue(36)
  const tiltX = useSpring(useTransform(pointerY, [0, 100], [1.4, -1.4]), { stiffness: 130, damping: 24 })
  const tiltY = useSpring(useTransform(pointerX, [0, 100], [-1.4, 1.4]), { stiffness: 130, damping: 24 })
  const pointerGlow = useMotionTemplate`radial-gradient(420px circle at ${pointerX}% ${pointerY}%, rgba(56, 189, 248, 0.16), transparent 68%)`
  const isRunning = !reduceMotion && !manualPause && !interactionPause

  useEffect(() => {
    if (!isRunning || items.length < 2) return

    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % items.length)
    }, 2400)

    return () => window.clearInterval(interval)
  }, [isRunning, items.length])

  const progress = items.length > 1 ? (activeStep / (items.length - 1)) * 100 : 0

  return (
    <motion.div
      className="relative min-w-0 w-full"
      style={reduceMotion ? undefined : { rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
      onPointerMove={(event) => {
        if (reduceMotion) return
        const bounds = event.currentTarget.getBoundingClientRect()
        pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100)
        pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100)
      }}
      onPointerEnter={() => setInteractionPause(true)}
      onPointerLeave={() => {
        setInteractionPause(false)
        pointerX.set(50)
        pointerY.set(36)
      }}
    >
      <div className="absolute -inset-8 rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-8 -bottom-4 top-8 rounded-2xl border border-sky-300/8 bg-sky-300/[0.025]" aria-hidden="true" />
      <div className="absolute inset-x-4 -bottom-2 top-4 rounded-2xl border border-sky-300/10 bg-[#07101b]" aria-hidden="true" />

      <div className="relative min-w-0 overflow-hidden rounded-2xl border border-sky-300/20 bg-[#07111d]/95 p-5 shadow-[0_38px_130px_-45px_rgba(56,182,255,0.72),inset_0_1px_0_rgba(255,255,255,0.08)] md:p-7">
        <motion.div className="pointer-events-none absolute inset-0" style={{ backgroundImage: pointerGlow }} aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ backgroundImage: "linear-gradient(rgba(56,182,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(56,182,255,0.035) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        {!reduceMotion ? (
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/55 to-transparent shadow-[0_0_18px_rgba(125,211,252,0.5)]"
            animate={{ top: ["-2%", "102%"], opacity: [0, 0.75, 0] }}
            transition={{ duration: 4.8, ease: "linear", repeat: Infinity, repeatDelay: 0.8 }}
            aria-hidden="true"
          />
        ) : null}

        <div className="relative flex items-start justify-between gap-4 border-b border-white/8 pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</p>
            <p className="mt-1 text-xs text-sky-300">{demo}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 sm:flex">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-emerald-300"
                animate={isRunning ? { scale: [1, 1.8, 1], opacity: [0.7, 1, 0.7] } : undefined}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              {status}
            </span>
            <button
              type="button"
              onClick={() => setManualPause((current) => !current)}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-sky-300/35 hover:bg-sky-300/10 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              aria-label={manualPause ? playLabel : pauseLabel}
            >
              {manualPause ? <Play className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="relative mt-6 space-y-2.5">
          <div className="absolute bottom-5 left-[19px] top-5 w-px bg-white/10" aria-hidden="true" />
          <motion.div
            className="absolute bottom-5 left-[19px] top-5 w-px origin-top bg-gradient-to-b from-sky-200 via-sky-400 to-orange-300 shadow-[0_0_12px_rgba(56,189,248,0.65)]"
            animate={{ scaleY: progress / 100 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          {items.map(([title, detail], index) => {
            const isActive = index === activeStep
            const isComplete = index < activeStep

            return (
              <motion.button
                layout
                key={title}
                type="button"
                onClick={() => {
                  setActiveStep(index)
                  setManualPause(true)
                }}
                onFocus={() => setInteractionPause(true)}
                onBlur={() => setInteractionPause(false)}
                aria-pressed={isActive}
                aria-label={`${selectLabel}: ${title}`}
                className={`group relative grid w-full grid-cols-[40px_minmax(0,1fr)_24px] items-center gap-3 overflow-hidden rounded-xl border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                  isActive
                    ? "border-sky-300/35 bg-sky-300/[0.085] shadow-[0_16px_44px_-28px_rgba(56,189,248,0.9),inset_0_1px_0_rgba(255,255,255,0.06)]"
                    : "border-white/8 bg-white/[0.025] hover:border-sky-300/20 hover:bg-sky-300/[0.045]"
                }`}
                animate={reduceMotion ? undefined : { x: isActive ? 5 : 0, scale: isActive ? 1.012 : 1 }}
                transition={{ layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {isActive ? (
                  <motion.span
                    layoutId="journey-active-glow"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(125,211,252,0.09),transparent_58%)]"
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden="true"
                  />
                ) : null}
                <span className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border text-xs font-semibold transition ${isActive ? "border-sky-200/45 bg-sky-300/15 text-sky-100 shadow-[0_0_22px_rgba(56,189,248,0.25)]" : isComplete ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-300" : "border-white/10 bg-white/[0.035] text-zinc-500"}`}>
                  {isComplete ? <Check className="h-4 w-4" strokeWidth={2} aria-hidden="true" /> : String(index + 1).padStart(2, "0")}
                  {isActive && !reduceMotion ? <motion.span className="absolute inset-[-5px] rounded-full border border-sky-300/20" animate={{ scale: [0.85, 1.25], opacity: [0.7, 0] }} transition={{ duration: 1.5, repeat: Infinity }} aria-hidden="true" /> : null}
                </span>
                <span className="relative z-10 min-w-0 py-0.5">
                  <span className={`block text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-zinc-200"}`}>{title}</span>
                  <span className="mt-1 block text-xs text-zinc-500">{detail}</span>
                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.span
                        className="mt-2 flex items-center gap-2 text-[11px] font-medium text-sky-300"
                        initial={{ height: 0, opacity: 0, y: 4 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -4 }}
                        transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="h-1 w-1 rounded-full bg-sky-300" aria-hidden="true" />
                        {activity[index]}
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </span>
                <span className="relative z-10 grid h-6 w-6 place-items-center">
                  <motion.span
                    className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-sky-200" : isComplete ? "bg-emerald-300" : "bg-zinc-700"}`}
                    animate={isActive && !reduceMotion ? { boxShadow: ["0 0 0 0 rgba(125,211,252,0)", "0 0 0 7px rgba(125,211,252,0.12)", "0 0 0 0 rgba(125,211,252,0)"] } : undefined}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </span>
              </motion.button>
            )
          })}
        </div>

        <div className="relative mt-5 overflow-hidden border-y border-white/7 py-2" aria-hidden="true">
          <motion.div
            className="flex w-max items-center gap-5 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[0, 1].map((copyIndex) => (
              <span key={copyIndex} className="flex items-center gap-5 pr-5">
                {items.map(([title]) => <span key={`${copyIndex}-${title}`} className="flex items-center gap-5"><span>{title}</span><span className="h-1 w-1 rounded-full bg-sky-300/40" /></span>)}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative mt-4 flex items-center justify-between gap-3 rounded-xl bg-sky-300 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_35px_-18px_rgba(125,211,252,0.8)]">
          <span className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4" strokeWidth={2} aria-hidden="true" />{footer}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={activeStep}
              className="font-mono text-[10px] tabular-nums"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
            >
              {String(activeStep + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
