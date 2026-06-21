import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Check,
  Globe,
  Zap,
  Trophy,
  Users,
  Tv,
  Shield,
  Clock,
} from "lucide-react";
import brandLogo from "@/assets/brand-logo.png.asset.json";

export const Route = createFileRoute("/oferta-mundial")({
  head: () => ({
    meta: [
      { title: "Oferta Mundial 2026 — IPTVNORD4K" },
      {
        name: "description",
        content:
          "Sigue el Mundial 2026 en vivo con IPTVNORD4K. 30,000+ canales, todo el fútbol en 4K. Desde 24.99€.",
      },
    ],
  }),
  component: OfertaMundialPage,
});

type Plan = {
  id: "24" | "44" | "64";
  label: string;
  price: number;
  period: string;
  perMonth: string;
  highlight?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    id: "24",
    label: "3 Meses",
    price: 24.99,
    period: "3 meses",
    perMonth: "≈8.33€/mes",
  },
  {
    id: "44",
    label: "1 Año",
    price: 44.99,
    period: "1 año",
    perMonth: "≈3.75€/mes",
    highlight: true,
    badge: "Más Popular",
  },
  {
    id: "64",
    label: "3 Años + 6 Meses",
    price: 64.99,
    period: "3.5 años",
    perMonth: "≈1.55€/mes",
    badge: "🏆 Mejor Oferta",
  },
];

const FEATURES = [
  {
    icon: Globe,
    title: "30,000+ Canales",
    desc: "Televisión de todo el mundo en tu dispositivo.",
  },
  {
    icon: Trophy,
    title: "Todo el Fútbol",
    desc: "Mundial 2026, La Liga, Champions, Premier League y más.",
  },
  {
    icon: Zap,
    title: "4K UHD",
    desc: "Calidad de imagen perfecta sin buffering.",
  },
  {
    icon: Tv,
    title: "Todos los Dispositivos",
    desc: "Smart TV, móvil, tablet, Fire Stick, Apple TV.",
  },
  {
    icon: Users,
    title: "Múltiples Pantallas",
    desc: "Mira en varios dispositivos simultáneamente.",
  },
  {
    icon: Clock,
    title: "Entrega en 15 min",
    desc: "Acceso inmediato después del pago.",
  },
];

const FAQ = [
  {
    q: "¿Cómo veo el Mundial 2026?",
    a: "Con IPTVNORD4K tienes acceso a todos los canales que transmiten el Mundial. Simplemente inicia sesión en tu dispositivo y disfruta.",
  },
  {
    q: "¿Funciona en mi Smart TV?",
    a: "Sí. Funciona en Smart TV, Fire Stick, Apple TV, Android, iPhone, iPad y cualquier dispositivo con conexión a internet.",
  },
  {
    q: "¿Hay contrato o compromiso?",
    a: "No. Pagas una sola vez, sin suscripción mensual ni compromiso. Acceso de por vida a tu plan.",
  },
  {
    q: "¿Qué pasa si no estoy satisfecho?",
    a: "Garantía de 30 días. Si no te gusta, te devolvemos tu dinero sin preguntas.",
  },
  {
    q: "¿Es legal?",
    a: "Nuestro servicio es completamente legal. Ofrecemos acceso a canales públicos de televisión.",
  },
  {
    q: "¿Cuándo empieza el Mundial 2026?",
    a: "El Mundial 2026 se jugará en EE.UU., Canadá y México. Tendrás acceso a toda la cobertura en vivo.",
  },
];

