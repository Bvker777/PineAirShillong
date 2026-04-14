import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-pine-charcoal mb-6">About Pine Air Shillong™</h2>
          <div className="w-12 h-px bg-pine-accent mx-auto"></div>
        </div>

        <div className="space-y-10 text-pine-gray leading-loose font-light text-lg">
          <p>
            Pine Air Bed & Breakfast offers a unique alternative stay experience and is located on the outskirts of Shillong, 5 minute walk from the Golf course, 3 km drive to North East Hills University, in a Residential Neighbourhood of Mawlai Mawroh – directly opposite the Mawroh Community Hall and Indoor Sports Complex.
          </p>
        </div>
      </div>
    </section>
  );
};
