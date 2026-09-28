import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { HeroRoleShowcase } from "@/components/morphui/HeroRoleShowcase";

const problemCards = [
  {
    title: "Every role sees the same screen",
    body: "Founders squint at support queues. Engineers scroll past pipeline charts. The interface never learned who is holding the mouse.",
  },
  {
    title: "Users hunt the same actions daily",
    body: "Muscle memory fights the product. High-leverage buttons hide three clicks deep while noise stays above the fold.",
  },
  {
    title: "Dashboards become junk drawers",
    body: "Tiles accumulate. Metrics multiply. Nobody dares delete a widget because “someone might need it.”",
  },
  {
    title: "Onboarding is too generic",
    body: "Day-one tours show the same tour to sales, finance, and ops — so nobody feels seen on minute ten.",
  },
  {
    title: "Software feels slower as it grows",
    body: "More capability ships as more chrome. Teams don’t need more UI — they need UI that bends around intent.",
  },
];

const steps = [
  { title: "Understand role", body: "Founder, sales, engineer, ops, finance, support — each lens reweights the canvas." },
  { title: "Read workflow", body: "Plan, sell, ship, coordinate, report, or support — workflows reorder what matters first." },
  { title: "Prioritize intent", body: "Pain signals and focus modes decide what glows, what dims, and what leaves the room." },
  { title: "Generate interface", body: "MorphUI emits ranked modules, CTAs, hidden noise, and a plain-language explanation." },
  { title: "Learn from usage", body: "Wire in telemetry later — this MVP proves the interaction loop without a model bill." },
];

const useCases = [
  "SaaS onboarding that matches the seat, not the brochure",
  "Internal tools that respect how each team actually works",
  "Enterprise dashboards that shrink to executive or operator truth",
  "CRM views that spotlight pipeline, risk, and follow-ups",
  "Support consoles tuned to SLA, sentiment, and escalations",
  "Founder dashboards with runway, pulse, and narrative arcs",
];

