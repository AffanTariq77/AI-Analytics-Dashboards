import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

import { Lightbulb, Puzzle, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "MVP Development",
      description: [
        "Launch fast without the \"spaghetti code.\" We help startups find product-market fit with robust, scalable MVPs that are investor-ready and built to handle real user growth, not just a demo.",
      ],
    },
    {
      icon: Shield,
      title: "Cloud-Native Systems",
      description: [
        "Scalable, secure, and resilient infrastructure built for the modern web. Whether it's a microservices architecture or a serverless backend, we ensure your platform stays up when traffic spikes.",
      ],
    },
    {
      icon: Puzzle,
      title: "Mobile Experiences",
      description: [
        "Native and cross-platform solutions that feel seamless. We build high-performance iOS and Android apps using modern frameworks that deliver 60fps smoothness under pressure.",
      ],
    },
  ];

  const [hovered, setHovered] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleHoverEnter = (index: number) => {
    if (!isMobile) {
      setHovered(index);
    }
  };

  const handleHoverLeave = () => {
    setHovered(null);
  };

  return (
    <>
      <section
        id="services"
        className="py-8 px-2 sm:px-6 md:py-10 bg-muted/20"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#192841" }}
            >
              Core Engineering Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bridge the gap between "working code" and "product excellence."
            </p>
          </div>

          {/* SVG gradient definition rendered once */}
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <linearGradient
                id="services-gradient"
                x1="0"
                y1="0"
                x2="28"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8923cb" />
                <stop offset="1" stopColor="#374c70ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex h-full"
                  onMouseEnter={() => handleHoverEnter(index)}
                  onMouseLeave={() => handleHoverLeave()}
                >
                  <Card
                    className={`flex flex-col justify-between p-6 md:p-8 border border-border/40 transition-all duration-300 bg-[#F3F9FF] min-h-[320px] h-full w-full ${
                      isMobile
                        ? "hover:shadow-sky-blue"
                        : hovered === index
                          ? "scale-105 shadow-2xl z-20 -translate-y-2"
                          : "hover:shadow-sky-blue hover:-translate-y-1"
                    }`}
                    style={{ background: "#F3F9FF" }}
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon
                            className="h-8 w-8"
                            style={{ color: "#8923cb" }}
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary font-sans tracking-tight text-center">
                        {item.title}
                      </h3>
                      <ul className="text-base text-muted-foreground font-normal font-sans leading-relaxed list-disc pl-6 text-left">
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
