import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Brain, Cpu, Workflow } from "lucide-react"
import Image from "next/image"

export default function AgentSection() {
  return (
    <section id="agents" className="py-24 relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Understanding AI Agents
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            What are AI Agents?
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            AI Agents are autonomous systems that can understand, decide, and act to solve complex tasks.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Intelligent Decision Making</h3>
              </div>
              <p className="text-zinc-400">
                Unlike simple automation tools, AI Agents can analyze context, make informed decisions, and adapt to
                changing conditions without constant human supervision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Workflow className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Autonomous Workflows</h3>
              </div>
              <p className="text-zinc-400">
                Agents can orchestrate complex workflows, integrating with tools and services to accomplish multi-step
                tasks that would otherwise require human intervention.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Extensible Capabilities</h3>
              </div>
              <p className="text-zinc-400">
                Through tool use and integration with external systems, agents can be extended with new capabilities
                beyond their initial programming.
              </p>
            </div>

            <Button variant="link" className="w-fit gap-1 text-primary hover:text-primary/90 px-0">
              Learn more about agent architecture
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 p-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/20 opacity-50 blur-xl"></div>
            <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-black">
              <div className="flex h-10 items-center gap-2 border-b border-zinc-800 bg-zinc-950 px-4">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-zinc-400">Agent Architecture</div>
              </div>

              <div className="p-6">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="AI Agent Architecture Diagram"
                  className="rounded-md border border-zinc-800 bg-zinc-950"
                />

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4 text-center">
                    <Bot className="mx-auto h-6 w-6 text-primary mb-2" />
                    <div className="text-sm font-medium text-white">LLM Core</div>
                    <div className="text-xs text-zinc-400">Language processing</div>
                  </div>

                  <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4 text-center">
                    <Workflow className="mx-auto h-6 w-6 text-purple-500 mb-2" />
                    <div className="text-sm font-medium text-white">Tools</div>
                    <div className="text-xs text-zinc-400">External capabilities</div>
                  </div>

                  <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4 text-center">
                    <Brain className="mx-auto h-6 w-6 text-blue-500 mb-2" />
                    <div className="text-sm font-medium text-white">Memory</div>
                    <div className="text-xs text-zinc-400">Context retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