const faq = [
  {
    q: "Is this just a theme switcher?",
    a: "No. MorphUI changes module priority, density, hidden noise, and highlighted actions — not just colors.",
  },
  {
    q: "Do I need an LLM to run the demo?",
    a: "No API keys. The playground engine is deterministic TypeScript so you can feel the loop in seconds.",
  },
  {
    q: "Can we export layouts?",
    a: "Save locally in your browser or push sessions to team history — JSON payloads are ready for your control plane.",
  },
  {
    q: "Who is MorphUI for?",
    a: "Product and design teams who want software to feel personal without shipping a bespoke build for every persona.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/15 via-slate-950/40 to-cyan-500/10 p-8 sm:p-12 lg:p-14" data-reveal>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
        <div data-stagger className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">Adaptive interface playground</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Software should change shape around the user.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              MorphUI turns roles, workflows, and intent into adaptive interfaces that hide noise, surface priorities, and make
              software feel personal — not another generic AI dashboard.
            </p>
            <div data-stagger className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              >
                Try the interface playground
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur hover:border-cyan-400/40"
              >
                View adaptive dashboard
              </Link>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Turn one bloated dashboard into six role-specific workspaces — founder, sales, engineer, ops, finance, support.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-5 shadow-[0_0_80px_rgba(139,92,246,0.15)] backdrop-blur-xl">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Live morph</p>
            <p className="mt-1 text-center text-sm text-slate-300">Interfaces should change based on what you are trying to do.</p>
            <div className="mt-5">
              <HeroRoleShowcase />
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="space-y-8" data-reveal>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">The one-size-fits-all software problem</h2>
          <p className="mt-3 text-sm text-slate-400">
            Most products force everyone into the same screen. MorphUI is the layer that lets the screen adapt to the person
            doing the work.
          </p>
        </div>
        <div data-stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((c) => (
            <div
              key={c.title}
              className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition duration-300 hover:border-fuchsia-400/25 hover:shadow-[0_0_30px_rgba(232,121,249,0.08)]"
            >
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="preview" className="space-y-6" data-reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Interactive product preview</h2>
        <p className="max-w-2xl text-sm text-slate-400">
          The hero above is live. For the full playground — workflows, focus modes, pain signals, before/after, and saved
          views — jump into the lab.
        </p>
        <Link
          href="/demo"
          className="motion-card motion-hover-lift inline-flex rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-50 hover:border-cyan-300/50"
        >
          Open the adaptive lab →
        </Link>
      </section>

      <section id="how" className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start" data-reveal>
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">How MorphUI works</h2>
          <p className="mt-3 text-sm text-slate-400">
            A tight loop: understand the human, read the job to be done, then generate a workspace that explains itself.
          </p>
        </div>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="motion-card motion-hover-lift flex gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/40 to-fuchsia-500/30 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="before-after" className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950/80 via-violet-950/20 to-slate-950/80 p-8 sm:p-10 lg:grid-cols-2" data-reveal>
        <div>
          <h2 className="text-2xl font-bold text-white">Before / after</h2>
          <p className="mt-3 text-sm text-slate-400">
            Before: a cluttered shell where every tile competes for attention. After: a role-specific workspace with ranked
            modules, glowing CTAs, and a narrative about what moved.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-rose-300">●</span> Cluttered dashboard — junk metrics, legacy tabs, alert volcanoes.
            </li>
            <li className="flex gap-2">
              <span className="text-lime-300">●</span> Role-specific interface — runway for founders, pipeline for sales,
              incidents for engineers.
            </li>
          </ul>
        </div>
        <div className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-300">
          <p className="font-medium text-white">What changes in the product</p>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li>Dashboard modules reorder with workflow bias.</li>
            <li>Layout grid morphs (bento, rail, editorial, ops dense).</li>
            <li>Priority cards and CTAs inherit glow states.</li>
            <li>Distractions move to a hidden rail with reasons.</li>
            <li>Interface score estimates clarity and time-to-action.</li>
          </ul>
          <Link href="/dashboard" className="mt-6 inline-block text-sm font-semibold text-fuchsia-300 hover:underline">
            Explore the dashboard lab →
          </Link>
        </div>
      </section>

      <section id="use-cases" className="space-y-6" data-reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Use cases</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {useCases.map((u) => (
            <div key={u} className="rounded-xl border border-lime-400/15 bg-lime-400/[0.04] px-4 py-3 text-sm text-slate-200">
              {u}
            </div>
          ))}
        </div>
      </section>

      <section id="surface" className="space-y-6" data-reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Product surface</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Role selector", d: "Tabs that instantly re-rank the playground." },
            { t: "Module library", d: "Runway, pipeline, incidents, SLA — real tiles with actions." },
            { t: "Layout preview", d: "Bento, rail, editorial, ops dense grids." },
            { t: "Distraction removal", d: "Noise tiles demoted with explicit reasons." },
            { t: "Generated explanation", d: "Why modules moved — readable, not robotic." },
            { t: "Saved views", d: "Pin morphs locally or sync to team history." },
          ].map((x) => (
            <div key={x.t} className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-cyan-100">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-400">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="max-w-3xl space-y-4" data-reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Why now</h2>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          AI is shifting software from static screens to adaptive systems. MorphUI is the product-design layer that makes
          that shift feel intentional: playful, glassy, and alive — not another corporate command center.
        </p>
      </section>

      <section id="pricing" className="space-y-6" data-reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Pricing snapshot</h2>
            <p className="mt-2 text-sm text-slate-400">Named tiers for evaluation — not published list prices. Full notes live on the pricing page.</p>
          </div>
          <Link href="/pricing" className="text-sm font-semibold text-fuchsia-300 hover:underline">
            View all plans →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "Starter", p: "Small teams", d: "Manual adaptive views, basic role templates." },
            { n: "Product", p: "SaaS teams", d: "Onboarding personalization, saved views, analytics." },
            { n: "Scale", p: "Enterprise", d: "Role logic, usage learning, admin controls." },
            { n: "Enterprise", p: "Custom", d: "Integrations, security review, white-label adaptive UI." },
          ].map((t) => (
            <div key={t.n} className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.p}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{t.n}</h3>
              <p className="mt-2 text-xs text-slate-400">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-4" data-reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">FAQ</h2>
        <div className="space-y-2">
          {faq.map((f) => (
            <details key={f.q} className="motion-card motion-hover-lift group rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-white marker:text-fuchsia-400">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-500/15 p-10 text-center" data-reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Build the interface that matches the human.</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-200">
          Ship the playground to your team today — compare layouts, save views, and prove adaptive UI before you wire models.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/demo" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900">
            Launch playground
          </Link>
          <Link href="/contact" className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Talk to product
          </Link>
        </div>
      </section>

      <ProductHonestyNote status="demo" />
    </div>
  );
}
