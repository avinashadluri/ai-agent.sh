import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block rounded-full border border-primary/20 bg-black/30 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                The Future of AI Automation
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                <span className="block text-zinc-200">Build Intelligent</span>
                <span className="bg-gradient-to-r from-primary via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  AI Agents
                </span>
              </h1>
              <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create autonomous AI systems that understand context, make
                decisions, and take meaningful actions to solve complex
                problems.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-800 bg-black/50 text-white hover:bg-zinc-900 backdrop-blur-sm"
              >
                View Documentation
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px]">
              <Image
                src="/hero.png?height=500&width=500"
                width={500}
                height={500}
                alt="AI Agent Visualization"
                className="object-contain"
              />
              {/* Animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[300px] w-[300px] rounded-full border border-primary/30 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute h-[400px] w-[400px] rounded-full border border-purple-500/30 animate-[spin_80s_linear_infinite_reverse]"></div>
                <div className="absolute h-[200px] w-[200px] rounded-full border border-blue-500/30 animate-[spin_40s_linear_infinite]"></div>
              </div>

              {/* Floating data points */}
              <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-primary animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/3 h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
