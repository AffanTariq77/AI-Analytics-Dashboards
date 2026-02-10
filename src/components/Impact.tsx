const Impact = () => {
  return (
    <section className="py-10 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            The End of "Vanity Metrics"
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            We build tools for decision-making, not just observation.
          </p>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Most dashboards fail because they are cluttered and retrospective. We combine data engineering, machine learning, and intuitive UX design to surface Actionable Intelligence.
            </p>
            <ul className="text-base sm:text-lg text-muted-foreground list-disc pl-6 space-y-2">
              <li>Real-Time Health: Monitor KPIs continuously, not manually.</li>
              <li>Automated Alerts: Get notified the moment a metric goes off-track.</li>
              <li>Drill-Down Capability: Go from a high-level executive summary to granular row-level data in two clicks.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
