import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Brain, Share2, Shield, Sparkles, UserCheck, Zap } from "lucide-react"
import Image from "next/image"

interface FutureTrendProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

function FutureTrend({ icon, title, description, className }: FutureTrendProps) {
  return (
    <div className={`rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 backdrop-blur-sm ${className}`}>
      <div className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>
        <div className="space-y-2">
          <h3 className="font-bold text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function FutureSection() {
  return (
    <section id="future" className="py-24 relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500">
            Looking Ahead
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            The Future of AI Agents
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Explore emerging trends and possibilities for the next generation of AI agents.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FutureTrend
            icon={<Sparkles className="h-6 w-6 text-blue-500" />}
            title="Multi-Agent Cooperation"
            description="Teams of specialized agents working together to solve complex problems that require diverse expertise and perspectives."
          />

          <FutureTrend
            icon={<Brain className="h-6 w-6 text-purple-500" />}
            title="Improved Reasoning"
            description="More sophisticated planning and decision-making capabilities through advanced techniques like chain-of-thought reasoning."
          />

          <FutureTrend
            icon={<UserCheck className="h-6 w-6 text-green-500" />}
            title="Personalization"
            description="Agents that adapt to individual users' needs, preferences, and communication styles for more effective collaboration."
          />

          <FutureTrend
            icon={<Shield className="h-6 w-6 text-red-500" />}
            title="Safety & Alignment"
            description="Built-in guardrails and alignment techniques to ensure agents behave according to human values and intentions."
          />

          <FutureTrend
            icon={<Zap className="h-6 w-6 text-yellow-500" />}
            title="Efficiency & Performance"
            description="Faster, more cost-effective agents through techniques like retrieval-augmented generation and model distillation."
          />

          <FutureTrend
            icon={<Share2 className="h-6 w-6 text-primary" />}
            title="Democratized Creation"
            description="Tools that make it easier for non-technical users to create, customize, and deploy their own AI agents."
          />
        </div>

        <div className="mt-16 rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <Badge className="w-fit bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Research Spotlight</Badge>
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Agentic AI: The Next Evolution
              </h3>
              <p className="text-zinc-400">
                Recent research suggests agentic AI systems could fundamentally transform how we interact with
                technology, enabling more natural, goal-oriented collaboration between humans and AI.
              </p>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-1.5 w-1.5 mt-2 rounded-full bg-blue-500"></div>
                  <p className="text-sm text-zinc-400">
                    <span className="font-medium text-white">Autonomous Problem Solving:</span> Agents that can
                    decompose complex tasks without human guidance
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-1.5 w-1.5 mt-2 rounded-full bg-blue-500"></div>
                  <p className="text-sm text-zinc-400">
                    <span className="font-medium text-white">Persistent Learning:</span> Systems that improve through
                    experience and feedback
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-1.5 w-1.5 mt-2 rounded-full bg-blue-500"></div>
                  <p className="text-sm text-zinc-400">
                    <span className="font-medium text-white">Tool Creation:</span> Agents that develop their own tools
                    to solve new challenges
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                fill
                alt="Futuristic AI Agent Visualization"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