function PlanCard({
  plan,
  active,
  onSelect,
}: {
  plan: Plan;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative w-full text-left rounded-2xl border-2 p-6 transition ${
        active
          ? "border-red-500 bg-red-50/50 shadow-lg"
          : "border-gray-200 hover:border-red-400 bg-white"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-4 inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          {plan.badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="text-sm font-semibold text-gray-700">{plan.label}</div>
          <div className="mt-2 flex items-baseline gap-1">
            <div className="text-3xl font-bold text-gray-900">{plan.price}€</div>
            <div className="text-xs text-gray-500">por {plan.period}</div>
          </div>
          <div className="mt-1 text-xs font-medium text-red-600">{plan.perMonth}</div>
        </div>
        <div
          className={`h-6 w-6 rounded-full border-2 flex-shrink-0 mt-1 ${
            active
              ? "border-red-500 bg-red-500"
              : "border-gray-300"
          }`}
        >
          {active && <Check className="h-full w-full text-white p-0.5" />}
        </div>
      </div>
    </button>
  );
}

function OfertaMundialPage() {
  const [selected, setSelected] = useState<Plan["id"]>("44");
  const plan = useMemo(() => PLANS.find((p) => p.id === selected)!, [selected]);

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "https://iptv-clocking-00.vercel.app/api/redirect-checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: Math.round(plan.price * 100),
            customerEmail: "",
            origin: window.location.origin,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.text();
        alert(`Error: ${error}`);
        return;
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("No checkout URL received");
      }
    } catch (error) {
      alert(`Error al procesar el pago: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center gap-2 font-semibold" aria-label="IPTVNORD4K">
            <img src={brandLogo.url} alt="IPTVNORD4K" className="h-7 w-auto" />
          </a>
          <a
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
          >
            ← Volver
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-16 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 mb-6">
          <Trophy className="h-4 w-4" />
          Oferta Especial Mundial 2026
        </div>

        <h1 className="mx-auto max-w-3xl text-5xl sm:text-6xl font-black leading-tight">
          Sigue el <span className="text-red-600">Mundial 2026</span> en vivo
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          30,000+ canales, todo el fútbol en 4K UHD. Desde <strong>24.99€</strong> por 3 meses.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-green-600" />
            <strong>Acceso inmediato</strong>
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-green-600" />
            <strong>Garantía 30 días</strong>
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-green-600" />
            <strong>Sin contrato</strong>
          </span>
        </div>
      </section>

      {/* Pricing */}
      <section id="planes" className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Elige tu plan</h2>
            <p className="mt-2 text-gray-600">Todos incluyen 30,000+ canales y acceso al Mundial 2026</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {PLANS.map((p) => (
              <PlanCard
                key={p.id}
                plan={p}
                active={selected === p.id}
                onSelect={() => setSelected(p.id)}
              />
            ))}
          </div>

          <div className="rounded-2xl bg-white border-2 border-red-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Tu selección</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-semibold">{plan.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duración</span>
                    <span className="font-semibold">{plan.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio por mes</span>
                    <span className="font-semibold text-green-600">{plan.perMonth}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-3xl font-bold text-red-600">{plan.price}€</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">Incluye</h3>
                <ul className="mt-6 space-y-3">
                  {[
                    "30,000+ canales en directo",
                    "Todo el Mundial 2026",
                    "La Liga, Champions, Premier League",
                    "4K UHD sin buffering",
                    "Todos los dispositivos",
                    "Garantía 30 días",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-8 w-full rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Ir a la caja segura — {plan.price}€ →
            </button>

            <p className="mt-4 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              Pago seguro con SSL · Garantía 30 días
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            ¿Por qué elegir IPTVNORD4K?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-gray-600">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl bg-white border border-gray-200 p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {f.q}
                  <span className="ml-2 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-24 text-center bg-gradient-to-r from-red-600 to-yellow-500">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          ¿Listo para el Mundial?
        </h2>
        <p className="mt-4 text-white/90 text-lg">
          Acceso inmediato a 30,000+ canales. Desde 24.99€.
        </p>
        <button
          onClick={handleCheckout}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-red-600 shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          Comprar ahora — {plan.price}€ →
        </button>
      </section>

      <footer className="border-t bg-gray-50 px-4 py-10 text-center text-sm text-gray-600">
        <img src={brandLogo.url} alt="IPTVNORD4K" className="mx-auto h-8 w-auto mb-2" />
        <p>© 2026 IPTVNORD4K — Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
