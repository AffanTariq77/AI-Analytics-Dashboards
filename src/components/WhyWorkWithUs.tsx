import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, Zap } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Action-Oriented Design",
    description:
      "Every widget and chart is tied to a decision, alert, or next step. We ruthlessly eliminate \"vanity metrics\" that look good but offer no business value.",
  },
  {
    icon: Rocket,
    title: "Secure & Role-Based Access",
    description:
      "Enterprise-grade security is standard. We implement Row-Level Security (RLS) and strict permissions, ensuring users only see the data they are authorized to access.",
  },
  {
    icon: Zap,
    title: "Tailored to Your Business",
    description:
      "No templates. We custom-build the data model around your specific KPIs, workflows, and terminology - so the data actually makes sense to your team.",
  },
];

const WhyWorkWithUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-8 px-2 sm:px-6 md:py-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            Why Our Dashboards Deliver Value
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We bridge the gap between Data Engineering and Business Strategy.
          </p>
        </div>
        {/* SVG gradient definition rendered once */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient
              id="why-gradient"
              x1="0"
              y1="0"
              x2="32"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8923cb" />
              <stop offset="1" stopColor="#8923cb" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className={`p-6 md:p-8 border border-border/60 transition-all duration-300 ${
                  isMobile
                    ? "hover:shadow-sky-blue"
                    : "hover:border-border/80 hover:shadow-sky-blue"
                }`}
                style={{ background: "#F3F9FF" }}
              >
                <div className="mb-6 flex justify-center items-center">
                  <Icon className="h-8 w-8" color="url(#why-gradient)" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#192841" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
