import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Check,
  Clock,
  Shield,
  Star,
  Zap,
  MessageCircle,
  Subtitles,
  Award,
  ChevronDown,
  Sparkles,
  Tv,
  Trophy,
  Globe,
} from "lucide-react";

import channelsBundle from "@/assets/channels-bundle.webp";
import poster1 from "@/assets/aquaman.webp";
import poster2 from "@/assets/oppenheimer.webp";
import poster3 from "@/assets/red-one.webp";
import poster4 from "@/assets/venom-last-dance.webp";
import poster5 from "@/assets/1QdXdRYfktUSONkl1oD5gc6Be0s.webp";
import poster6 from "@/assets/36xXlhEpQqVVPuiZhfoQuaY4OlA.webp";
import poster7 from "@/assets/hE3LRZAY84fG19a18pzpkZERjTE.webp";
import poster8 from "@/assets/iDHzRALtZCzHVmx7uyjTTKvMAPB.webp";
import testimonial1 from "@/assets/customer-review-1.webp";
import testimonial2 from "@/assets/customer-review-2.webp";
import testimonial3 from "@/assets/customer-review-3.webp";
import testimonial4 from "@/assets/customer-review-4.webp";
import testimonial5 from "@/assets/customer-review-5.webp";
import video1 from "@/assets/onthelot_TikTokDownloader.com_b35cd.webm";
import video2 from "@/assets/meeralakhani_TikTokDownloader.com_1c70b.webm";
import video3 from "@/assets/lifewithlaurenk_TikTokDownloader.com_42a06.webm";
import video4 from "@/assets/zenmaruu_TikTokDownloader.com_d268d.webm";
import video5 from "@/assets/sabbytatt_TikTokDownloader.com_283a8.webm";
import devSmartTv from "@/assets/smart-tv-v2.webp";
import devFirestick from "@/assets/firestick.webp";
import devAppleTv from "@/assets/apple-tv-box-v2.webp";
import devAndroid from "@/assets/android.webp";
import devIphone from "@/assets/iphone-ipad-v2.webp";
import devDator from "@/assets/dator-v2.webp";
import payVisa from "@/assets/bfad8a92-9e9d-4137-93e4-93b016bf825b.svg";
import payMastercard from "@/assets/ecf99052-4ffc-47ef-b2a4-5fdc8afdd182.svg";
import payKlarna from "@/assets/ea5feea8-dff7-4d64-9a30-0a1ec03267dc.svg";
import paySwish from "@/assets/ecbdf0d3-ddf7-4540-a2a9-466612e2b87b.svg";
import payPaypal from "@/assets/ea8c450e-ced4-4480-9093-9e1c6569203f.svg";
import payAmex from "@/assets/ffdf7646-ab53-4ee0-8542-42322983c715.svg";
import sportPl from "@/assets/ai-pl.webp";
import sportCl from "@/assets/ai-cl.webp";
import sportAllsv from "@/assets/ai-allsvenskan.webp";
import sportShl from "@/assets/ai-shl.webp";
import sportVinter from "@/assets/ai-vinter-os.webp";
import sportNations from "@/assets/ai-nations-cup.webp";
import sportLaliga from "@/assets/ai-laliga.webp";
import sportBiathlon from "@/assets/ai-biathlon.webp";
import sportEliteserien from "@/assets/ai-eliteserien.webp";
import chTv4 from "@/assets/tv4.png";
import chViaplay from "@/assets/viaplay.png";
import chHbo from "@/assets/hbo.png";
import chNetflix from "@/assets/netflix.png";
import chDisney from "@/assets/disney-plus.png";
import chEspn from "@/assets/espn.png";
import chEurosport from "@/assets/eurosport.png";
import chSky from "@/assets/sky-sports.png";
import chPrime from "@/assets/prime-video.png";
import chDazn from "@/assets/dazn.png";
import chFox from "@/assets/fox.png";
import brandLogo from "@/assets/brand-logo.png";

const POSTERS = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8];
const SPORTS = [
  { label: "Premier League", img: sportPl },
  { label: "Champions League", img: sportCl },
  { label: "La Liga", img: sportLaliga },
  { label: "Mundial 2026", img: sportNations },
  { label: "UFC & Boxeo", img: sportShl },
  { label: "Deportes de Invierno", img: sportBiathlon },
];

type MediaItem = { type: "image" | "video"; src: string };
const TESTIMONIAL_MEDIA: MediaItem[] = [
  { type: "image", src: testimonial1 },
  { type: "video", src: video1 },
  { type: "image", src: testimonial2 },
  { type: "video", src: video2 },
  { type: "image", src: testimonial3 },
  { type: "video", src: video3 },
  { type: "image", src: testimonial4 },
  { type: "video", src: video4 },
  { type: "image", src: testimonial5 },
  { type: "video", src: video5 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPTVNord4K — 30,000+ canales, todo el deporte y 4K UHD" },
      {
        name: "description",
        content:
          "IPTVNord4K: 30,000+ canales en vivo, 200,000+ películas y series en 4K UHD. Entrega en 15 minutos, 30 días de garantía. Pago único, sin suscripción.",
      },
      { property: "og:title", content: "IPTVNord4K — Todo en 4K" },
      {
        property: "og:description",
        content: "30,000+ canales, todo el deporte y 200,000+ películas. Entrega en 15 min.",
      },
    ],
  }),
  component: IndexPage,
});

