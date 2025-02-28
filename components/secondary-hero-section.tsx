import Image from "next/image";

export default function SecondaryHeroSection() {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image on the left */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative h-[400px] w-full">
            <Image
              src="/hero2.png"
              alt="Secondary Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content on the right */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Automation for Complex Tasks
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Our AI agents can understand context, learn from interactions, and
            execute complex workflows autonomously. Build systems that adapt to
            changing conditions and solve real-world problems with minimal human
            intervention.
          </p>
          <button className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full hover:from-primary/90 hover:to-purple-600/90 transition">
            Explore Capabilities
          </button>
        </div>
      </div>
    </section>
  );
}
