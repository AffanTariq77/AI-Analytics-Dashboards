const Impact = () => {
  return (
    <section className="py-10 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            The "Product Excellence" Gap
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Most agencies deliver what you ask for, even if it’s wrong for your scale.
          </p>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              We operate differently. We take ownership of the why behind every feature.
            </p>
            <ul className="text-base sm:text-lg text-muted-foreground list-disc pl-6 space-y-2">
              <li>No "Yes-Men": We challenge assumptions to ensure you're building the right product.</li>
              <li>Future-Proof: We write clean, modular code that doesn't need a rewrite six months later.</li>
              <li>Commercial Focus: Every line of code is written with your user acquisition and retention goals in mind.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