type Plan = {
  id: string;
  label: string;
  badge?: string;
  price: number;
  info?: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  { id: "3m", label: "3 Meses", price: 24.99 },
  { id: "6m", label: "6 Meses + Premium Player", badge: "Popular", price: 44.99 },
  { id: "12m", label: "12 Meses + Premium Player", badge: "Mejor Valor", price: 64.99, highlight: true },
];

const CHANNEL_LOGOS = [
  { name: "TV4", img: chTv4 },
  { name: "Viaplay", img: chViaplay },
  { name: "HBO", img: chHbo },
  { name: "Netflix", img: chNetflix },
  { name: "Disney+", img: chDisney },
  { name: "ESPN", img: chEspn },
  { name: "Eurosport", img: chEurosport },
  { name: "Sky Sports", img: chSky },
  { name: "Prime Video", img: chPrime },
  { name: "DAZN", img: chDazn },
  { name: "FOX", img: chFox },
];

const DEVICES = [
  { name: "Smart TV", img: devSmartTv },
  { name: "Firestick", img: devFirestick },
  { name: "Apple TV", img: devAppleTv },
  { name: "Android", img: devAndroid },
  { name: "iPhone / iPad", img: devIphone },
  { name: "Ordenador", img: devDator },
];

const FEATURES = [
  { title: "Sin congelaciones", desc: "Reproducción estable sin buffering, incluso en deportes en vivo de alta calidad.", icon: Zap },
  { title: "Calidad 4K UHD", desc: "Imagen nítida en todos los canales que transmiten en 4K.", icon: Sparkles },
  { title: "Todos los dispositivos", desc: "Smart TV, Firestick, Apple TV, móvil, tablet y ordenador.", icon: Tv },
  { title: "Entrega en 15 min", desc: "Tus datos de acceso se envían por correo inmediatamente después del pago.", icon: Clock },
  { title: "Subtítulos en español", desc: "Películas y series con subtítulos y audio en español.", icon: Subtitles },
  { title: "Soporte WhatsApp", desc: "Obtén ayuda con la instalación cuando la necesites — personas reales.", icon: MessageCircle },
];

const FAQ = [
  {
    q: "¿Necesito un decodificador, antena o cable?",
    a: "No. Solo necesitas un dispositivo que ya tengas (Smart TV, móvil, tablet, Firestick o ordenador) y una conexión a internet.",
  },
  {
    q: "¿Funciona en mi TV y teléfono?",
    a: "Sí. Funciona en todos los Smart TV, Firestick, Apple TV, Android, iPhone, iPad y ordenador.",
  },
  {
    q: "¿Cómo lo instalo?",
    a: "Recibirás una guía paso a paso sencilla inmediatamente después de la compra, y estamos disponibles en WhatsApp si te quedas atascado.",
  },
  { q: "¿Qué tan rápido obtengo acceso?", a: "Tus datos de acceso se envían en un plazo de 15 minutos tras el pago." },
  {
    q: "¿Hay permanencia o suscripción?",
    a: "No. Pagas una sola vez; sin suscripciones ni periodos de permanencia.",
  },
  {
    q: "¿Qué pasa si no estoy satisfecho?",
    a: "Tienes una garantía de devolución de dinero de 30 días. Contáctanos y lo solucionaremos.",
  },
];

const PAYMENT_ICONS = [
  { src: payVisa, alt: "Visa" },
  { src: payMastercard, alt: "Mastercard" },
  { src: payAmex, alt: "American Express" },
  { src: payKlarna, alt: "Klarna" },
  { src: paySwish, alt: "Swish" },
  { src: payPaypal, alt: "PayPal" },
];

