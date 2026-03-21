"use client";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to create a tailored strategy.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Our designers create stunning mockups that align with your brand and captivate your audience.",
  },
  {
    num: "03",
    title: "Development",
    description:
      "We build your website using modern technologies for speed, security, and scalability.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "After thorough testing, we launch your site and provide ongoing support for your success.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
            Our Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our proven 4-step process ensures we deliver exceptional results on
            every project.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card p-6 group hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(108,71,255,.15)] transition-all duration-300"
            >
              <span
                className="text-5xl font-extrabold block mb-4 leading-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  background:
                    "linear-gradient(135deg, rgba(108,71,255,.25), rgba(255,77,141,.15))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.num}
              </span>
              <h4
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
