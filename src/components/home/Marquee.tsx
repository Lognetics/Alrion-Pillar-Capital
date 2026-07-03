const PARTNERS = [
  "Global Macro Excellence",
  "Infrastructure Growth",
  "Frontier Technology",
  "Impact Through Investment",
  "Independent Governance",
  "Aligned Interests",
  "Absolute Transparency",
  "Rigorous Oversight",
];

export function Marquee() {
  return (
    <section className="border-b border-line bg-paper py-8">
      <div className="shell">
        <p className="mb-6 text-center text-xs tracking-[0.28em] text-mist-500">
          FOUR AUTONOMOUS STRATEGIES · ONE RIGOROUS FRAMEWORK
        </p>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-16">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-medium tracking-wide text-navy-900/40"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