function useCountdown(initialSeconds: number) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function IndexPage() {
  const countdown = useCountdown(6 * 3600 - 10);
  const [device, setDevice] = useState<string | null>(null);

  const handleWhatsAppRedirect = (plan: Plan) => {
    const phoneNumber = "+212654472681";
    const message = `Hola, quiero comprar el plan: ${plan.label} por ${plan.price}€. Mi dispositivo es: ${device || "No especificado"}.`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card/70 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="IPTVNord4K">
            <img src={brandLogo} alt="IPTVNord4K" className="h-7 w-auto" />
          </a>
          <a
            href="#bestall"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition"
          >
            Comprar ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-16 pb-20 text-center bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Campaña · 50% de descuento en todos los paquetes
        </div>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl sm:text-7xl font-bold leading-[1.02]">
          Todo lo que quieres ver.{" "}
          <span className="italic font-medium text-primary">A mitad de precio.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          30,000+ canales, todo el deporte y 200,000+ películas y series. Una suscripción — en todos tus dispositivos.
        </p>

        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <strong className="text-foreground">4.9 de 5</strong>
          </span>
          <span>· 2,400+ clientes satisfechos</span>
          <span>· Entrega en 15 min</span>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="#bestall"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-glow hover:brightness-110 transition sm:w-auto w-full"
          >
            Obtener acceso ahora — 50% dto.
          </a>
          <p className="text-xs text-muted-foreground">Garantía de devolución de 30 días · Sin permanencia</p>
        </div>

        {/* Floating Posters */}
        <div className="mt-16 relative h-[280px] sm:h-[400px] w-full max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            {POSTERS.map((src, i) => (
              <div
                key={i}
                className="relative h-[240px] sm:h-[340px] w-[160px] sm:w-[230px] shrink-0 rounded-xl overflow-hidden border shadow-2xl transition-transform hover:scale-105"
                style={{ transform: `translateY(${i % 2 === 0 ? "20px" : "-20px"})` }}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Logos */}
      <section className="border-y bg-card/30 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Incluido en todos los paquetes
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {CHANNEL_LOGOS.map((c) => (
              <div key={c.name} className="h-8 w-24 flex items-center justify-center">
                <img src={c.img} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          {/* Payment Options under "Included in all packages" */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-60">
            {PAYMENT_ICONS.map((p, i) => (
              <img key={i} src={p.src} alt={p.alt} className="h-5 w-auto grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">¿Por qué elegir IPTVNord4K?</h2>
            <p className="mt-4 text-muted-foreground">La experiencia de streaming más estable del mercado.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6 hover:border-primary/50 transition">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-24 px-4 bg-accent/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-5xl font-bold">Todo el deporte en vivo</h2>
              <p className="mt-4 text-muted-foreground">
                No te pierdas ni un segundo. Premier League, Champions League, La Liga, F1, UFC y mucho más en 4K UHD.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Globe className="h-5 w-5" />
              Canales de todo el mundo
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {SPORTS.map((s, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border bg-card">
                <img src={s.img} alt={s.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-bold text-white">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="bestall" className="py-24 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Sección de Ofertas</h2>
            <p className="mt-4 text-muted-foreground">Selecciona el plan que mejor se adapte a ti.</p>
            <div className="mt-4 flex items-center justify-center gap-2 text-primary font-bold">
              <Clock className="h-5 w-5" />
              La oferta termina en: {countdown}
            </div>
          </div>

          {/* Device Selection First */}
          <div className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">1. Elige tu dispositivo</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {DEVICES.map((d) => (
                <button
                  key={d.name}
                  onClick={() => setDevice(d.name)}
                  className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 transition ${
                    device === d.name ? "border-primary bg-primary/5 shadow-sm" : "border-border hover:border-primary/40 bg-card"
                  }`}
                >
                  <img src={d.img} alt={d.name} className="h-10 w-10 object-contain mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-tight">{d.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border-2 p-8 transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight ? "border-primary bg-card shadow-2xl scale-105 z-10" : "border-border bg-card/50"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    {plan.badge}
                  </span>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-4">{plan.label}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-2xl font-bold">€</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "30,000+ Canales",
                    "200,000+ Películas y Series",
                    "Calidad 4K / UHD / FHD",
                    "Todos los Deportes en vivo",
                    "Actualizaciones gratuitas",
                    "Soporte 24/7 WhatsApp",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="h-5 w-5 text-success shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsAppRedirect(plan)}
                  className={`w-full h-14 rounded-full text-lg font-bold transition shadow-glow ${
                    plan.highlight ? "bg-primary text-primary-foreground hover:brightness-110" : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  Comprar ahora
                </button>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" /> Pago 100% seguro a través de WhatsApp
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-accent/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold">Lo que dicen nuestros clientes</h2>
            <div className="mt-4 flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 font-bold text-lg">4.9/5</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {TESTIMONIAL_MEDIA.map((m, i) => (
              <div key={i} className="aspect-[9/16] rounded-2xl border bg-card overflow-hidden">
                {m.type === "image" ? (
                  <img src={m.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <video src={m.src} muted loop playsInline autoPlay className="h-full w-full object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6">
                <h3 className="text-lg font-bold flex items-center justify-between">
                  {item.q}
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16 px-4 bg-card/30">
        <div className="mx-auto max-w-6xl text-center">
          <img src={brandLogo} alt="IPTVNord4K" className="mx-auto h-9 w-auto" />
          <p className="mt-6 text-muted-foreground max-w-md mx-auto">
            El proveedor de IPTV líder en el mercado con más de 30,000 canales y la mejor estabilidad.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-primary transition">Términos y condiciones</a>
            <a href="#" className="hover:text-primary transition">Política de privacidad</a>
            <a href="#" className="hover:text-primary transition">Garantía de reembolso</a>
            <a href="#" className="hover:text-primary transition">Contacto</a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4 opacity-40">
            {PAYMENT_ICONS.map((p, i) => (
              <img key={i} src={p.src} alt={p.alt} className="h-4 w-auto" />
            ))}
          </div>
          <p className="mt-12 text-xs text-muted-foreground">
            © 2026 IPTVNord4K. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
