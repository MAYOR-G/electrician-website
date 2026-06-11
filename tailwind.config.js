/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07162f",
        midnight: "#0b1f3f",
        cobalt: "#0c6bff",
        cyan: "#36c5ff",
        safety: "#ffd84d",
        amber: "#f5b72f",
        slate: "#64748b",
        mist: "#eef5ff",
        cloud: "#f8fbff",
        line: "#d9e6f7",
        ink: "#10233f",
        steel: "#334863",
      },
      fontFamily: {
        display: ["Sora", "Avenir Next", "Segoe UI", "sans-serif"],
        body: ["Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        blue: "0 24px 70px rgba(12, 107, 255, 0.18)",
        card: "0 18px 48px rgba(7, 22, 47, 0.12)",
        deep: "0 30px 90px rgba(7, 22, 47, 0.32)",
        glow: "0 0 0 1px rgba(54, 197, 255, 0.18), 0 28px 80px rgba(12, 107, 255, 0.22)",
        insetLine: "inset 0 1px 0 rgba(255, 255, 255, 0.64)",
      },
      backgroundImage: {
        "circuit-hero":
          "radial-gradient(circle at 14% 16%, rgba(54,197,255,0.22), transparent 28%), radial-gradient(circle at 78% 6%, rgba(255,216,77,0.16), transparent 22%), linear-gradient(135deg, #07162f 0%, #0b1f3f 52%, #092f6c 100%)",
        "clean-grid":
          "linear-gradient(90deg, rgba(12,107,255,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(12,107,255,0.07) 1px, transparent 1px)",
        "glass-panel":
          "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06) 52%, rgba(54,197,255,0.1))",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.28", transform: "scaleX(0.92)" },
          "50%": { opacity: "0.78", transform: "scaleX(1)" },
        },
        meterSweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(210%)" },
        },
      },
      animation: {
        riseIn: "riseIn 720ms ease both",
        pulseLine: "pulseLine 4s ease-in-out infinite",
        meterSweep: "meterSweep 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
